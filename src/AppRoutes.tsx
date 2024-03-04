import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./layouts/layout";
import HomePage from "./pages/HomePage";
import AuthCallbackPage from "./pages/AuthCallbackPage";
import UserProfilePage from "./pages/UserProfilePage";
import ProtectedRoute from "./auth/ProtectedRoute";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout showHero children={<HomePage />} />} />
      <Route
        path="/auth-callback"
        element={<Layout children={<AuthCallbackPage />} />}
      />
      <Route element={<ProtectedRoute />}>
        <Route
          path="/user-profile"
          element={<Layout children={<UserProfilePage />} />}
        />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default AppRoutes;