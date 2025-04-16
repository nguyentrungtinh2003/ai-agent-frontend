import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import LoginForm from "./pages/auth/LoginForm";
import RegisterForm from "./pages/auth/RegisterForm";
import ForgotPasswordForm from "./pages/auth/ForgotPasswordForm";
import ResetPasswordForm from "./pages/auth/ResetPasswordForm";

export default function App() {
  return (
    <Router>
      <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/forgot-password" element={<ForgotPasswordForm />} />
          <Route path="/reset-password" element={<ResetPasswordForm />} />
        </Routes>
    </Router>
  );
}
