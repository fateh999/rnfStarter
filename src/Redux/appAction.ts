import {UPDATE_APP_STATE, UPDATE_BULK_APP_STATE} from './types';

export function updateAppState(name: string, value: any) {
  return {
    type: UPDATE_APP_STATE,
    payload: {
      name,
      value,
    },
  };
}

export function updateBulkAppState(values: any) {
  return {
    type: UPDATE_BULK_APP_STATE,
    payload: {
      values,
    },
  };
}
