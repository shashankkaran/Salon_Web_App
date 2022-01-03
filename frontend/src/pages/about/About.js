import React from 'react'

function About() {
  return (
    <div>
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto flex flex-wrap">
          <div class="flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
            <div class="w-full sm:p-4 px-4 mb-6">
              <h1 style={{fontSize:'2rem'}} class="title-font font-medium text-xl mb-2 text-gray-900">About Us</h1>
              <div class="leading-relaxed">
                <p style={{fontSize:'1rem'}}>The Biggest Spa in Bangalore, Karnataka, India. We provide range of Body Massages and Spa Services in Bangalore at our well established Luxury Thai Spa. Highly trained and experienced therapists from all over India. Services like: Swedish Massage, Deep Tissue Massage Aroma Massage, Thai Yoga Massage Couple Massage, Body Scrub, Jacuzzi, Sauna.. BEST RATED SPA IN BANGALORE | BENGALURU'S MOST TRUSTED SPA</p >
              </div>
            </div>
            <div class="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
              <h2 class="title-font font-medium text-3xl text-gray-900">10Lakh+</h2>
              <p class="leading-relaxed">Customers</p>
            </div>
            <div class="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
              <h2 class="title-font font-medium text-3xl text-gray-900">5Lakh+</h2>
              <p class="leading-relaxed">Prime Customers</p>
            </div>
            <div class="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
              <h2 class="title-font font-medium text-3xl text-gray-900">35</h2>
              <p class="leading-relaxed">Team Member</p>
            </div>
            <div class="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
              <h2 class="title-font font-medium text-3xl text-gray-900">5</h2>
              <p class="leading-relaxed">Outlets</p>
            </div>
          </div>
          <div class="lg:w-1/2 sm:w-1/3 w-full rounded-lg overflow-hidden mt-6 sm:mt-0">
            <img class="object-cover object-center w-full h-full" src="https://www.androidappsourcecode.com/wp-content/uploads/2018/12/spa.jpg" alt="stats" />
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
