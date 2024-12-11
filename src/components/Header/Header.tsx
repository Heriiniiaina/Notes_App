
import { Logo } from '../logo'


import logo from "../../assets/images/logo.png"
import ButtonPrimary from '../ButtonPrimary/ButtonPrimary'
import { useNavigate } from 'react-router-dom'
const Header = () => {
    const navigate = useNavigate()
  return (
    <div className='flex p-8 bg-white shadow-sm shadow-slate-900'>
        <div className='w-full sm:w-1/3'>
            <Logo onClick={()=>navigate("/")} title='NoteApp' subtitle='Gérer vos notes' image={logo}/>
        </div>
        <div className='w-full sm:w-2/3 text-end'>
                <ButtonPrimary isDisable={false} onClick={()=>navigate("/note/new")}>
                    Créér une note
                </ButtonPrimary>
        </div>
    </div>
  )
}

export default Header