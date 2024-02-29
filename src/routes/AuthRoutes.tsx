import { IRouteInterface } from "../interfaces/RouteInterface";
import { STRING_DATA } from "../shared/Constants";
import { ROUTE_CONSTANTS } from "../shared/Routes";
import Login from "../views/Authentication/Login";
import Register from "../views/Authentication/Register";

export const AUTH_ROUTES: IRouteInterface[] = [
  {
    path: ROUTE_CONSTANTS.LOGIN,
    element: <Login />,
    title: STRING_DATA.LOGIN,
  },
  {
    path: ROUTE_CONSTANTS.REGISTER,
    element: <Register />,
    title: STRING_DATA.REGISTER,
  },
];
