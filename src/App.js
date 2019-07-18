import React from 'react';
import './App.css';
import { Header, Navigation, Layout, Drawer, Content } from 'react-mdl';
import { Link } from 'react-router-dom';
import Main from './components/main';

function App() {
  return (
    <div className="demo-big-content">
      <Layout>
          <Header className="header" title="MY PORTFOLIO" scroll>
              <Navigation>
                  <Link to="/">Home</Link>
                  <Link to="/resume">Resume</Link>
                  <Link to="/aboutMe">AboutMe</Link>
                  <Link to="/projects">Projects</Link>
                  <Link to="/contact">Contact</Link>
                  
              </Navigation>
          </Header>
          <Drawer title="MY PORTFOLIO">
              <Navigation>
                  <Link to="/">Home</Link>
                  <Link to="/resume">Resume</Link>
                  <Link to="/aboutMe">AboutMe</Link>
                  <Link to="/projects">Projects</Link>
                  <Link to="/contact">Contact</Link>
              </Navigation>
          </Drawer>
          <Content>
              <div className="page-content" />
              <Main />
          </Content>
      </Layout>
    </div>
  );
}

export default App;
