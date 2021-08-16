import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { loadRequest } from '../../store/modules/repositories/actions';
import { RepositoriesState } from '../../store/modules/repositories/types';

import { RepositoryItem } from '../RepositoryItem';

type RootState = {
  repositories: RepositoriesState;
};

export const RepositoryList = (): React.ReactElement => {
  const dispatch = useDispatch();

  const { listRepo } = useSelector(({ repositories }: RootState) => repositories);

  useEffect(() => {
    dispatch(loadRequest());
  }, []);

  return (
    <ul>
      {listRepo.map((item) => (
        <RepositoryItem key={item.id} repository={item} />
      ))}
    </ul>
  );
};
