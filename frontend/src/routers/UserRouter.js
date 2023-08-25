import { useContext, Fragment } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Navigate,
  Route,
} from "react-router-dom";
import Home from "../pages/Home";
import Register from "../pages/Register";
import Login from "../pages/Login";
import About from "../pages/About";
import Listing from "../pages/Listing";
import Blog from "../pages/Blog";
import New from "../components/new/New";
import ProductList from "../components/product/ProductList";
import ProductSingle from "../components/product/ProductSingle";
import Contact from "../pages/Contact";
import Return from "../pages/Return";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import ForgotPassword from "../pages/FogetPassword";
import ProductPage from "../pages/ProductPage";
import BillPage from "../pages/BillPage";
import { AuthContext } from "../assets/context/authcontext";
import Cart from "../pages/Cart/cart";
import Checkout from "../pages/Checkout";
import Package from "../pages/Package";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import PaymentPage from "../pages/Payment";
import Check from "../pages/check";
import List from "../components/list/List";
import Blogs from "../components/admin product/Blogs";
import RentList from "../components/admin product/rentList";
import UserProfile from "../pages/userProfile";
import ContactList from "../components/admin product/contactList";

const UserRouter = () => {
  const { currentUser } = useContext(AuthContext);
  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" />;
    }
    return children;
  };

  const Layout = () => {
    return (
      <Fragment>
        <Header />
        <div>
          <Outlet />
        </div>
        <Footer />
      </Fragment>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoute>
          <Layout />
        </ProtectedRoute>
      ),
      children: [
        { path: "/", element: <Navigate to="/home" /> },
        { path: "/home", element: <Home /> },
        { path: "/about", element: <About /> },
        { path: "/products", element: <Listing /> },
        { path: "/blogs", element: <Blog /> },
        { path: "/ForgetPassword", element: <ForgotPassword /> },
        { path: "/contact", element: <Contact /> },
        { path: "/payment", element: <PaymentPage /> },
        { path: "/PrivacyPolicy", element: <PrivacyPolicy /> },
        { path: "/ProductPage", element: <ProductPage /> },
        { path: "/Checkout", element: <Checkout /> },
        { path: "/cart", element: <Cart /> },
        { path: "/BillPage", element: <BillPage /> },
        { path: "/Return", element: <Return /> },
        { path: "/userprofile", element: <UserProfile /> },
        { path: "/package", element: <Package /> },
      ],
    },
    { path: "/rentList", element: <RentList /> },
    { path: "/contactList", element: <ContactList /> },
    { path: "/users", element: <List /> },
    {
      path: "/addblog",
      element: <Blogs />,
    },
    {
      path: "/new",
      element: <New />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/admin",
      element: <Check />,
    },
    {
      path: "/addproduct",
      element: <ProductList />,
    },
    {
      path: "/singleProduct",
      element: <ProductSingle />,
    },
   
  ]);

  return <RouterProvider router={router} />;
};

export default UserRouter;
