import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { routes } from '../constants/routes.js'
import LoginPage from '../pages/loginPage/LoginPage.jsx'
import DashBoard from '../pages/dashBoard/DashBoard.jsx'

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={routes.login} element={<LoginPage />} />
        <Route path={routes.dashboard} element={<DashBoard />} />
        <Route path={routes.fallback} element={<Navigate to={routes.login} replace />} />
      </Routes>
    </BrowserRouter>
  )
}