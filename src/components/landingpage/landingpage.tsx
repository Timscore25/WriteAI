import React from 'react';
import './landingpage.css';
import Background from './background/background';
import Header from './header/header';
import Intro from './intro/intro';
import MacWindow from './macwindow/mac-window';
import Sections from '../sections/sections';
import Footer from './footer/footer';

function LandingPage() {
  return (
    <div className="App">
      <Background />
      <main>
        <Header />
        <main>
          <div className="main-content">
            <Intro />
            <div className="macwindow">
              <MacWindow />
            </div>
            <Sections />
          </div>
        </main>
      </main>
      <Footer />
    </div>
  );
}

export default LandingPage;