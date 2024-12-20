import axios from 'axios'
import React, { useState } from 'react'
import toast from 'react-hot-toast'
import {ClipLoader} from "react-spinners"
import {useNavigate } from 'react-router-dom'



const BASE_URL = "https://notes-app-vxt5.onrender.com/api/auth"
const ForgotPassword = () => {
    
    const navigate = useNavigate()
  
    const [email,setEmail] = useState("")
    const [isLoading,setIsLoading] = useState(false)
    const handleSubmit = async(e:React.FormEvent)=>{
        e.preventDefault()
        setIsLoading(true)
        try {
            const res = await axios.patch(`${BASE_URL}/sendResetPasswordCode`,{email})
            toast.success(res.data.message)
            sessionStorage.setItem("resetPasswordEmail",email)
            navigate("/code-reset-password")
            
        
        } catch (error:any) {
            console.log(error)
            toast.error(error.response.data.message)
        }finally{
            setIsLoading(false)
        }
    }   

  return (
    <div className='h-screen flex flex-col bg-slate-900 justify-center items-center'>
    <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }} className="flex flex-col items-center rounded-lg p-3 sm:w-[600px] max-w-full gap-6">
        <h2 className='text-2xl text-white'>Mot de passe oublié</h2>
        <form action="" onSubmit={handleSubmit} className='flex flex-col justify-center items-center gap-4'>
        
            <p className='text-xl text-white'>Entrer votre email</p>
            <input  className='outline-1 rounded border-black border-2 pl-2 py-2' placeholder='Adresse email' type='text' onChange={e=>setEmail(e.target.value)}/>
          
            <button disabled={isLoading} type='submit' className='bg-blue-600 p-3 text-white rounded-md'>
                {isLoading ? <ClipLoader color="#fff" size={20} /> : "Valider"}
            </button>
          
        </form>
    </div>
    </div>
 
  )
}

export default ForgotPassword