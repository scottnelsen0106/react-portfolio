import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/Main/Main';
import { Link } from 'react-router-dom';
class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
    <Layout>
        <Header className="nav-color" title="Scott Nelsen" scroll>
            <Navigation>
                <Link to="/">About Me</Link>
                <Link to="/projects">Projects</Link>
                
            </Navigation>
        </Header>
        <Drawer title="Scott Nelsen">
            <Navigation>
              <Link to="/">About Me</Link>
              <Link to="/projects">Projects</Link>
              
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />

            <Main/>
        </Content>
    </Layout>
</div>
    )
  }
}

export default App;
