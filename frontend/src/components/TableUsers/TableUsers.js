import React, { useEffect, useState } from 'react'
import {deleteService} from '../../services/userService'
import {Link} from 'react-router-dom'


export const TableUsers = (props) => {

    const [list,setLista] = useState(props.list)

    useEffect(() => {
        setLista(props.list)
        props.setFlag(false)
    },[props.flag])

    const deleteUser = async (e) => {
        await deleteService(e.target.id)
        const lista = props.list.filter(user => user._id !== e.target.id)
        props.setList(lista)
        props.setFlag(true)
        
    }


    return  <>  
                <table className="table">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Descripcion</th>
                            <th scope="col">Age</th>
                            <th scope="col">Options</th>
                        </tr>
                    </thead>
                    <tbody>
                        {list.map(l => {
                            return(
                                <tr key={l._id}>
                                    <td>{l.name}</td>
                                    <td>{l.description}</td>
                                    <td>{l.age}</td>
                                    <td>
                                        <button type="button" id={l._id} className="btn btn-danger btn-outline" onClick={deleteUser}>Delete</button>
                                        <Link to={"/details/"+ l._id}>
                                        <button type="button" id={l._id} className="btn btn-success btn-outline m-1">Edit</button>
                                        </Link>
                                   </td>
                                </tr>
                            )
                        })}
                    </tbody>
                    </table>
            </>
}