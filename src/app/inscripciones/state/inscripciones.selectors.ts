import { createFeatureSelector, createSelector } from '@ngrx/store';
import { InscripcionState } from '../models/inscripcion.state';
import * as fromInscripciones from './inscripciones.reducer';

export const selectInscripcionesState = createFeatureSelector<InscripcionState>(
  fromInscripciones.inscripcionesFeatureKey
);

export const selectInscripcionesCargando = createSelector(
  selectInscripcionesState,
  (state) => state.cargando
)

export const selectInscripciones = createSelector(
  selectInscripcionesState,
  (state) => state.inscripciones
)