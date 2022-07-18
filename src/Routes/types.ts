import { RouteComponentProps } from "react-router";

export interface ProtectedRouteProps {
  exact: boolean;
  component: React.ComponentType<RouteComponentProps>;
  path: string;
}
