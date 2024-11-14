import React from 'react'
import { FaPencil, FaTrash } from 'react-icons/fa6'
import ButtonPrimary from '../ButtonPrimary/ButtonPrimary'

interface FormProps {
    title: string
}


const NoteForm = ({ title }: FormProps) => {
    const actionIcone = (
        <div className='w-1/12 flex'>
            <div className='cursor-pointer w-1/2'>
                <FaPencil />
            </div>
            <div className='cursor-pointer w-1/2'>
                <FaTrash />
            </div>
        </div>
    )
    const titleInput = (
        <>
            <label htmlFor="">Title</label>
            <input type="text" name='title' className='border-2 rounded max-w-[300px]' />
        </>
    )
    const contentInput = (
        <>
            <label htmlFor="">Content</label>
            <textarea name='content' rows={5} className="border-2 rounded " />
        </>
    )
    const submitButton = (
        <div className='text-right'>
            <ButtonPrimary>Submit</ButtonPrimary>
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
            {submitButton}
        </div>
    )
}

export default NoteForm