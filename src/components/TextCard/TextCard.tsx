import React, { useState } from 'react'

import {FaTrash} from "react-icons/fa6"

type Props = {
    title: string,
    subtitle: string
    content: string,
    onClickTrash: React.MouseEventHandler<SVGElement>
    onClick: React.MouseEventHandler<HTMLDivElement>
}

const TextCard = ({ title, subtitle, content, onClickTrash, onClick }: Props) => {
    
    const [isTrahsHovered,setISTrashHovered] = useState(false)
  
    return (
        <div onClick={onClick} 
            
            className="relative flex cursor-pointer w-[300px]  h-[300px] flex-col rounded-md border p-6 border-gray-200 bg-white  hover:border-gray-400 sm:rounded-lg sm:p-5 shadow-sm shadow-slate-800">
            <div className='flex items-center justify-between'>
                <span className="text-md mb-0 font-semibold text-gray-900 hover:text-black sm:mb-1.5 sm:text-xl">
                    {title}
                </span>
                <FaTrash 
                     onMouseEnter={()=>setISTrashHovered(true)}
                     onMouseLeave={()=>setISTrashHovered(false)}
                     style={isTrahsHovered ? {color:"red"} : {color:"#b8b8b8"}}
                     onClick={(e)=>{
                        onClickTrash(e),
                        e.stopPropagation()
                     }}
                />

            </div>
            <span className="text-sm leading-normal text-gray-400 sm:block">
                {subtitle}
            </span>
            <span
  className="text-sm leading-normal text-gray-400 sm:block"
  style={{
    display: '-webkit-box',
    WebkitBoxOrient: 'vertical',
    WebkitLineClamp: 2,
    overflow: 'hidden',
  }}
>
  {content}
</span>
        </div>
    )

}
export default TextCard