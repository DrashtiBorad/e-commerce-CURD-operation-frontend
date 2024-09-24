const productListRoute = {
  getProducts: "/get-products",
};
const authenticationRoute = {
  login: "/login",
  registration: "/register",
};
export const apiRoutes = {
  ...productListRoute,
  ...authenticationRoute,
};
