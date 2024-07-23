import React from 'react';
import PasswordGenerator from './components/PasswordGenerator';
import FetchApiData from './components/FetchApiData';
import 'bootstrap/dist/css/bootstrap.min.css';
import useFetch from './customHook/useFetch';

function App() {
  const [data] = useFetch("https://jsonplaceholder.typicode.com/posts");
  console.log("app", data?.length);
  return (
    <div className="app">
      {/* <PasswordGenerator /> */}
      <FetchApiData />
    </div>
  )
}

export default App