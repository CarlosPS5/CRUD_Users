import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import {findService ,updateService} from '../../services/userService'
import { useHistory } from 'react-router-dom'

export const EditUser = () => {

    const {id} = useParams()
    const history = useHistory()
    const [user,setUser] = useState({
        name: '',
        description: '',
        age: undefined
    })

    useEffect(() => {
        const fetchUser = async () => {
            const res = await findService(id)
            setUser(res.data.data)
        }
        fetchUser()
    },[])

   

    const updateUser = async () => {
        await updateService(user,id)
        history.push("/")
        
    }

    return  <div className="container">
                <div className="input-group mb-3 mt-3">
                    <span className="input-group-text" id="basic-addon1">Name</span>
                    <input type="text" id="name" name="name" onChange={(e) => setUser({...user,name:e.target.value})} className="form-control" value={user.name!==''?user.name : ''} aria-label="Username" aria-describedby="basic-addon1" required/>
                </div>

                <div className="input-group mb-3 mt-3">
                    <span className="input-group-text" id="basic-addon1">Description</span>
                    <input type="text" id="description" name="description" onChange={(e) => setUser({...user,description:e.target.value})} className="form-control"  value={user.description!==''?user.description : ''} aria-label="Descripcion" aria-describedby="basic-addon1" required/>
                </div>

                <div className="input-group mb-3 mt-3">
                    <span className="input-group-text" id="basic-addon1">Age</span>
                    <input type="text" id="age" name="age" onChange={(e) => setUser({...user,age:e.target.value})} className="form-control" value={user.age!==undefined? user.age : ''} aria-label="Age" aria-describedby="basic-addon1"  required/>
                </div>

                <div className="text-center">
                    <button className="btn btn-outline-primary btn-md btn-block" type="button" onClick={updateUser}>Update User</button>
                </div>
            </div>
}