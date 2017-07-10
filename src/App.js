import React, { Component } from 'react';

import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    withRouter
} from 'react-router-dom'

import Login from './Login'
import MainPage from './MainPage'

import { Layout, Row, Col, Button, Modal } from 'antd';
const { Header, Footer, Sider, Content } = Layout;

class App extends Component {
    state = {
        visible: false,
        isAuthenticated: false,
    }
    showModal = () => {
        this.setState({
            visible: true,
        });
    }
    handleOk = () => {
        this.setState({
            confirmLoading: true,
            isAuthenticated: true,
        });
        setTimeout(() => {
            this.setState({
                visible: false,
                confirmLoading: false,
            });
        }, 2000);
    }
    handleCancel = () => {
        console.log('Clicked cancel button');
        this.setState({
            visible: false,
        });
    }

    logout = () => {
        setTimeout(() => {
            this.setState({
                isAuthenticated: false,
            })
        }, 1000)
    }
    render() {
        return (
            <Router>
                <Layout>
                    <Header>
                        <Row>
                            <Col span={12}>
                                <Link to="/"><h2>Ck2 Mod Creator</h2></Link>
                            </Col>
                            <Col span={1} offset={11}>
                                {
                                    !this.state.isAuthenticated ?
                                        <Button type="primary" onClick={this.showModal}>Login</Button> :
                                        <Button type="primary" onClick={this.logout}>Logout</Button>
                                }

                            </Col>
                        </Row>
                    </Header>
                    <Layout>
                        <Content>
                            <Modal title="Login"
                                visible={this.state.visible}
                                onOk={this.handleOk}
                                confirmLoading={this.state.confirmLoading}
                                onCancel={this.handleCancel}
                            >
                                <Login />
                            </Modal>
                            {!fakeAuth.isAuthenticated ? <Route path="/" component={MainPage} /> : <Route path="/" component={MainPage} />}
                        </Content>
                    </Layout>
                    <Footer>Github</Footer>
                </Layout>
            </Router>
        )
    }
}




const fakeAuth = {
    isAuthenticated: false,
    authenticate(cb) {
        this.isAuthenticated = true
        setTimeout(cb, 100) // fake async
    },
    signout(cb) {
        this.isAuthenticated = false
        setTimeout(cb, 100)
    }
}


export default App