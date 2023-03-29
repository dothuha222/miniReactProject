import React from "react";
import { useEffect } from 'react';
import { useState } from "react";
import { Link } from "react-router-dom";

import { getUsers } from "./UserService";
import { deleteUsers } from "./UserService";


function Users(){
    const [users,setUsers] = useState([])
    const loadUsers= () => {
        getUsers()
          .then(res => setUsers(res.data));
      }
      useEffect(() => {
        loadUsers();
      },[])

      const handleDelete = (id) => {
          if(window.confirm('Bạn muốn xóa người dùng này không?')){
            deleteUsers(id)
              .then(res => {
                alert("Xóa thành công!")
                loadUsers()
              })
          }

      }

    return(
      <div className="container mt-5">
          <h2 className="title mb-3">Bảng người dùng</h2>
          <Link to = "/create" className="btn btn-success mb-5">Tạo mới người dùng +</Link>
          <table className="table table-striped">
            <thead className="thead-dark">
              <tr>
                <th>ID</th>
                <th>Họ và tên</th>
                <th>Tuổi</th>
                <th>Email</th>
                <th>Số điện thoại</th>
                <th>Địa chỉ</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user,index) => 
                (<tr key={index}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.age}</td>
                  <td>{user.email}</td>
                  <td>{user.phonenumber}</td>
                  <td>{user.address}</td>
                  <td>
                      <Link to = {`update/${user.id}`}>
                        <button className="btn btn-primary mr-3">Update</button>
                      </Link>
                      <button className="btn btn-danger" onClick = {() => handleDelete(user.id)}>Delete</button>
                  </td>
                </tr>)
              )}
            </tbody>
          </table>
      </div>
     
    )
}

export default Users;