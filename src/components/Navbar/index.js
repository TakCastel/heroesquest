import React, { Component } from 'react'
import { Menu, Icon } from 'antd'
import { Link } from 'react-router-dom'

class Navbar extends Component {

  render () {
    return (
      <div>
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
          <Menu.Item key="1">
            <Link to="/">
              <Icon type="home" />
              <span>Home</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/Character">
              <Icon type="user" />
              <span>Character</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Link to="/Game">
              <Icon type="compass" />
              <span>Game</span>
            </Link>
          </Menu.Item>
        </Menu>
      </div>
    )
  }

}

export default Navbar