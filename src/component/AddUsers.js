import React, { Component } from 'react';
import {
    Card, CardBody,
    CardTitle, Button, Input,FormGroup
  } from 'reactstrap';

class AddUsers extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            trangThai: false
        };
    }
    thayDoiTrangThai = () => {
        this.setState({
            trangThai: !this.state.trangThai
        });
    }
    hienThiNut = () => {
        if(this.state.trangThai === true) {
            return <Button color="primary" block onClick={() => this.thayDoiTrangThai()}> Dong  lai</Button>;
        } 
        else {
            return <Button color="primary" block onClick={() => this.thayDoiTrangThai()}>Them moi</Button>;
        }

    }
    hienThiForm = () => {
        if(this.state.trangThai === true) {
            return (
                <div className="col-3">
                    <Card outline color="danger" className="mt-3">
                        <CardBody>
                            <CardTitle style={{backgroundColor: "rgba(51, 51, 51, 0.22)"}}> Them moi User vao he thong</CardTitle>
                            <Input type="text" className="mt-3" placeholder="Ten User" />
                            <Input type="text"  className="mt-3" placeholder="Dien Thoai" />
                            <FormGroup>
                                <Input type="select"  className="mt-3" name="select" id="exampleSelect" >
                                    <option>Chon quyen mac dinh</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </Input>
                            </FormGroup>
                            <Button color="primary" block>Them moi</Button>
                        </CardBody>
                    </Card>
                </div>);
        }
    }
    render() {
        return (
            <div className="">
                {this.hienThiNut()}
                {this.hienThiForm()}
            </div>
        );
    }
}

export default AddUsers;