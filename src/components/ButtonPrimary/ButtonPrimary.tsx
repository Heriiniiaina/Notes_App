import React from 'react'

type Props = {
    children:string,
    onClick?:React.MouseEventHandler<HTMLButtonElement>,
    isDisable:boolean
}

const ButtonPrimary = ({children,onClick,isDisable}:Props) => {
  return   <button
  type='button'
  disabled={isDisable}
  onClick={onClick}
  className={`
    ${isDisable ? 'bg-blue-400 text-gray-200 cursor-not-allowed' : 'bg-blue-600 text-white'} 
    rounded-[50px] font-bold w-44 h-12
  `}
>{children}</button>

  
}

export default ButtonPrimary