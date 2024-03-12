import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./layouts/layout";
import HomePage from "./pages/HomePage";
import AuthCallbackPage from "./pages/AuthCallbackPage";
import UserProfilePage from "./pages/UserProfilePage";
import ProtectedRoute from "./auth/ProtectedRoute";
import ManageRestaurantPage from "./pages/ManageRestaurantPage";
import SearchPage from "./pages/SearchPage";
import DetailPage from "./pages/DetailPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout showHero children={<HomePage />} />} />
      <Route
        path="/auth-callback"
        element={<Layout children={<AuthCallbackPage />} />}
      />
      <Route
        path="/search/:city"
        element={<Layout children={<SearchPage />} />}
      />
      <Route
        path="/detail/:restaurantId"
        element={<Layout children={<DetailPage />} />}
      />
      <Route element={<ProtectedRoute />}>
        <Route
          path="/user-profile"
          element={<Layout children={<UserProfilePage />} />}
        />
        <Route
          path="/manage-restaurant"
          element={<Layout children={<ManageRestaurantPage />} />}
        />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default AppRoutes;
