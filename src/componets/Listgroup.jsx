import React from 'react'
import Listitem from './Listitem'

const Listgroup = ({reviews , DeleteItem , EditItem}) => {
  // console.log(reviews)
  return (
    <div>
      <div className="listgroup">
<ul>
{reviews.map((review)=>{
  return <Listitem key={review.id} review={review} DeleteItem={DeleteItem}  EditItem={EditItem} />

})}

</ul>


</div>
    </div>
  )
}

export default Listgroup
