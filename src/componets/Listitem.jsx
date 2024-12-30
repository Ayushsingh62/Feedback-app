import React from 'react'

const Listitem = ({review , DeleteItem , EditItem}) => {
    // console.log(review,"item55")
  return (
    <>
      

<li>
<p>{review.id}</p>
<h1>{review.rating}</h1>
<h1>{review.text}</h1>
<button onClick={()=>EditItem(review)}>Edit</button>
<button onClick={()=>DeleteItem(review.id)} >Delete</button>

</li>

    </>
  )
}

export default Listitem
