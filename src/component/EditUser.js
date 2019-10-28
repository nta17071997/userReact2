import React, { Component } from 'react';
import {
    Card, CardBody,
    CardTitle, Input,FormGroup
  } from 'reactstrap';

class EditUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.editUserTemp.id,
            name: this.props.editUserTemp.name,
            phone: this.props.editUserTemp.phone,
            permission: this.props.editUserTemp.permission
        };
    }

    isChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        this.setState({
            [name] : value
        });
    }

    saveButton = () => {
        var info = {};
        info.id = this.state.id;
        info.name = this.state.name;
        info.phone = this.state.phone;
        info.permission = this.state.permission;

        this.props.getUserEditInfo(info);
        this.props.changeEditUser();//an form
    }

    render() {
        return (
            <div className="row">
                <Card  body inverse color="warning"  className="mt-3 col-12">
                    <CardBody>
                        <CardTitle style={{backgroundColor: "#666"}}> <h1>Sua thong tin User</h1></CardTitle>
                        <form>
                        <Input type="text" 
                            onChange={(event) => this.isChange(event)}
                            defaultValue={this.props.editUserTemp.name} 
                            className="mt-3" name="name"    
                            placeholder="Ten User" />
                        <Input type="text"  
                             onChange={(event) => this.isChange(event)}
                            defaultValue={this.props.editUserTemp.phone} 
                            className="mt-3" name="phone"    
                            placeholder="Dien Thoai" />
                        <FormGroup>
                            <Input type="select" 
                                 onChange={(event) => this.isChange(event)}
                                defaultValue={this.props.editUserTemp.permission } 
                                 className="mt-3" 
                                 name="permission" 
                                  id="exampleSelect" >
                                    <option>Chon quyen mac dinh</option>
                                    <option>Finance</option>
                                    <option>n/a</option>
                                    <option>Consumer Non-Durables</option>
                            </Input>
                        </FormGroup>
                        <Input color="primary" block  type="button" className="btn btn-block btn-primary"
                           value="Luu" onClick={() => this.saveButton()}/>
                                {/* <Button color="primary" block 
                                        onClick={(name, phone, permission) => 
                                this.props.add(this.state.name, this.state.phone, this.state.permission)}>Them moi</Button> */}
                        </form>
                    </CardBody>
                </Card>
            </div>
        );
    }
}

export default EditUser;