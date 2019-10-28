import React, { Component } from 'react';
import { Table,Button, ButtonGroup } from 'reactstrap';

class TableData extends Component {

    deleteButton = (idUser) => {
        this.props.deleteUser(idUser);
        //console.log("id cua user: " + idUser);
        
   }

    render() {
       // console.log(this.props.dataUserProps)
        return (
            <div className="col">
                <Table striped>
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Ho Va Ten</th>
                            <th>Dien Thoai</th>
                            <th>Quyen</th>
                            <th>Thao tac</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.dataUserProps.map((data, key) => (
                            <tr>
                                <th scope="row">{key+1}</th>
                                <td>{data.name}</td>
                                <td>{data.phone}</td>
                                <td>{data.permission}</td>
                                <td>
                                    <ButtonGroup>
                                        <Button color="warning" 
                                            onClick={(user) => this.props.editUserFun(data)}>Sua</Button>
                                        <Button color="danger" onClick={(idUser) => this.deleteButton(data.id)}>Xoa</Button>
                                    </ButtonGroup>
                                </td>
                            </tr>
                        ))}
                       
                    </tbody>
                </Table> 
            </div>
        );
    }
}

export default TableData;