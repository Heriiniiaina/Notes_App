import axios from 'axios'
import React, { useState } from 'react'

type Props = {}
const BASE_URL = "http://localhost:8000/api/auth"
const Login = () => {
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const handleSubmit = async(e:React.FormEvent)=>{
        e.preventDefault()
        try {
            const res = await axios.post(`${BASE_URL}/login`,{email,password})
            console.log(res.data)
        } catch (error) {
            console.log(error)
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