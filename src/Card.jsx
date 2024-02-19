import Img1 from './assets/fruit1.jpg'
import Img2 from './assets/fruit2.jpg'
import Img3 from './assets/fruit3.jpg'
import Img4 from './assets/fruit4.jpg'
import Img5 from './assets/fruit5.jpg'
import Img6 from './assets/fruit6.jpg'
import Img7 from './assets/fruit7.jpg'
import Img8 from './assets/fruit8.jpg'

const CardImages = [
    {
        id:1,
        img:Img1,
        button:"Details",
        description:"economical: In organic farming, no expensive fertilizers, pesticides, or HYV seeds are required for the plantation of crops."
        
    },
    {
        id:2,
        img:Img2,
        button:"Details",
        description:"sustainable: Organic farming promotes sustainable practices by reducing environmental pollution, conserving water."
        
    },
    {
        id:3,
        img:Img3,
        button:"Details",
        description:"nutritious: Organic foods are richer in nutrients, including vitamins, minerals, and antioxidants."
        
    },
    {
        id:4,
        img:Img4,
        button:"Details",
        description:"ethical: Organic farming prioritizes animal welfare and ethical treatment of farm animals."
        
    },
    {
        id:5,
        img:Img5,
        button:"Details",
        description:"healthy: Organic farming reduces exposure to harmful chemicals and pesticides, promoting overall health and well-being."
        
    },
    {
        id:6,
        img:Img6,
        button:"Details",
        description:"community-oriented: Organic farming fosters strong community ties by supporting local farmers and promoting agriculture."
        
    },
    {
        id:7,
        img:Img7,
        button:"Details",
        description:"Organic farms were found to have more plant diversity, as well as more earthworms, insects, butterflies,even increased"
        
    },
    {
        id:8,
        img:Img8,
        button:"Details",
        description:"community-oriented: Organic farming fosters strong community ties by supporting local farmers and promoting  agriculture."
        
    }
]

const Card = () => {
  return (
    <div className='py-10'>
      <div className='flex flex-wrap justify-center'>
        {CardImages.map((card)=>(
          <div key={card.id}
            className='w-80 h-96 rounded-2xl bg-white shadow-xl mx-4 my-4 flex flex-col'
          >
            <div className='h-48 relative'>
              <img 
                src={card.img} 
                alt="" 
                className='w-full h-full object-cover rounded-t-2xl' 
              />
            </div>
            <div className='flex-grow bg-white'>
              <div className='p-4 text-center'>
                <p className="text-gray-500 text-sm line-clamp-4 py-2">
                  {card.description}
                </p>
                <button 
                  className='border-solid border-2 border-spacing-4 m-5 p-2 rounded-full text-sm transition-transform hover:scale-105 duration-300'
                  >
                  {card.button}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Card;
