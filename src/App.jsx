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
import SideBar from './components/sidebar/SideBar';
function App() {
  const [data] = useFetch("https://jsonplaceholder.typicode.com/posts");
  // console.log("app", data?.length);
  return (

    <BrowserRouter>
    <Header />
      <Routes>
        <Route path='/' element = {<Home />} />
        <Route path='/currency-converter' element = {<CurrencyConverter />} />
        <Route path='/password-generator' element = {<PasswordGenerator />} />
        <Route path='/quiz-application' element = {<QuizApplication />} />
        <Route path='/fetch-api' element = {<FetchApiData />} />
        <Route path='/side-bar' element = {<SideBar />} />
      </Routes>
    </BrowserRouter>

  )
}

export default App
