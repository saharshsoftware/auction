import { IRouteInterface } from "../interfaces/RouteInterface";
import { STRING_DATA } from "../shared/Constants";
import { ROUTE_CONSTANTS } from "../shared/Routes";
import Dashboard from "../views/Dashboard";

export const PUBLIC_ROUTES: IRouteInterface[] = [
  {
    path: ROUTE_CONSTANTS.DASHBOARD,
    element: <Dashboard />,
    title: STRING_DATA.DASHBOARD,
  },
];
