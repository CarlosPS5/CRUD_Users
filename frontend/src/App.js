import React, { useEffect, useState } from 'react'
import {Header} from './components/Header'
import {CreateUser} from './components/CreateUser/CreateUser'
import {TableUsers} from './components/TableUsers/TableUsers'
import {getUsers} from './services/userService'


export const App = () => {

    const [user,setUser] = useState({
        name: '',
        description: '',
        age: undefined
    })

    const [flag, setFlag] = useState(false)

    const [list, setList] = useState()

    useEffect( () => {
        const fetchData = async () => {
            const users = await getUsers()
        setList(users[0])
        }
        fetchData()
    },[])

    return  <>
               
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <CreateUser 
                                user={user} 
                                setUser={setUser} 
                                list={list} 
                                setList={setList}
                                setFlag={setFlag}/>
                        </div>
                        <div className="col-md-6">
                            {!list || !list.length? false : <TableUsers 
                                                                list={list}
                                                                setList={setList}
                                                                flag={flag}
                                                                setFlag={setFlag}/>}
                        </div>
                    </div>
                </div>
            </>
}