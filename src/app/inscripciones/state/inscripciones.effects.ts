import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { catchError, concatMap, map } from 'rxjs/operators';
import { Observable, EMPTY } from 'rxjs';
import * as InscripcionesActions from './inscripciones.actions';
import { InscripcionesService } from '../services/inscripciones.service';
import { Inscripcion } from '../models/inscripcion';

@Injectable()

export class InscripcionesEffects {

  constructor(
    private actions$: Actions,
    private inscripcionesService: InscripcionesService
  ) {}


  cargarInscripciones$ = createEffect(() => {
    return this.actions$.pipe( 
      ofType(InscripcionesActions.cargarInscripciones),
      concatMap(() => this.inscripcionesService.getAll().pipe(
        map((i: Inscripcion[]) => InscripcionesActions.inscripcionesCargadas({inscripciones: i}))
      ))
    );
  });

  agregarInscripciones$ = createEffect(() => {
    return this.actions$.pipe( 
      ofType(InscripcionesActions.agregarInscripcion),
      concatMap(({ inscripcion }) => this.inscripcionesService.post(inscripcion).pipe(
        map((i: Inscripcion) => InscripcionesActions.cargarInscripciones()
       ) 
      ))
    );
  });

  eliminarInscripcion$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(InscripcionesActions.eliminarInscripcion),
      concatMap(({ inscripcion }) => this.inscripcionesService.delete(inscripcion).pipe(
        map((i: Inscripcion) => InscripcionesActions.cargarInscripciones())
      ))
    );
  });

  editarInscripcion$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(InscripcionesActions.editarInscripcion),
      concatMap(({ inscripcion }) => this.inscripcionesService.put(inscripcion).pipe(
        map((i: Inscripcion) => InscripcionesActions.cargarInscripciones())
      ))
    );
  });

}