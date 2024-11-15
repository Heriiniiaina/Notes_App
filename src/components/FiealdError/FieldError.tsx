import React from 'react'

type Props = {
    msg?:string
}

const FieldError = ({msg}:Props) => {
  return (
    <span className="text-red-500 absolute left-0 -bottom-7 text-sm" >{msg}</span>
  )
}

export default FieldError