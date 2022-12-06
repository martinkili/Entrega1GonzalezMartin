import { Action, createReducer, on } from '@ngrx/store';
import { InscripcionState } from '../models/inscripcion.state';
import * as InscripcionesActions from './inscripciones.actions';

export const inscripcionesFeatureKey = 'inscripciones';

export const initialState: InscripcionState = {
  cargando: false,
  inscripciones: []
};

export const reducer = createReducer(
  initialState,
  on(InscripcionesActions.cargarInscripciones, (state) => {
    return {...state, cargando: true }
  }),
  on(InscripcionesActions.inscripcionesCargadas, (state, {inscripciones}) => {
    return {...state, cargando: false, inscripciones:inscripciones}
  }),
  on(InscripcionesActions.agregarInscripcion, (state) => {
    return state
  }),
  on(InscripcionesActions.editarInscripcion, (state) => {
    return state
  }),
  on(InscripcionesActions.eliminarInscripcion, (state) => {
    return state
  })
);
