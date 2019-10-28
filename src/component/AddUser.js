import React, { Component } from 'react';
import {
    Card, CardBody,
    CardTitle, Input,FormGroup
  } from 'reactstrap';

class AddUser extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            id: "",
            name: "",
            phone: "",
            permission:""
        };
    }
    
    isChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        // console.log(name);
        // console.log(value);
        
        this.setState({
            [name]: value
        });

        //package to item
        // var item ={};
        // item.id = this.state.id;
        // item.name = this.state.name;
        // item.phone = this.state.phone;
        // item.permission = this.state.permission;
        // console.log(item);
        
    }

    kiemTraTrangThai = () => {
        if(this.props.hienThiForm === true){
            return (
                <Card outline color="danger" className="mt-3">
                <CardBody>
                    <CardTitle style={{backgroundColor: "rgba(51, 51, 51, 0.22)"}}> Them moi User vao he thong</CardTitle>
                    <form>
                    <Input type="text" className="mt-3" name="name" onChange={(event) => this.isChange(event)}                placeholder="Ten User" />
                    <Input type="text"  className="mt-3" name="phone" onChange={(event) => this.isChange(event)}              placeholder="Dien Thoai" />
                    <FormGroup>
                        <Input type="select"  className="mt-3" name="permission" onChange={(event) => this.isChange(event)} id="exampleSelect" >
                            <option>Chon quyen mac dinh</option>
                            <option>Finance</option>
                            <option>n/a</option>
                            <option>Consumer Non-Durables</option>
                        </Input>
                    </FormGroup>
                    <Input color="primary" block  type="reset"
                        onClick={( name, phone, permission) => 
                             this.props.add(this.state.name, this.state.phone, this.state.permission)} value="Them moi"/>
                            {/* <Button color="primary" block 
                                    onClick={(name, phone, permission) => 
                            this.props.add(this.state.name, this.state.phone, this.state.permission)}>Them moi</Button> */}
                    </form>
                </CardBody>
            </Card>
            );
        }
    }
    render() {
        // console.log(this.state);
        
        return (
            <div >
                {this.kiemTraTrangThai()}
            </div>
        );
    }
}

export default AddUser;