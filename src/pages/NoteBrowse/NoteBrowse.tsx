import React from 'react'
import TextCard from '../../components/TextCard/TextCard'



const NoteBrowse = () => {
  return (
 
        <TextCard title='test' content='dadadad' subtitle='12/12/22' onClickTrash={()=>alert("delete")} onClick={()=>alert("ok") }/>
   
  )
}
export default NoteBrowse