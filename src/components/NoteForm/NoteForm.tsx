import React, { MouseEventHandler, useState } from 'react'
import { FaPencil, FaTrash } from 'react-icons/fa6'
import ButtonPrimary from '../ButtonPrimary/ButtonPrimary'

interface FormProps {
    title: string,
    onClickEdit?: React.MouseEventHandler<SVGElement>,
    onClickTrash?:React.MouseEventHandler<SVGElement>,
    onSubmit?:(formValue: { title: string; content: string }) => void 
}


const NoteForm = ({ title,onClickEdit,onClickTrash,onSubmit }: FormProps) => {
    const [formValue,setFormValue] = useState({title:"",content:""})
    const updateFormValue = (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>{
        setFormValue({...formValue,[e.target.name]:e.target.value})
    }
    console.log(formValue);
    
    const actionIcone = (
        <div className='w-1/12 flex'>
            <div className='cursor-pointer w-1/2'>
             { onClickEdit &&   <FaPencil onClick={onClickEdit} /> }  
            </div>
            <div className='cursor-pointer w-1/2'>
             { onClickTrash &&  <FaTrash onClick={onClickTrash}/> }
            </div>
        </div>
    )
    const titleInput = (
        <>
            <label htmlFor="">Title</label>
            <input onChange={updateFormValue} type="text" name='title' className='border-2 rounded max-w-[300px]' />
        </>
    )
    const contentInput = (
        <>
            <label htmlFor="">Content</label>
            <textarea onChange={updateFormValue} name='content' rows={5} className="border-2 rounded " />
        </>
    )
    const submitButton = (
        <div className='text-right'>
            <ButtonPrimary onClick={()=>onSubmit && onSubmit(formValue)}>Submit</ButtonPrimary>
        </div>
    )
    return (
        <form className='flex flex-col p-10 bg-white gap-y-4 rounded-3xl '>
            <div className='flex justify-between w-11/12'>
                <div>
                    <h2 className='m-b-2 font-bold text-2xl'>
                        {title}
                    </h2>
                </div>

                {actionIcone}
            </div>
            {titleInput}
            {contentInput}
            {onSubmit && submitButton}
        </form>
    )
}

export default NoteForm