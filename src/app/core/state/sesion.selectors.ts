import { createFeatureSelector, createSelector } from '@ngrx/store';
import { SesionState } from 'src/app/models/sesion.state';
import * as fromSesion from './sesion.reducer';

export const selectSesionState = createFeatureSelector<SesionState>(
  fromSesion.sesionFeatureKey
);

