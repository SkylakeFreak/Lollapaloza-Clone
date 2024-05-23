import React from 'react'
import {Aclonica, Anton, Averia_Sans_Libre, Golos_Text, Jockey_One, Luckiest_Guy, Pacifico, Prompt, Rock_Salt, Rubik_Broken_Fax, Rubik_Maps, Ubuntu, Unica_One} from "@next/font/google"; 
const anton=Anton({
    subsets:["latin"],
    weight:'400'
  })
function Second() {
  return (
         <div className='lg:flex md:h-auto h-auto'>
                  <div className=' flex-1  bg-spgreen'>
                    <div className='p-20 md:p-10'>
                    <p className='flex justify-center text-2xl lg:text-5xl lg:mt-40' style={anton.style}>HELP & INFO</p>
                    <p className='flex justify-center text-lg text-center   lg:text-2xl mt-4'>Find quick answers to your questions</p>
                    <p style={anton.style} className='flex justify-center text-2xl lg:text-4xl mt-8 lg:mb-40'>LEARN MORE</p>
                    </div>
                    
                  </div>
                  <div className='flex-1 bg-sppink'>
                    <div className='p-20 md:p-10'>
                    <p className='flex justify-center text-2xl lg:text-5xl lg:mt-40' style={anton.style}>RESERVE YOUR HOTEL</p>
                    <p className='flex justify-center text-lg text-center   lg:text-2xl mt-4 '>Check out our exclusive rates</p>
                    <p style={anton.style} className='flex justify-center text-2xl lg:text-4xl mt-8 lg:mb-40'>BOOK HOTEL</p>
                    </div>
                  
                  </div>
                  <div className=' flex-1 bg-spblue'>
                    <div className='p-20 md:p-10' >
                    <p className='flex justify-center text-2xl lg:text-5xl lg:mt-40' style={anton.style}>HELP & INFO</p>
                    <p className='flex justify-center text-lg text-center   lg:text-2xl mt-4'>Find quick answers to your questions</p>
                    <p style={anton.style} className='flex justify-center text-2xl lg:text-4xl mt-8 lg:mb-40'>LEARN MORE</p>
                    </div>
                  
                  </div>
                </div>
  )
}

export default Second