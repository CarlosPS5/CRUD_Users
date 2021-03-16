import React from 'react'
import {createService} from '../../services/userService'


export const CreateUser = (props) => {


    const setName = (event) => {
        props.setUser({...props.user, name: event.target.value})
    }

    const setDescription = (event) => {
        props.setUser({...props.user, description: event.target.value})
    }

    const setAge = (event) => {
        props.setUser({...props.user, age: event.target.value})
    }

    /*const getUsers = async () => {
        const {data} = await getUsers()
        const {users} = data.data
        console.log(users)
    }*/

    const createUser = async () => {
        const response = await createService(props.user)
        props.setList([...props.list,response.data.data])
        props.setFlag(true)
    }

    return  <>
                <div className="input-group mb-3 mt-3">
                    <span className="input-group-text" id="basic-addon1">Name</span>
                    <input type="text" id="name" name="name" onChange={setName} className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" required/>
                </div>

                <div className="input-group mb-3 mt-3">
                    <span className="input-group-text" id="basic-addon1">Description</span>
                    <input type="text" id="description" name="description" onChange={setDescription} className="form-control" placeholder="Descripcion" aria-label="Descripcion" aria-describedby="basic-addon1" required/>
                </div>

                <div className="input-group mb-3 mt-3">
                    <span className="input-group-text" id="basic-addon1">Age</span>
                    <input type="text" id="age" name="age" onChange={setAge} className="form-control" placeholder="Age" aria-label="Age" aria-describedby="basic-addon1" required/>
                </div>

                <div className="text-center">
                    <button className="btn btn-outline-primary btn-md btn-block" type="button" onClick={createUser}>Create User</button>
                </div>
                
            </>
}