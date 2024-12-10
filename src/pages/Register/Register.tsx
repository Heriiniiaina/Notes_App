import axios from 'axios'
import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
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
const Register = () => {
    
    const dispatch = useDispatch()
    const [fullName,setFullName] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const handleSubmit = async(e:React.FormEvent)=>{
        e.preventDefault()
        try {
            const res = await axios.post(`${BASE_URL}/register`,{fullName,email,password})
            toast.success(res.data.message)
            const data:Userdata = {user:res.data.user,token:res.data.token}
            dispatch(login(data))
            sessionStorage.setItem("user-token",data.token)
        } catch (error:any) {
            toast.error(error.response.data.message)
        }
    }   

  return (
    <div className='h-screen flex flex-col bg-slate-900 justify-center items-center'>
    <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }} className="flex flex-col items-center rounded-lg p-3 sm:w-[600px] max-w-full gap-6">
        <h2 className='text-2xl text-white'>Bienvenue</h2>
        <form action="" onSubmit={handleSubmit} className='flex flex-col justify-center items-center gap-4'>
        <input  className='outline-1 rounded border-black border-2 pl-2 py-2' placeholder='Nom complet' type='text' onChange={e=>setFullName(e.target.value)}/>
            <input  className='outline-1 rounded border-black border-2 pl-2 py-2' placeholder='Adresse email' type='text' onChange={e=>setEmail(e.target.value)}/>
            <input  className='outline-1 rounded border-black border-2 pl-2 py-2' placeholder='Mot de passe' type='password' onChange={e=>setPassword(e.target.value)}/>
            <button type='submit' className='bg-blue-600 p-3 text-white rounded-md'>S'inscrire</button>
            <p className='text-white'>Vous avez déja un compte ? <Link style={{color:"#2563eb"}} to={"/login"}>cliquer ici </Link></p>
        </form>
    </div>
    </div>
 
  )
}

export default Register