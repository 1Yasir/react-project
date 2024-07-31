import React from 'react';
import MetaTags from '../commons/MetaTags';
import { HelmetProvider } from 'react-helmet-async';
import "./home.css"

function Home() {
  return (
    <HelmetProvider>
      <div className='home-page'>
        <MetaTags
          title="Home Page - Mera React App"
          description="Yeh mera React application ka home page hai"
          keywords="home, react, app"
        />
        <h1>Yasir Mehmood || Home Page</h1>
      </div>
    </HelmetProvider>
  )
}

export default Home