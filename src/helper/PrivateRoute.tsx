import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

import { history } from './history';

interface Props {
  component: React.ComponentType
  path?: string
}

export const PrivateRoute: React.FC<Props> = ({ component: RouteComponent }) => {
  const { user: authUser } = useSelector((state: any) => state.auth);

  if (!authUser) {
    return <Navigate to="/login" state={{ from: history.location }} />
  }

  return <RouteComponent />;
}