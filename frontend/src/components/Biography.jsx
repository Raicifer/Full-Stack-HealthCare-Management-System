import React from 'react'

const Biography = ({imageUrl}) => {
  return (
    <div className='container biography'>
      <div className="banner">
        <img src={imageUrl} alt='aboutImg'/>
      </div>
      <div className="banner">
        <p>Biography</p>
        <h3>Who We Are</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In, fuga omnis cumque alias tenetur placeat ad repellendus, deleniti nulla atque aut laudantium dolorum sequi libero assumenda rerum. Nemo esse commodi cum nam, repellendus, praesentium minima reprehenderit quisquam, quod assumenda quia deleniti corrupti aspernatur. Quisquam fugiat reprehenderit facere suscipit, impedit eum!</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
        <p>Lorem ipsum dolor sit amet.</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor dolore cumque accusantium qui. Recusandae, unde ea quod inventore dolor sunt doloribus maxime, delectus sit mollitia eius facilis iure. Animi autem ab nobis temporibus totam necessitatibus.</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia, distinctio.</p>
        <p>Lorem, ipsum dolor.</p>
      </div>
    </div>
  )
}

export default Biography
