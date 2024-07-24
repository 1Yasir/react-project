import React from 'react';
import PasswordGenerator from './components/PasswordGenerator';
import FetchApiData from './components/FetchApiData';
import 'bootstrap/dist/css/bootstrap.min.css';
import useFetch from './customHook/useFetch';
import OnlineStatusCheck from './components/OnlineStatusCheck';
import Form from './components/Form';
import CurrencyConverter from './components/currency/CurrencyConverter';

function App() {
  const [data] = useFetch("https://jsonplaceholder.typicode.com/posts");
  // console.log("app", data?.length);
  return (
    <div className="app">
      <PasswordGenerator />
      {/* <FetchApiData /> */}
      {/* <OnlineStatusCheck /> */}
      {/* <Form /> */}
      {/* <CurrencyConverter /> */}
    </div>
  )
}

export default App