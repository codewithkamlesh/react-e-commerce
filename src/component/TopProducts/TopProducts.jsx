import React from 'react'
import Img1 from "../../assets/shirt/shirt.png"
import Img2 from "../../assets/shirt/shirt2.png"
import Img3 from "../../assets/shirt/shirt3.png"
import { FaStar } from 'react-icons/fa6'

 const ProductsData = [
    {
        id:1,
        img:Img1,
        title:"Casual Wear",
        description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, quae autem. Voluptatum atque molestiae recusandae beatae quidem autem nobis debitis pariatur libero consectetur!'
    },
    {
        id:2,
        img:Img2,
        title:"Printed Shirts",
        description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, quae autem. Voluptatum atque molestiae recusandae beatae quidem autem nobis debitis pariatur libero consectetur!'
    },
    {
        id:3,
        img:Img3,
        title:"Women Shirts",
        description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, quae autem. Voluptatum atque molestiae recusandae beatae quidem autem nobis debitis pariatur libero consectetur!'
    },
 ]

 
const TopProducts = ({handleOrderPopup}) => {
  return (
    <div className='container'>
     <div className='lext-left' mg-24>
        <p data-aos = 'fade-up'className='text-xs text-gray-400'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos unde minima odio recusandae saepe tempora praesentium libero consequuntur cum porro? Sequi, iure nobis!
        </p>
        <div>
           <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center'>
            {ProductsData.map((data)=>(
             <div data-aos = 'zoom-in'
             className='rounded-2xl text-center bg-white dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-primary hover:text-white relative shadow-xl duration-300 group max-w-[300px]'
             >
                <div>
                    <img src={data.img}alt=""
                    className='max-w-[140px] block mx-auto transform-translate-y-20 group-hover:scale-105 duration-300 drop-shadow-md'
            
                    />
                </div>
                <div className='w-full flex items-center justify-center gap-1'>
                    <FaStar className='text-yellow-500'/>
                    <FaStar className='text-yellow-500'/>
                    <FaStar className='text-yellow-500'/>
                    <FaStar className='text-yellow-500'/>
                </div>
                <h1 className='text-xl font-bold'>{data.title}</h1>
                <p className='text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2'>{data.description}</p>
                <button className='bg-primary hover:scale-105 duration-300 text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-primary'
                onClick={handleOrderPopup}
                ></button>
             </div>   
            ))}
           </div>
        </div>
     </div>

    </div>
  )
}

export default TopProducts