import React from 'react'

type Props = {
    children:string,
    onClick?:React.MouseEventHandler<HTMLButtonElement>
}

const ButtonPrimary = ({children,onClick}:Props) => {
  return <button type='button' onClick={onClick} className='bg-blue-600 text-white rounded-[50px] font-bold w-44 h-12'>{children}</button>

  
}

export default ButtonPrimary