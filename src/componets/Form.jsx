import React, { useEffect, useState } from 'react'

const Form = ({ addItem , edit,UpdateItem  }) => {
  const [text, setText] = useState("")
  const [rating, setRating] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    // setTodo(e.target.value)
    if(edit.isEdit ===false){
    addItem(text, rating)

    }else{
      UpdateItem(edit.feedback.id,text , rating)
    }
    setText("")
    setRating("")


  }
  useEffect(()=>{
    setText(edit.feedback.text)
    setRating(edit.feedback.rating)
  },[edit])


  return (
    <>
      <div className="form">

        <form
         onSubmit={(e) => { handleSubmit(e) }} >

          <select name="" id="rating"
          onChange={(e) => setRating(e.target.value)}
          value={rating}
          >
            <option value="0">0</option >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="4">5</option>
          </select>

          <input type="text" placeholder='Review' className='Review'

            onChange={(e) => setText(e.target.value)}
            value={text}
          />

          <button type='submit' >Submit</button>

        </form>

      </div>
    </>
  )
}

export default Form
