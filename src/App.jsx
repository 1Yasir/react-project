import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header/Header';
import Home from './components/Home/Home';

const PasswordGenerator = lazy(() => import('./components/PasswordGenerator'));
const FetchApiData = lazy(() => import('./components/FetchApiData'));
const CurrencyConverter = lazy(() => import('./components/currency/CurrencyConverter'));
const QuizApplication = lazy(() => import('./components/quizApplication/QuizApplication'));
const SideBar = lazy(() => import('./components/sidebar/SideBar'));

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/currency-converter' element={<CurrencyConverter />} />
          <Route path='/password-generator' element={<PasswordGenerator />} />
          <Route path='/quiz-application' element={<QuizApplication />} />
          <Route path='/fetch-api' element={<FetchApiData />} />
          <Route path='/side-bar' element={<SideBar />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
