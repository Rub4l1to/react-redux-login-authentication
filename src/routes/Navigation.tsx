import React from 'react';

//* React router dom v6
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

//* Layouts
import { PrivateOutlet } from 'layouts/PrivateLayout';

//* Pages
import { HomePage, LoginPage } from 'pages';

export const Navigation = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Private routes */}
        <Route path="/" element={<PrivateOutlet />}>
          <Route index element={<HomePage />} />
        </Route>
        {/* Public routes */}
        <Route path="/login" element={<LoginPage />} />

        <Route path="/*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
};
