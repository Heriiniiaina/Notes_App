import axios from 'axios'
import React, { useState } from 'react'
import toast from 'react-hot-toast'
import {ClipLoader} from "react-spinners"
import { Link, useNavigate } from 'react-router-dom'




const BASE_URL = "https://notes-app-vxt5.onrender.com/api/auth"
const Register = () => {
    
    const navigate = useNavigate()
    const [fullName,setFullName] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [isLoading,setIsLoading] = useState(false)
    const handleSubmit = async(e:React.FormEvent)=>{
        e.preventDefault()
        setIsLoading(true)
        try {
            const res = await axios.post(`${BASE_URL}/register`,{fullName,email,password})
            toast.success(res.data.message)
           
            navigate("/login")
        
        } catch (error:any) {
            toast.error(error.response.data.message)
        }finally{
            setIsLoading(false)
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
            <button type='submit' className='bg-blue-600 p-3 text-white rounded-md'>
            {isLoading ? <ClipLoader color="#fff" size={20} /> : "S'inscrire"}
            </button>
            <p className='text-white'>Vous avez déja un compte ? <Link style={{color:"#2563eb"}} to={"/login"}>cliquer ici </Link></p>
        </form>
    </div>
    </div>
 
  )
}

export default Register