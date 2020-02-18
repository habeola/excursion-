import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../store/actions/auth';


const { Header, Sider, Content } = Layout;

class SiderDemo extends Component {
  state = {
    collapsed: false,
  };


  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
      <Layout>
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">
            <Link to='/'><Icon type="home" />
              <span>Home</span></Link>
            </Menu.Item>

            {
              this.props.isAuthenticated ? 

              <Menu.Item key="2" onClick={this.props.logout}>
            <Icon type="logout" />
              <span>Logout</span>
            </Menu.Item>

            :
            
            <Menu.Item key="2">
            <Link to='/login'><Icon type="login" />
              <span>Login</span></Link>
            </Menu.Item>           
            }
            
            <Menu.Item key="3">
              <Link to='/image'><Icon type="picture" />
              <span>Gallery</span></Link>
            </Menu.Item>
            <Menu.Item key="4">
              <Link to='/contact'><Icon type="contacts" />
              <span>Contact Us</span></Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
            <Icon
              className="trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
          </Header>
          <Content
            style={{
              margin: '24px 16px',
              padding: 24,
              background: '#fff',
              minHeight: 280,
            }}
          >
           {this.props.children}
          </Content>
        </Layout>
      </Layout>
    );
  }
}

// const mapStateToProps = (state) => {
//   return {
//       loading: state.loading,
//       error: state.error
//   }
// }

const mapDispatchToProps = dispatch => {
  return {
      logout: () => dispatch(actions.logout())
  }
}


export default withRouter(connect(null, mapDispatchToProps)(SiderDemo));




//ReactDOM.render(<SiderDemo />, mountNode);