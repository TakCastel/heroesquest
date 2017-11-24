import React, { Component } from 'react'
import { Layout } from 'antd'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import Navbar from './components/Navbar'
import Character from './containers/Character'
import Game from './components/Game'

import './App.css';

const { Header, Footer, Sider, Content } = Layout

const Home = () => (
  <div>
    <h1>Home</h1>
  </div>
)

class App extends Component {

  state = {
    collapsed: false,
  };

  onCollapse = (collapsed) => {
  this.setState({ collapsed });
  }
  
  render() {
    return (
      <Router> 
        <div>
          <Layout style={{ minHeight: '100vh' }}>
            <Sider
              collapsible
              collapsed={this.state.collapsed}
              onCollapse={this.onCollapse}
              breakpoint="sm"
            >
            <div className="logo" />            
            <Navbar/>                  
            </Sider>
            <Layout>
              <Header>
              </Header>
              <div className="spacer"></div>
              <Content style={{ margin: '0 16px' }}>
                <div style={{ padding: 24, background: '#fff'}}>
                  <Route exact path="/" component={Home}/>
                  <Route path="/character" component={Character}/>
                  <Route path="/game" component={Game}/>
                </div>
                </Content>
              <Footer>
              </Footer>
            </Layout>
          </Layout>
        </div>
      </Router>
    );
  }
}

export default App
