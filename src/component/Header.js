import React, { Component } from 'react';
import { Jumbotron, Container } from 'reactstrap';
class Header extends Component {
    render() {
        return (
            <div>
              <Jumbotron fluid>
                <Container fluid>
                    <h1 className="display-3">Project Quan Ly Thanh Vien Bang React</h1>
                    <p className="lead">Voi du lieu json</p>
                </Container>
            </Jumbotron>  
            </div>
        );
    }
}

export default Header;