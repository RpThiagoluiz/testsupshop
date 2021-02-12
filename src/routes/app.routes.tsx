import { Switch, Route } from "react-router-dom";

//Pages
import ShopProducts from "../pages/shopProducts";
import UserCart from "../pages/userCart";

const AppRoutes = () => (
  <Switch>
    <Route path="/" exact component={ShopProducts} />
    <Route path="/usercart" component={UserCart} />
  </Switch>
);
export default AppRoutes;
