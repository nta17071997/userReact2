import React, {Component} from 'react';
import './App.css';
import Header from './component/Header';
import Search from './component/Search';
import TableData from './component/TableData';
import AddUser from './component/AddUser';
import DataUser from './component/Data.json';

const uuidv1 = require('uuid/v1');

class App extends Component {
  constructor(props){
    super(props);
    
    this.state = {
      hienThiForm: false,
      data: [],
      searchText: "",
      editUserStatus: false,
      editUserTemp: {}
    };
  }

  
   componentWillMount() {
    //kiem tra xem co localStorage hay chua 
    //console.log(localStorage.getItem("userData"));
    if(localStorage.getItem("userData")  === null){
      localStorage.setItem("userData", JSON.stringify(DataUser) );
    }
    else {
      var temp = JSON.parse(localStorage.getItem("userData"));
      this.setState({
        data: temp
      });
    }
  }
  

  doiTrangThai = () => {
    this.setState({
      hienThiForm: !this.state.hienThiForm
    });
  }

  getNewUserData = (name, phone, permission) => {
    //console.log("ket noi:" );
    
    var item = {};
    item.id = uuidv1();
    item.name = name;
    item.phone = phone;
    item.permission = permission;
    //console.log(item);

    var items =  this.state.data;
    items.push(item);
    this.setState({
      data: items
    });
    //console.log(this.state.data);
     //day du lieu vao localStorage
    localStorage.setItem("userData", JSON.stringify(items) );
  }

  getTextSearch = (dl) => {
    this.setState({
      searchText: dl
    });
   // console.log("Du lieu nhan duoc la: " + dl);
  }

  changeEditUser = () => {
    this.setState({
      editUserStatus: !this.state.editUserStatus
    });
  }
  
  editUser = (user) => {
    // console.log("Ket noi.");
    // console.log(user);
    this.changeEditUser();
    this.setState({
      editUserTemp: user  
    });
  }

  getUserInfoApp = (info) => {
    // console.log("ket noi " + info.name);
    this.state.data.map((value, key) => {
      if(value.id === info.id){
        value.name = info.name;
        value.phone = info.phone;
        value.permission = info.permission;
      }
    });
     //day du lieu vao localStorage
    localStorage.setItem("userData", JSON.stringify( this.state.data) );
  }

  deleteUser = (idUser) => {
    //console.log(idUser);
    var tempData = this.state.data.filter((item) => item.id !== idUser);
    this.setState({
      data: tempData
    });
    //day du lieu vao localStorage
    localStorage.setItem("userData", JSON.stringify(tempData) );
  }

  render() {
    // console.log(this.state.data);

    //localStorage.setItem("userData", JSON.stringify(DataUser));

    var kq = [];
    this.state.data.map((item, key) => {
      if(item.name.indexOf(this.state.searchText) !== -1){ // === -1 la k tim thay ket qua
        kq.push(item);
      }
    });
    // console.log(kq);
    return (
    <div className="App">
      <Header/>
      <div className="searchForm">
          <div className="container">
            <div className="row">
              <Search ketNoi={() => this.doiTrangThai()} 
                  getUserInfoApp={(info) => this.getUserInfoApp(info)}
                  hienThiForm={this.state.hienThiForm}
                  editUserStatus={this.state.editUserStatus}
                  changeEditUser={() => this.changeEditUser()}
                  editUserTemp={this.state.editUserTemp}
                  checkConnect={(dl) => this.getTextSearch(dl)}/>
              <TableData dataUserProps={kq} editUserFun={(user) => this.editUser(user)}
                    deleteUser={(idUser) => this.deleteUser(idUser)}/>
              <AddUser add={( name, phone, permission) => this.getNewUserData( name, phone, permission)} 
                      hienThiForm={this.state.hienThiForm}/>
            </div>
          </div>
      </div>     
    </div>
  );}
}

export default App;
