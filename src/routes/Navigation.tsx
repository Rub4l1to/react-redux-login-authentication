import React from 'react';

//* React router dom v6
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

//* Layouts
import { PrivateOutlet } from 'layouts/PrivateLayout';

//* Pages
import { HomePage, LoginPage, AboutPage } from 'pages';

export const Navigation = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public routes */}
        <Route path="/login" element={<LoginPage />} />

        {/* Private routes */}
        <Route path="/" element={<PrivateOutlet />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
        </Route>

        <Route path="/*" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  );
};
