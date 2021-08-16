import { Repository } from '../../store/modules/repositories/types';

type OwnProps = {
  repository: Repository;
};

export const RepositoryItem = ({ repository }: OwnProps): React.ReactElement => (
  <li>{repository.name}</li>
);
