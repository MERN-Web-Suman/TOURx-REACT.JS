
import React from 'react'

export default function Services() {
  return (
    <div>
      <div className='container mb-12' >
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 items-center'>
           <div className='flex flex-col gap-6'>
             <h3 className='text-center py-4  text-[#FBA518]'>My experision.</h3>
           <div class="accordion accordion-flush" id="accordionFlushExample">
                <div class="accordion-item">
                  <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                      #1 Apple Macbook
                    </button>
                  </h2>
                  <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                       #2 Microsoft 
                    </button>
                  </h2>
                  <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                     #3 Google AI
                    </button>
                  </h2>
                  <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
                  </div>
                </div>
              </div>
           </div> 
             
             <div className='flex flex-col'>
               <h3 className='text-center text-[#FBA518] py-4 gap-6 ml-6'> My Achivement.</h3>
                <p className='text-justify'><h3>Hii, I' m Suman kumar</h3>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias, in quisquam veniam sapiente quia dolor corrupti eum tempore modi dignissimos odio aliquid blanditiis quasi quod sit autem reiciendis veritatis quae!
                Consectetur sequi blanditiis natus accusamus impedit placeat excepturi quos animi, sapiente non minus illo ipsam veniam odit assumenda, ipsa ea, ad ex dignissimos? Fuga, est tenetur? Quisquam suscipit fuga fugit?
                Voluptates, sapiente temporibus voluptatibus assumenda et quas excepturi nam a sit perspiciatis distinctio eius laudantium cupiditate quis ab. Necessitatibus labore veritatis nemo perferendis atque ex, repellat molestias tenetur rem saepe.</p>
             </div>
        </div>
      </div>
    </div>
  )
}
