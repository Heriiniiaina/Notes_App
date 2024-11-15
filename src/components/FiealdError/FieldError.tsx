import React from 'react'

type Props = {
    msg?:string
}

const FieldError = ({msg}:Props) => {
  return (
    <span className="text-red mb-" >{msg}</span>
  )
}

export default FieldError