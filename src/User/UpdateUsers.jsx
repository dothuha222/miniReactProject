import { useState,useEffect } from "react"
import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom"

import { getUsersById,updateUsers } from "./UserService"


function UpdateUsers(){
    const {id} = useParams()
    const navigate = useNavigate()

    const [user,setUser] = useState({});

    const handleChange = (key,value) => {
        setUser({...user,[key]:value});
    }
    
    const loadUserById = (id) => {
        getUsersById(id)
            .then(res => {
                setUser(res.data)
            })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(window.confirm("Bạn muốn sửa không ?")){
            updateUsers(id,user)
                .then(res => {
                    alert("Sửa thành công!!")
                    navigate("/")
                })
        }
    }

    useEffect(() => {
        loadUserById(id);
    },[])
    return(
        <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
            <div className="form-wrap bg-info text-white w-50 py-4 px-3 rounded">
                <form className="form" onSubmit={handleSubmit} >
                    <div className="form-group">
                        <label htmlFor="name">Họ và tên</label>
                        <input type="text" className="form-control" value={user.name} name="name"placeholder="Enter name" onChange={(e) => handleChange(e.target.name,e.target.value)} required/>
                    </div>
                    <div className="form-group">
                        <label htmlFor = "age">Tuổi</label>
                        <input type="number" className="form-control" value={user.age} name="age"placeholder="Enter age" onChange={(e) => handleChange(e.target.name, e.target.value)} required/>
                    </div>
                    <div className="form-group">
                        <label  htmlFor = "email">Email</label>
                        <input type="email" className="form-control" value={user.email} name="email"placeholder="Enter email" onChange={(e) => handleChange(e.target.name,e.target.value)} required/>
                    </div>
                    <div className="form-group">
                        <label  htmlFor = "phonenumber">Số điện thoại</label>
                        <input type="text" className="form-control" value={user.phonenumber} name="phonenumber"placeholder="Enter phonenumber" onChange={(e) => handleChange(e.target.name,e.target.value)} required/>
                    </div>
                    <div className="form-group">
                        <label  htmlFor = "address">Địa chỉ</label>
                        <input type="text" className="form-control" value={user.address} name="address"placeholder="Enter address" onChange={(e) => handleChange(e.target.name,e.target.value)} required/>
                    </div>
                
                    <button type="submit" className="btn btn-primary text-light" >Submit</button>
                </form>
            </div>
        </div>
        
    )
}
export default UpdateUsers