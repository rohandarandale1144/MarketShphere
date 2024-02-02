import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className='descriptionbox-nav-box fade'>Reviews (110)</div>
        </div>
        <div className="descriptionbox-description">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Dolorem unde quaerat beatae. Molestiae laborum, facilis animi praesentium, 
                non consectetur, placeat vero laudantium corporis quos iure esse voluptatum ratione 
                quasi incidunt dolorum excepturi velit officia omnis vitae consequuntur voluptatibus. 
                Nihil, eligendi.</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                    Soluta ipsum commodi esse impedit ea cumque qui quis reiciendis, 
                    facilis delectus eveniet nostrum rem veritatis pariatur.</p>
        </div>
    </div>
  )
}

export default DescriptionBox
