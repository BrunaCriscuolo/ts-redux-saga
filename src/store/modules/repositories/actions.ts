import { action } from 'typesafe-actions';
import { RepositoriesTypes, Repository } from './types';

export const loadRequest = () => action(RepositoriesTypes.LOAD_REQUEST);

export const loadSuccess = (listRepo: Repository[]) =>
  action(RepositoriesTypes.LOAD_SUCCCES, { listRepo });

export const loadFailure = () => action(RepositoriesTypes.LOAD_FAILURE);
