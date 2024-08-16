import React from 'react'

const why={
    "Flexible": 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, tenetur.',
    "Personalized": 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores, similique.',
    "Affordable": 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores, similique.'
}

const Why = () => {
  return (
    <section>
        <h1>Why Upskillect</h1>
        <div className='grid grid-cols-3'>
        {Object.entries(why).map(([key, value])=>(
            <section key={key} className='w-full h-[200px] my-11 bg-red-500'>
                <h1 className='text-center'>{key}</h1>
            </section>
        ))
        }
        </div>
        

    </section>
  )
}

export default Why