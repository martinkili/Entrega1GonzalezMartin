import { createAction, props } from '@ngrx/store';
import { Sesion } from 'src/app/models/sesion';

export const loadSesions = createAction(
  '[Sesion] Load Sesions'
);

export const loadSesionsSuccess = createAction(
  '[Sesion] Load Sesions Success',
  props<{ data: Sesion }>()
);

export const loadSesionsFailure = createAction(
  '[Sesion] Load Sesions Failure',
  props<{ error: Sesion }>()
);
