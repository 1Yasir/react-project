import React from 'react';
import PasswordGenerator from './components/PasswordGenerator';
import FetchApiData from './components/FetchApiData';
import 'bootstrap/dist/css/bootstrap.min.css';
import useFetch from './customHook/useFetch';
import OnlineStatusCheck from './components/OnlineStatusCheck';
import Form from './components/Form';
import CurrencyConverter from './components/currency/CurrencyConverter';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/header/Header';
import Home from './components/Home/Home';
import QuizApplication from './components/quizApplication/QuizApplication';

function App() {
  const [data] = useFetch("https://jsonplaceholder.typicode.com/posts");
  // console.log("app", data?.length);
  return (

    <BrowserRouter>
    <Header />
      <Routes>
        <Route path='/' element = {<QuizApplication />} />
      </Routes>
    </BrowserRouter>

  )
}

export default App


{/* <div className="app">  */ }
{/* <PasswordGenerator /> */ }
{/* <FetchApiData /> */ }
{/* <OnlineStatusCheck /> */ }
{/* <Form /> */ }
{/* <CurrencyConverter /> */ }
// </div>