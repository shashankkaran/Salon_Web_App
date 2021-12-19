import React from 'react'
import v1 from '../../images/v1.mp4'
import './home.css'
import i1 from '../../images/i1.png'
import ii1 from '../../images/ii1.png'

import ii2 from '../../images/ii2.png'

import ii3 from '../../images/ii3.png'

import ii4 from '../../images/ii4.png'

import ii5 from '../../images/ii5.png'
import i2 from '../../images/i2.jpg'
import Divider from '@mui/material/Divider';
import i3 from '../../images/i3.jpg'
function Home() {
    return (
        <div>




            <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src={i1} class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src={i2} class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src={i3} class="d-block w-100" alt="..." />
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>










            <section class="text-gray-600 body-font">
                <div class="container px-5 py-5 mx-auto flex flex-wrap">
                    <div class="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
                    <img class="object-cover object-center w-full h-full" src={ii1} alt="stats"/>
                    </div>
                    <div class="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
                        <div class="flex flex-col mb-10 lg:items-start items-center">
                            <div class="w-12 h-12 inline-flex items-center justify-center  ml-auto mr-auto rounded-full bg-indigo-100 text-indigo-500 mb-5">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
                                    <circle cx="6" cy="6" r="3"></circle>
                                    <circle cx="6" cy="18" r="3"></circle>
                                    <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                                </svg>
                            </div>
                            <div class="flex-grow">
                                <h2 class="text-gray-900 text-lg title-font font-medium mb-3"> Reviva Salon and SPA<br />099020 01148</h2>
                                <p class="leading-relaxed text-base">Quality services for women, men & kids and uncompromised hygiene is what we excel at</p>

                            </div>
                        </div>
                        <div class="bg-white">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.9527942499913!2d77.66125551482135!3d12.910755590895786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae137024e1ed5b%3A0xfe03c1f6a66f9a87!2sReviva%20Salon%20and%20SPA!5e0!3m2!1sen!2sin!4v1639671746428!5m2!1sen!2sin" width="95%" height="90%" allowfullscreen="" loading="lazy"></iframe>
                        </div>
                    </div>
                </div>




                <div class="container px-5 py-5 mx-auto flex flex-wrap">

                    <div class="flex part1 flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
                        <div class="flex flex-col mb-10 lg:items-start items-center">
                            <div class="w-12 h-12 inline-flex items-center justify-center  ml-auto mr-auto rounded-full bg-indigo-100 text-indigo-500 mb-5">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
                                    <circle cx="6" cy="6" r="3"></circle>
                                    <circle cx="6" cy="18" r="3"></circle>
                                    <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                                </svg>
                            </div>
                            <div class="flex-grow">
                                <h2 class="text-gray-900 text-lg title-font font-medium mb-3">Esplendor spa and salon <br />080 4170 7679 </h2>
                                <p class="leading-relaxed text-base">Quality services for women, men & kids and uncompromised hygiene is what we excel at</p>

                            </div>
                        </div>
                        <div class="bg-white">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.572906565262!2d77.6202857148216!3d12.935149090879849!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1444d12ae3cd%3A0x1470b364d768e211!2sEsplendor%20spa%20and%20salon!5e0!3m2!1sen!2sin!4v1639672694091!5m2!1sen!2sin" width="95%" height="90%" allowfullscreen="" loading="lazy"></iframe>
                        </div>
                    </div>


                    <div class="lg:w-1/2 w-full mb-10 lg:mb-0 part2 rounded-lg overflow-hidden">
                        
                    <img class="object-cover object-center w-full h-full" src={ii2} alt="stats"/>
                    </div>

                </div>
                <br />
                <div class="container px-5 py-12 mt-12 mx-auto flex flex-wrap">
                    <div class="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
                       
                    <img class="object-cover object-center w-full h-full" src={ii3} alt="stats"/>
                    </div>
                    <div class="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
                        <div class="flex flex-col mb-10 lg:items-start items-center">
                            <div class="w-12 h-12 inline-flex items-center justify-center  ml-auto mr-auto rounded-full bg-indigo-100 text-indigo-500 mb-5">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
                                    <circle cx="6" cy="6" r="3"></circle>
                                    <circle cx="6" cy="18" r="3"></circle>
                                    <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                                </svg>
                            </div>
                            <div class="flex-grow">
                                <h2 class="text-gray-900 text-lg title-font font-medium mb-3">ORA WELLNESS & SPA <br /> +91 95384 51497</h2>
                                <p class="leading-relaxed text-base">Quality services for women, men & kids and uncompromised hygiene is what we excel at</p>

                            </div>
                        </div>
                        <div class="bg-white">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.19434276791!2d77.63328781482123!3d12.895221590905939!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15c91a088051%3A0x966953eed4105b!2sORA%20WELLNESS%20%26%20SPA!5e0!3m2!1sen!2sin!4v1639673784877!5m2!1sen!2sin" width="95%" height="90%" allowfullscreen="" loading="lazy"></iframe>
                        </div>
                    </div>
                </div>


                <div class="container px-5 py-5 mx-auto flex flex-wrap">

                    <div class="flex part1 flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
                        <div class="flex flex-col mb-10 lg:items-start items-center">
                            <div class="w-12 h-12 inline-flex items-center justify-center  ml-auto mr-auto rounded-full bg-indigo-100 text-indigo-500 mb-5">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
                                    <circle cx="6" cy="6" r="3"></circle>
                                    <circle cx="6" cy="18" r="3"></circle>
                                    <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                                </svg>
                            </div>
                            <div class="flex-grow">
                                <h2 class="text-gray-900 text-lg title-font font-medium mb-3">Splash(De Stress)Wellness And Spa <br />+91 6364 138 018</h2>
                                <p class="leading-relaxed text-base">Quality services for women, men & kids and uncompromised hygiene is what we excel at</p>

                            </div>
                        </div>
                        <div class="bg-white" >
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.824933508038!2d77.64951821482147!3d12.918970890890419!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae14822713ef59%3A0xe084198bd9272d28!2sSplash(De%20Stress)Wellness%20And%20Spa!5e0!3m2!1sen!2sin!4v1639673921817!5m2!1sen!2sin" width="95%" height="90%" allowfullscreen="" loading="lazy"></iframe>
                        </div>
                    </div>


                    <div class="lg:w-1/2 w-full mb-10 lg:mb-0 part2 rounded-lg overflow-hidden">
                       
                    <img class="object-cover object-center w-full h-full" src={ii4} alt="stats"/>
                    </div>

                </div>



<br/>

                <div class="container px-5 py-5 mx-auto flex flex-wrap">
                    <div class="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
                    <img class="object-cover object-center w-full h-full" src={ii5} alt="stats"/>
                 
                    </div>
                    <div class="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
                        <div class="flex flex-col mb-10 lg:items-start items-center">
                            <div class="w-12 h-12 inline-flex items-center justify-center  ml-auto mr-auto rounded-full bg-indigo-100 text-indigo-500 mb-5">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
                                    <circle cx="6" cy="6" r="3"></circle>
                                    <circle cx="6" cy="18" r="3"></circle>
                                    <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                                </svg>
                            </div>
                            <div class="flex-grow">
                                <h2 class="text-gray-900 text-lg title-font font-medium mb-3">R&K Spa<br />98860 44980</h2>
                                <p class="leading-relaxed text-base">Quality services for women, men & kids and uncompromised hygiene is what we excel at</p>

                            </div>
                        </div>
                        <div class="bg-white">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d295966.28552997956!2d77.45266574954927!3d12.926804046058955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae152235f6541d%3A0xb9a29eb262a1f729!2sR%26K%20SALON%20AND%20SPA!5e0!3m2!1sen!2sin!4v1639915308020!5m2!1sen!2sin"  width="95%" height="90%" allowfullscreen="" loading="lazy"></iframe>
                        </div>
                    </div>
                </div>





            </section>
        </div>
    )
}

export default Home
