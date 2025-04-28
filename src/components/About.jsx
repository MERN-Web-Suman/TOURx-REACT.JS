
import React from 'react'

export default function About() {
  return (
    <div>
        <section id='about' className='bg-white' >
            <div className='container md:w-[70%] sm:py-16 py-10'>
                <div className='grid items-center gap-4 grid-cols-1 sm:grid-cols-2'>
                    <div className='relative font-bold'>
                        <div className='text-center text-6xl xl:text-8xl font-bold text-black/5'>
                            ABOUT 
                        </div>
                             <h1 className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl md:text-4xl'>About me</h1>
                    </div>
                    <div>
                    <p className='text-justify indent-8'>  I' M Suman Smith Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae non nobis quidem laborum ipsam corrupti dolor, assumenda sit eius sequi at delectus consequatur qui, atque, provident hic! Ea, quasi vel.
                    Voluptas sit sunt facilis, commodi, ipsa expedita vero asperiores ad optio error repellat minus recusandae provident quasi amet laudantium laborum soluta veritatis, accusamus nulla officia repellendus. Dignissimos totam eum tenetur!
                    Minus suscipit nobis earum temporibus deleniti. Non omnis, cumque reprehenderit vitae nemo fuga eveniet aliquid ducimus minus voluptas excepturi eaque vero, quos pariatur quasi quod, fugiat voluptates neque vel explicabo.
                      <br /> { " "}
                      <br />
                      <br />

                      <p className=''>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur eveniet quae saepe fugiat reiciendis tempore quis ducimus nulla omnis corporis perferendis culpa alias cumque ea harum blanditiis debitis, impedit error!
                      .</p></p>

                       <div>
                        <button  className='inline-block my-6 mr-6 bg-[#f98e2b] text-white cursor-pointer hover:bg-[#f98e2b]/80 px-4 py-2 rounded-lg'>Downlode Resume</button>

                          <button  className='lnline-block my-6 mr-6 ring-[#f98e2b] inset-0 text-[#f98e2b] cursor-pointer hover:bg-[#f98e2b] hover:text-white  px-4 py-2  my-3 rounded-lg'>Contact</button>
                       </div>
                </div>    
            </div>
              
            </div>
        </section>
    </div>
  )
}
