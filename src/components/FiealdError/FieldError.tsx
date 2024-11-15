import React from 'react'

type Props = {
    msg?:string
}

const FieldError = ({msg}:Props) => {
  return (
    <span className="text-red-500" >{msg}</span>
  )
}

export default FieldError