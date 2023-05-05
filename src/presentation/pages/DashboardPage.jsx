import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from '../components/NavBar';
import HomePage from './HomePage';
import ArchivePage from './ArchivePage';
import AddNotePage from './AddNotePage';
import DetailNote from './DetailNote';
import NotFoundPage from './NotFoundPage';
import RouteMiddleware from '../../middleware/RouteMiddleware';

function DashboardPage() {

  return (
      <div className="bg-gray-100 min-h-screen font-sans">
        <NavBar >
          <Routes>
            <Route path="/" element={
              <RouteMiddleware middleware="auth">
                <HomePage />
              </RouteMiddleware>
            } />
            <Route path="/archived" element={
              <RouteMiddleware middleware="auth">
                <ArchivePage />
              </RouteMiddleware>
            } />
            <Route path="/add" element={
              <RouteMiddleware middleware="auth">
                <AddNotePage />
              </RouteMiddleware>
            } />
            <Route path="/note/:id" element={
              <RouteMiddleware middleware="auth">
                <DetailNote />
              </RouteMiddleware>
            } />
            <Route path='*' element={
              <RouteMiddleware middleware="auth">
                <NotFoundPage />
              </RouteMiddleware>
            } />
          </Routes>
        </NavBar>
      </div>
    )
}
export default DashboardPage
