import { Action, createReducer, on } from '@ngrx/store';
import { SesionState } from 'src/app/models/sesion.state';
import * as SesionActions from './sesion.actions';

export const sesionFeatureKey = 'sesion';

export const initialState: SesionState =  { };

export const reducer = createReducer(
  initialState,

  on(SesionActions.loadSesions, state => state),
  on(SesionActions.loadSesionsSuccess, (state, action) => state),
  on(SesionActions.loadSesionsFailure, (state, action) => state),

);
