
import React from 'react'

export default function Hero() {
  return (
    <>
         <main className='w-full bg-[#f3f3f3]'>
            <div className='container grid grid-cols-2 items-center space-y-2 py-10 sm:py-0 sm:h-[600px] '>
                <div >
                    <div className='space-y-2 grid justify-items-center sm:justify-items-start'>
                        <p className='uppercase'>Hello</p>
                        <p className='text-3xl md:text-5xl font-bold text-black/80 '>I' m Suman Smith</p>
                        <p className='text-3xl text-gray-700 '>Freelance web & <br /> Full Stack Developer </p>
                        <p className='text-black/75 text-center sm:text-left line-clamp-3 indent-8 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque vero similique quos autem earum, atque repellendus soluta sapiente voluptates perferendis et perspiciatis impedit sequi modi tempora molestias corrupti, iste voluptate.
                        Nam in beatae rem assumenda ipsum laboriosam nulla, nostrum harum. Quam ipsum maxime tenetur rerum exercitationem eveniet laborum nisi. Beatae itaque ratione quis molestias dicta dolores laboriosam quaerat voluptates maxime.
                        Perferendis vel nostrum alias consequatur harum at voluptas incidunt ratione, tempora dignissimos repellat, dicta possimus repudiandae odio expedita. Aspernatur esse maxime eum voluptates, eaque quisquam sint! Reprehenderit excepturi illo accusantium.</p>
                        <button className='inline-block bg-[#f98e2b] text-white cursor-pointer hover:bg-[#f98e2b]/80 px-4 py-2 rounded-lg'>Hire me</button>
                    </div>
                </div>
                 {/* image section */}
                <div>
                    <img src="person2.png" className='w-full md:max-w-lg mx-auto ' />
                </div>
            </div>
         </main>
    </>
  )
}
