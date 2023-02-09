// actions.ts
import { createAction, props } from '@ngrx/store';

export const loadPermissions = createAction(
  '[Permissions] Load Permissions',
  props<{ permissions: Set<Permission> }>()
);

export const updatePermission = createAction(
  '[Permissions] Update Permission',
  props<{ permission: Permission }>()
);

// reducer.ts
import { createReducer, on } from '@ngrx/store';
import * as PermissionsActions from './actions';

export interface PermissionsState {
  permissions: Set<Permission>;
}

const initialState: PermissionsState = {
  permissions: new Set()
};

export const permissionsReducer = createReducer(
  initialState,
  on(PermissionsActions.loadPermissions, (state, { permissions }) => ({ ...state, permissions })),
  on(PermissionsActions.updatePermission, (state, { permission }) => {
    const updatedPermissions = new Set([...state.permissions]);
    updatedPermissions.forEach(p => {
      if (p.accessLevelId === permission.accessLevelId) {
        updatedPermissions.delete(p);
        updatedPermissions.add({ ...p, ...permission });
      }
    });
    return { ...state, permissions: updatedPermissions };
  })
);

// selectors.ts
import { createSelector, createFeatureSelector } from '@ngrx/store';

export const selectPermissionsFeature = createFeatureSelector<PermissionsState>('permissions');

export const selectPermissions = createSelector(
  selectPermissionsFeature,
  (state: PermissionsState) => [...state.permissions]
);

export const selectAuthorizedPermissions = createSelector(
  selectPermissions,
  permissions => permissions.filter(p => p.authorized)
);
