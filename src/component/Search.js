import React, { Component } from 'react';
import { Button, Form, FormGroup, ButtonGroup, Input } from 'reactstrap';
import EditUser from './EditUser';
class Search extends Component {
    constructor(props){
        super(props);

        this.state = {
            tempValue: "",
            userObj: {}
        };
    }

    hienThiNut = () => {
        if(this.props.hienThiForm === false) {
            return  <Button color="primary" className="ml-3" onClick={() => this.props.ketNoi()}> Them moi</Button>;
        }
        else{
            return <Button color="primary" className="ml-3" onClick={() => this.props.ketNoi()}> Dong  lai</Button>;
        }
    }

    isChange = (event) => {
        console.log(event.target.value);
        this.setState({
            tempValue: event.target.value
        });
        this.props.checkConnect(this.state.tempValue);
    }

    getUserEditInfo = (info) => {
        this.setState({
            userObj: info
        });
        this.props.getUserInfoApp(info);
    }

    isShowEditForm = () => {
        if(this.props.editUserStatus === true){
            return <EditUser 
                getUserEditInfo={(info) => this.getUserEditInfo(info) }
                editUserTemp={this.props.editUserTemp}
                 changeEditUser={() => this.props.changeEditUser()}/>
        }
    }


    render() {
        
        return (
            <Form className="col-12">
                
                    {this.isShowEditForm()}
               
                <FormGroup>
                    <ButtonGroup>
                        <Input type="text" name="search" 
                            id="exampleSearch" 
                            placeholder="What is search ?" 
                            onChange={(event) => this.isChange(event)} />
                        <Button color="info" onClick={(dl) => this.props.checkConnect(this.state.tempValue)} >Search</Button>
                    </ButtonGroup>
                   {this.hienThiNut()}
                </FormGroup>
            </Form>
        );
    }
}

export default Search;