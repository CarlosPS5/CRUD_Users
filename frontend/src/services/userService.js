import Axios from 'axios'

export const getUsers = async () => {
    const res = await Axios.get('http://localhost:3500/all')
    return res.data.data.users
}

export const createService = async (user) => {
    const res = await Axios.post('http://localhost:3500/create', user)
    return res
}

export const deleteService = async (id) => {
    const res = await Axios.delete(`http://localhost:3500/remove/${id}`)
    return res
}

export const findService = async (id) => {
    const res = await Axios.get(`http://localhost:3500/find/${id}`)
    return res
}

export const updateService = async (user,id) => {
    const res = await Axios.put(`http://localhost:3500/update/${id}`, user)
    return res
}