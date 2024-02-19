import { SiAircanada } from "react-icons/si";
import { SiBower } from "react-icons/si";
import { IoFlowerSharp } from "react-icons/io5";
import { TbPlant } from "react-icons/tb";
import { PiPottedPlantFill } from "react-icons/pi";
import { PiPlantDuotone } from "react-icons/pi";
import { GiPlantsAndAnimals } from "react-icons/gi";
import { GiPlantRoots } from "react-icons/gi";

const CardImages = [
    {
        id:1,
        icon: < SiAircanada size={24} color="green" />, // Adjust icon size and color
        heading:"Economical",
        description:"In organic farming, no expensive fertilizers, pesticides, or HYV seeds are required for the plantation of crops. This results in significant cost savings for farmers and consumers alike."
    },
    {
        id:2,
        icon: <SiBower  size={24} color="green" />, // Adjust icon size and color
        heading:"Sustainable",
        description:"Organic farming promotes sustainable practices by reducing environmental pollution, conserving water, and preserving soil health. It helps to protect natural ecosystems and biodiversity."
    },
    {
        id:3,
        icon: <IoFlowerSharp size={24} color="green" />, // Adjust icon size and color
        heading:"Nutritious",
        description:"Organic foods are richer in nutrients, including vitamins, minerals, and antioxidants. They are free from synthetic chemicals and pesticides, making them a healthier choice for consumers."
    },
    {
        id:4,
        icon: <TbPlant size={24} color="green" />, // Adjust icon size and color
        heading:"Ethical",
        description:"Organic farming prioritizes animal welfare and ethical treatment of farm animals. It emphasizes providing animals with access to outdoor spaces, natural habitats, and humane living conditions."
    },
    {
        id:5,
        icon: <PiPottedPlantFill size={24} color="green" />, // Adjust icon size and color
        heading:"Healthy",
        description:"Organic farming reduces exposure to harmful chemicals and pesticides, promoting overall health and well-being. It helps to minimize the risk of chronic diseases and promotes a healthier lifestyle."
    },
    {
        id:6,
        icon: <PiPlantDuotone size={24} color="green" />, // Adjust icon size and color
        heading:"Community-oriented",
        description:"Organic farming fosters strong community ties by supporting local farmers and promoting agriculture. It encourages direct sales between farmers and consumers, fostering a sense of trust and cooperation within communities."
    },
    {
        id:7,
        icon: <GiPlantsAndAnimals size={24} color="green" />, // Adjust icon size and color
        heading:"Diverse Environment",
        description:"Organic farms are known to have more plant diversity, as well as more earthworms, insects, butterflies, and other beneficial organisms. They contribute to the preservation of natural habitats and ecosystems."
    },
    {
        id:8,
        icon: <GiPlantRoots size={24} color="green" />, // Adjust icon size and color
        heading:"Community-oriented",
        description:"Organic farming fosters strong community ties by supporting local farmers and promoting agriculture. It encourages direct sales between farmers and consumers, fostering a sense of trust and cooperation within communities."
    }
]

const CardsVeg = () => {
  return (
    <div className='py-10'>
      <div className='flex flex-wrap justify-center bg-gray-200'>
        {CardImages.map((card)=>(
          <div key={card.id}
            className='w-80 h-96 rounded-2xl bg-white shadow-xl mx-4 my-4 flex flex-col'
          >
            <div className='h-10 relative'>
              <div className="absolute top-0 left-0 p-2  border border-transparent">{card.icon}</div> {/* Icon positioned in top-left corner */}
              
            </div>
            <div className='flex-grow bg-white'>
              <div className='p-4 text-center'>
                <h3 className="font-bold text-xl mb-2">{card.heading}</h3>
                <p className="text-gray-500 text-sm py-2">
                  {card.description}
                </p>
                {/* Adjusted button styling */}
                
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CardsVeg;
