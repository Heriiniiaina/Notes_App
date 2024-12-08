import axios from 'axios'
import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { login } from '../../store/note/auth-slice'
interface User{
    userId:string,
    fullName:string,
    email:string
}
interface Userdata{
    user:User,
    token:string
} 
const BASE_URL = "http://localhost:8000/api/auth"
const Login = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const handleSubmit = async(e:React.FormEvent)=>{
        e.preventDefault()
        try {
            const res = await axios.post(`${BASE_URL}/login`,{email,password})
            toast.success(res.data.message)
            const data:Userdata = {user:res.data.user,token:res.data.token}
            dispatch(login(data))
            localStorage.setItem("user-token",data.token)
        } catch (error:any) {
            toast.error(error.response.data.message)
        }
    }   

  return (
    <div className='flex h-screen flex-col justify-center items-center gap-5 bg-slate-900'>
        <h2 className='text-2xl text-white'>Bon retour</h2>
        <form action="" onSubmit={handleSubmit} className='flex flex-col justify-center items-center gap-3'>
            <input className='outline-1 border-black border-2 pl-1' placeholder='Adresse email' type='text' onChange={e=>setEmail(e.target.value)}/>
            <input className='outline-1 border-black border-2 pl-1' placeholder='Mot de passe' type='password' onChange={e=>setPassword(e.target.value)}/>
            <button type='submit' className='bg-blue-600 p-4 text-white rounded-md'>Se connecter</button>
        </form>
    </div>
  )
}

export default Login