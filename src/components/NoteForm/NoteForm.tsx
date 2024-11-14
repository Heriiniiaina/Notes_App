import React from 'react'

interface FormProps{
    title:string
}


const NoteForm = ({title}:FormProps) => {
    const actionIcone = ()=>(
        <>
        <div></div>
        <div></div>
        </>
    )
    const titleIcone = ()=><></>
const contentInput = ()=><></>
const submitButton = ()=><></>
  return (
    <div className=''>
        <div>
            <div>{title}</div>
            {actionIcone}
        </div>
        {titleIcone}
        {contentInput}
        {submitButton}
    </div>
  )
}

export default NoteForm