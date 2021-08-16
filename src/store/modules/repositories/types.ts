export enum RepositoriesTypes {
  LOAD_REQUEST = '@repositories/LOAD_REQUEST',
  LOAD_SUCCCES = '@repositories/LOAD_SUCCCES',
  LOAD_FAILURE = '@repositories/LOAD_FAILURE'
}

export type Repository = {
  id: number;
  name: string;
};

export type RepositoriesState = {
  readonly listRepo: Repository[];
  readonly loading: boolean;
  readonly error: boolean;
};
