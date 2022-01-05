import React from 'react'

import './home.css'
import i1 from '../../images/i1.png'
import ii1 from '../../images/ii1.png'
import v11 from '../../images/v1.mp4'

// import ii2 from '../../images/esplendor.mp4'



import vid1 from "../../images/Esplandor.mp4"

import vid2 from "../../images/Orami.mp4"

import vid3 from "../../images/Splash.mp4"

import vid4 from "../../images/r_k.mp4"

import vid5 from "../../images/revive.mp4"






import ii3 from '../../images/ii3.png'

import ii4 from '../../images/ii4.png'

import ii5 from '../../images/ii5.png'
import i2 from '../../images/i2.jpg'
import Divider from '@mui/material/Divider';
import i3 from '../../images/i3.jpg'
import i4 from '../../images/spa.jpeg'
function Home() {
    return (
        <div>



            <div>
                <video style={{ width: "100%" }} autoPlay muted loop>
                    <source src={v11} />
                </video>
            </div>



            <section class="text-gray-600 body-font">
                <div class="container px-5 py-5 mx-auto flex flex-wrap">
                    <div class="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg pt-5 overflow-hidden">

                        <div>
                            <video style={{ width: "100%" }} autoPlay muted loop>
                                <source src={vid5} />
                            </video>
                        </div>

                    </div>
                    <div class="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
                        <div class="flex flex-col mb-10 lg:items-start items-center">
                            {/* <div class="w-12 h-12 inline-flex items-center justify-center  ml-auto mr-auto rounded-full bg-indigo-100 text-indigo-500 mb-5">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
                                    <circle cx="6" cy="6" r="3"></circle>
                                    <circle cx="6" cy="18" r="3"></circle>
                                    <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                                </svg>
                            </div> */}
                            <div class="flex-grow">
                                <h2 class="text-gray-900 text-lg title-font font-medium mb-3"> Reviva Salon and SPA<br />+91 99020 01148</h2>
                                <p class="leading-relaxed text-base">Quality services and uncompromised hygiene is what we excel at</p>
                                <span class="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
                                    <a href="https://www.facebook.com/Revive-Salon-And-Spa-110248058176328" class="text-gray-500">
                                        <svg fill="black" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                        </svg>
                                    </a>
                                    <a class="ml-3 text-gray-500">
                                        <svg fill="white" stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                                        </svg>
                                    </a>

                                </span>
                            </div>
                        </div>
                        <div class="bg-white">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.9527942499913!2d77.66125551482135!3d12.910755590895786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae137024e1ed5b%3A0xfe03c1f6a66f9a87!2sReviva%20Salon%20and%20SPA!5e0!3m2!1sen!2sin!4v1639671746428!5m2!1sen!2sin" width="100%" height="90%" allowfullscreen="" loading="lazy"></iframe>
                        </div>
                    </div>
                </div>

                <hr />


                <div class="container px-5 py-5 mx-auto flex flex-wrap">

                    <div class="flex lg:pl-0 part1 flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
                        <div class="flex flex-col mb-10 lg:items-start items-center">
                            {/* <div class="w-12 h-12 inline-flex items-center justify-center  ml-auto mr-auto rounded-full bg-indigo-100 text-indigo-500 mb-5">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
                                    <circle cx="6" cy="6" r="3"></circle>
                                    <circle cx="6" cy="18" r="3"></circle>
                                    <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                                </svg>
                            </div> */}
                            <div class="flex-grow">
                                <h2 class="text-gray-900 text-lg title-font font-medium mb-3">Esplendor spa and salon <br />+91 99861 01846</h2>
                                <p class="leading-relaxed text-base">Men are rich only as they give. He who gives great service gets great rewards.</p>

                                <span class="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
                                    <a href="https://www.facebook.com/Esplendor-Salon-and-Spa-100480492504465" class="text-gray-500">
                                        <svg fill="black" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                        </svg>
                                    </a>
                                    <a class="ml-3 text-gray-500">
                                        <svg fill="white" stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                                        </svg>
                                    </a>

                                </span>
                            </div>
                        </div>
                        <div class="bg-white">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.572906565262!2d77.6202857148216!3d12.935149090879849!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1444d12ae3cd%3A0x1470b364d768e211!2sEsplendor%20spa%20and%20salon!5e0!3m2!1sen!2sin!4v1639672694091!5m2!1sen!2sin" width="95%" height="90%" allowfullscreen="" loading="lazy"></iframe>
                        </div>
                    </div>


                    {/* <div class="lg:w-1/2 w-full mb-10 lg:mb-0 part2 rounded-lg overflow-hidden">
                        <video style={{marginBottom:'auto'}}>
                            <source  src={ii2} alt="stats" />
                        </video>
                    </div> */}

                    <div class="lg:w-1/2 w-full mt-auto mb-auto mb-10 lg:mb-0 part2 rounded-lg overflow-hidden">


                        <div>
                            <video style={{ width: "100%" }} autoPlay muted loop>
                                <source src={vid1} />
                            </video>
                        </div>
                    </div>


                </div>

                <br /><br />
                <hr />
                <div class="container px-5 py-12 mt-12 mx-auto flex flex-wrap">
                    <div class="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">


                        <div>
                            <video style={{ width: "100%" }} autoPlay muted loop>
                                <source src={vid2} />
                            </video>
                        </div>
                    </div>
                    <div class="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
                        <div class="flex flex-col mb-10 lg:items-start items-center">
                            {/* <div class="w-12 h-12 inline-flex items-center justify-center  ml-auto mr-auto rounded-full bg-indigo-100 text-indigo-500 mb-5">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
                                    <circle cx="6" cy="6" r="3"></circle>
                                    <circle cx="6" cy="18" r="3"></circle>
                                    <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                                </svg>
                            </div> */}
                            <div class="flex-grow">
                                <h2 class="text-gray-900 text-lg title-font font-medium mb-3">ORA WELLNESS & SPA <br /> +91 95384 51497</h2>
                                <p class="leading-relaxed text-base">What do we live for if not to make life less difficult for each other?</p>
                                <span class="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
                                    <a href="https://www.facebook.com/Ora-Mik-Wellness-and-Spa-112219741309222" class="text-gray-500">
                                        <svg fill="black" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                        </svg>
                                    </a>
                                    <a class="ml-3 text-gray-500">
                                        <svg fill="white" stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                                        </svg>
                                    </a>

                                </span>
                            </div>
                        </div>
                        <div class="bg-white">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.19434276791!2d77.63328781482123!3d12.895221590905939!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15c91a088051%3A0x966953eed4105b!2sORA%20WELLNESS%20%26%20SPA!5e0!3m2!1sen!2sin!4v1639673784877!5m2!1sen!2sin" width="95%" height="90%" allowfullscreen="" loading="lazy"></iframe>
                        </div>
                    </div>
                </div>
                <hr />

                <div class="container px-5 py-5 mx-auto flex flex-wrap">

                    <div class="flex lg:pl-0 part1 flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
                        <div class="flex flex-col mb-10 lg:items-start items-center">
                            {/* <div class="w-12 h-12 inline-flex items-center justify-center  ml-auto mr-auto rounded-full bg-indigo-100 text-indigo-500 mb-5">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
                                    <circle cx="6" cy="6" r="3"></circle>
                                    <circle cx="6" cy="18" r="3"></circle>
                                    <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                                </svg>
                            </div> */}
                            <div class="flex-grow">
                                <h2 class="text-gray-900 text-lg title-font font-medium mb-3">Splash(De Stress)Wellness And Spa <br />+91 6364 138 018</h2>
                                <p class="leading-relaxed text-base">Strive not to be a success, but rather to be of value</p>
                                <span class="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
                                    <a href="https://www.facebook.com/Splash-Wellness-and-Spa-105507465320307" class="text-gray-500">
                                        <svg fill="black" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                        </svg>
                                    </a>
                                    <a class="ml-3 text-gray-500">
                                        <svg fill="white" stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                                        </svg>
                                    </a>

                                </span>
                            </div>
                        </div>
                        <div class="bg-white" >
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.824933508038!2d77.64951821482147!3d12.918970890890419!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae14822713ef59%3A0xe084198bd9272d28!2sSplash(De%20Stress)Wellness%20And%20Spa!5e0!3m2!1sen!2sin!4v1639673921817!5m2!1sen!2sin" width="95%" height="90%" allowfullscreen="" loading="lazy"></iframe>
                        </div>
                    </div>


                    <div class="lg:w-1/2 w-full  lg:mb-0 part2 rounded-lg overflow-hidden">


                        <div>
                            <video style={{ width: "100%" }} autoPlay muted loop>
                                <source src={vid3} />
                            </video>
                        </div>
                    </div>

                </div>


                <br />
                <hr style={{ position: 'relative', top: '1rem' }} />


                <div class="container px-5 py-5 mx-auto flex flex-wrap">
                    <div class="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">

                        <div>
                            <video style={{ width: "100%" }} autoPlay muted loop>
                                <source src={vid4} />
                            </video>
                        </div>
                    </div>
                    <div class="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
                        <div class="flex flex-col mb-10 lg:items-start items-center">
                            {/* <div class="w-12 h-12 inline-flex items-center justify-center  ml-auto mr-auto rounded-full bg-indigo-100 text-indigo-500 mb-5">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
                                    <circle cx="6" cy="6" r="3"></circle>
                                    <circle cx="6" cy="18" r="3"></circle>
                                    <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                                </svg>
                            </div> */}
                            <div class="flex-grow">
                                <h2 class="text-gray-900 text-lg title-font font-medium mb-3">R&K Spa<br />+91 98860 44980</h2>
                                <p class="leading-relaxed text-base">Happiness is a by-product of an effort to make someone else happy</p>
                              
                                <span class="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
                                    <a class="text-gray-500">
                                        <svg href="https://www.facebook.com/RK-Salon-Spa-103328412213118" fill="black" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                        </svg>
                                    </a>
                                    <a class="ml-3 text-gray-500">
                                        <svg fill="white" stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                                        </svg>
                                    </a>

                                </span>
                            </div>
                        </div>
                        <div class="bg-white">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d295966.28552997956!2d77.45266574954927!3d12.926804046058955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae152235f6541d%3A0xb9a29eb262a1f729!2sR%26K%20SALON%20AND%20SPA!5e0!3m2!1sen!2sin!4v1639915308020!5m2!1sen!2sin" width="95%" height="90%" allowfullscreen="" loading="lazy"></iframe>
                        </div>
                    </div>
                </div>





            </section>
        </div>
    )
}

export default Home
