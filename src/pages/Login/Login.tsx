import axios from 'axios'
import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { login } from '../../store/note/auth-slice'
import {ClipLoader} from "react-spinners"
interface User{
    userId:string,
    fullName:string,
    email:string
}
interface Userdata{
    user:User,
    token:string
} 
//const BASE_URL = "https://notes-app-vxt5.onrender.com/api/auth"
const BASE_URL = "http://localhost:8000/api/auth"
const Login = () => {
    
    const dispatch = useDispatch()
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [isLoading,setIsLoading] = useState(false)
    const handleSubmit = async(e:React.FormEvent)=>{
        e.preventDefault()
        setIsLoading(true)
        try {
            const res = await axios.post(`${BASE_URL}/login`,{email,password})
            toast.success(res.data.message)
            const data:Userdata = {user:res.data.user,token:res.data.token}
            dispatch(login(data))
            sessionStorage.setItem("user-token",data.token)
        } catch (error:any) {
            toast.error(error.response.data.message)
        }finally{
            setIsLoading(false)
        }
    }   

  return (
    <div className='h-screen flex flex-col bg-slate-900 justify-center items-center'>
    <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }} className="flex flex-col items-center rounded-lg p-3 sm:w-[600px] max-w-full gap-6">
        <h2 className='text-2xl text-white'>Bon retour</h2>
        <form action="" onSubmit={handleSubmit} className='flex flex-col justify-center items-center gap-4'>
            <input  className='outline-1 rounded border-black border-2 pl-2 py-2' placeholder='Adresse email' type='text' onChange={e=>setEmail(e.target.value)}/>
            <input  className='outline-1 rounded border-black border-2 pl-2 py-2' placeholder='Mot de passe' type='password' onChange={e=>setPassword(e.target.value)}/>
            <p className='text-white'><Link to={"/forgot-password"}>Mot de passe oublié ?</Link></p>
            <button type='submit' className='bg-blue-600 p-3 text-white rounded-md'>
            {isLoading ? <ClipLoader color="#fff" size={20} /> : "Se connecter"}
            </button>
            <p className='text-white'>Vous n'avez pas encore de compte ? <Link style={{color:"#2563eb"}} to={"/register"}>cliquer ici </Link></p>
        </form>
    </div>
    </div>
 
  )
}

export default Login