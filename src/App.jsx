
import React, { useState } from 'react'
import './App.css'
import Navbar from './componets/Navbar'
import Form from './componets/Form'
import Listgroup from './componets/Listgroup'
const App = () => {
  const [edit , setEdit]=useState({isEdit:false , feedback:{}})
  const [reviews ,setReview]=useState([

    // {
    //   id:1,
    //   text :"good",
    //   rating:3,
    // },
  ])
  // const [rating ,setRating]=useState()


  const addItem =(text,rating)=>{

setReview([{id: reviews.length+1,text:text, rating:rating}, ...reviews])

// console.log(id, text, rating,"app")

  }
  const DeleteItem =(id)=>{
// console.log("Delete",id)
setReview(reviews.filter((review)=>{
  if(review.id !==id){
    return true
  }
}


))

  }

  const EditItem =(review)=>{
// console.log("edit")
setEdit({isEdit:true , feedback:review})

  }
  const UpdateItem =(oldID,newText,newrating)=>{
    console.log(oldID,newText,newrating )

    setReview(reviews.map((review)=>{

if(review.id ===oldID){
  return {id :oldID ,text:newText,rating:newrating}
}
else{
  feedback;
}
    }))
    // setReview(reviews.map((review)=> 
    //   review.id===oldID ?{id :oldID ,text:newText,rating:newrating} :feedback
    // ))

    setEdit({isEdit:false , feedback:{}})
  }


  return (
    <div>
      <Navbar/>
      <Form addItem={addItem}  edit={edit} UpdateItem={UpdateItem} />
      <Listgroup reviews={reviews}   DeleteItem={DeleteItem} EditItem={EditItem} />

    </div>
  )
}

export default App
