import { useContext } from "react";
import RouteContext from "./context";
import renderRoutes from "./renderRoutes";

/* 渲染子路由 */
export default function RouterView() {
  const routes = useContext(RouteContext);
  return renderRoutes(routes);
}
