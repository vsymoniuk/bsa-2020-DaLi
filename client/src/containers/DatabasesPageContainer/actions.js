import { DELETE_DATABASE, IS_DATABASE_LOADING, GET_DATABASES } from './actionTypes';

export const deleteDatabase = (id) => {
  return {
    type: DELETE_DATABASE,
    id,
  };
};
export const getDatabases = () => {
  return {
    type: GET_DATABASES,
  };
};

export const SetIsLoading = (payload) => {
  return {
    type: IS_DATABASE_LOADING,
    payload,
  };
};
