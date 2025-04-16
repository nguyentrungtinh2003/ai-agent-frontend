import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import LoginForm from "./pages/auth/LoginForm";
import RegisterForm from "./pages/auth/RegisterForm";
import ForgotPasswordForm from "./pages/auth/ForgotPasswordForm";
import ResetPasswordForm from "./pages/auth/ResetPasswordForm";
import GridDisplay from "./pages/lecturer/GridDisplay"
import Header from "./pages/lecturer/Header"


export default function App() {
  return (
    <Router>
      <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/forgot-password" element={<ForgotPasswordForm />} />
          <Route path="/reset-password" element={<ResetPasswordForm />} />
          <Route path="/file-manager" element={ 
            <div className="h-screen flex flex-col">
            {/* Header */}
            <Header />
        
            {/* Main content */}
            <div className="flex flex-1 overflow-hidden">
              {/* Main grid area */}
              <div className="flex-1 w-screen overflow-y-auto">
                <GridDisplay />
              </div>
            </div>
          </div>
          } />

        </Routes>
    </Router>

  );
}
