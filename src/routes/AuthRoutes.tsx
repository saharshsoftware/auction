import { IRouteInterface } from "../interfaces/RouteInterface";
import { STRING_DATA } from "../shared/Constants";
import { ROUTE_CONSTANTS } from "../shared/Routes";
import Login from "../views/Authentication/Login";

export const AUTH_ROUTES: IRouteInterface[] = [
  {
    path: ROUTE_CONSTANTS.LOGIN,
    element: <Login />,
    title: STRING_DATA.LOGIN,
  },
];
