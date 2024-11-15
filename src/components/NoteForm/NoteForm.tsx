import React, { MouseEventHandler, useEffect, useState } from 'react'
import { FaPencil, FaTrash } from 'react-icons/fa6'
import ButtonPrimary from '../ButtonPrimary/ButtonPrimary'
import { Validators } from '../../services/form-validator';
import FieldError from '../FiealdError/FieldError';

interface FormProps {
    title: string,
    onClickEdit?: React.MouseEventHandler<SVGElement>,
    onClickTrash?:React.MouseEventHandler<SVGElement>,
    onSubmit?:(formValue: { title: string; content: string }) => void 
}

const Validator ={
    title:(value:string)=>{
        return Validators.min(value,3) || Validators.max(value,20)

    },
    content:(value:string)=>{
        return Validators.min(value,4)
    }
}

const NoteForm = ({ title,onClickEdit,onClickTrash,onSubmit }: FormProps) => {
    const [formValue,setFormValue] = useState({title:"",content:""})
    const [formError,setFormError] = useState({title:"",content:""})
    const [hasFormError,setHasFormError] = useState(true)
    const updateFormValue = (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>{
        setFormValue({...formValue,[e.target.name]:e.target.value})
        validate(e.target.name as keyof typeof Validator,e.target.value)
    }
    
    const validate = (name:keyof typeof Validator,value:string)=>{
        setFormError({...formError,[name]:Validator[name](value)})
    }
    
    useEffect(()=>{
        setHasFormError(Object.values(formError).some((err)=>err !== undefined))
    },[formError])
    console.log(formError)
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
        <div className='flex flex-col relative mb-8 gap-y-3'>
            <label htmlFor="">Title</label>
            <input onChange={updateFormValue} type="text" name='title' className='border-2 rounded max-w-[300px]' />
            <FieldError msg={formError.title}/>
        </div>
    )
    const contentInput = (
        <div className='flex flex-col relative mb-8 gap-y-3'>
            <label htmlFor="">Content</label>
            <textarea onChange={updateFormValue} name='content' rows={5} className="border-2 rounded " />
            <FieldError msg={formError.content}/>
        </div>
    )
    const submitButton = (
        <div className='text-right'>
            <ButtonPrimary isDisable={hasFormError} onClick={()=>onSubmit && onSubmit(formValue)}>Submit</ButtonPrimary>
        </div>
    )
    return (
        <div className='flex flex-col p-10 bg-white gap-y-4 rounded-3xl '>
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
        </div>
    )
}

export default NoteForm