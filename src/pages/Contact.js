import React from 'react';
import useDocumentTitle from '../hooks/useDocumentTitle';

const Contact = () => {
    useDocumentTitle('Contact Us - HabisLiao');
    return (
        <div id="contact" className="flex justify-center items-center mt-8 w-full bg-white py-12 lg:py-24">
            <div className="container mx-auto my-8 px-4 lg:px-20">
                <form>
                    <div className="w-full bg-white p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl">
                        <div className="flex">
                            <h1 className='font-bold text-center lg:text-left text-blue-900 uppercase text-4xl'>Get in touch with us!</h1>
                        </div>
                        <div className='grid grid-cols-1 gap-5 md:grid-cols-2 mt-5'>
                            <div>
                                <input type="text" className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline" placeholder="First name" required />
                            </div>
                            <div>
                                <input type="text" className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline" placeholder="Last name" required />
                            </div>
                            <div>
                                <input type="email" className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline" placeholder="Email" required />
                            </div>
                            <div>
                                <input type="tel" className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline" placeholder="Phone number" required />
                            </div>
                        </div>
                        <div className='my-4'>
                            <textarea className='w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline' placeholder="Help! I can't finish my assignments 😭😭" required></textarea>
                        </div>
                        <div className='my-2 w-1/2 lg:w-2/4'>
                            <button type='submit' id='submitBtn' className="uppercase text-sm font-bold tracking-wide bg-gray-500 hover:bg-blue-900 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline">
                                Send Message
                            </button>
                        </div>
                    </div>
                </form>
                <div className='w-full lg:-mt-96 lg:w-2/6 px-8 py-6 ml-auto bg-blue-900 rounded-2xl'>
                    <div className='flex flex-col text-white'>
                        <div className='flex my-4 w-2/3 lg:w-3/4'>
                            <div className='flex flex-col'>
                                <i className='fas fa-map-marker-alt pt-2 pr-2' />
                            </div>
                            <div className='flex flex-col items-start'>
                                <h2 className='text-2xl'>Address</h2>
                                <p className='text-gray-200'>523 Habislah HQ, No Road</p>
                                <p className='text-gray-200'>USM, Penang</p>
                            </div>
                        </div>

                        <div className='flex my-4 w-2/3 lg:w-3/4'>
                            <div className='flex flex-col'>
                                <i className='fas fa-phone-alt pt-2 pr-2' />
                            </div>

                            <div className='flex flex-col items-start'>
                                <h2 className='text-2xl'>Call Us</h2>
                                <p className='text-gray-200'>Tel: +604-653 3647</p>

                            </div>
                        </div>

                        <div className='flex my-4 w-2/3 lg:w-3/4'>
                            <div className='flex flex-col'>
                                <i className='fas fa-envelope pt-2 pr-2' />
                            </div>

                            <div className='flex flex-col items-start'>
                                <h2 className='text-2xl'>Email</h2>
                                <p className='text-gray-200'>contact@habisliao.gg</p>
                            </div>
                        </div>

                        <div className='flex my-4 w-2/3 lg:w-3/4'>
                            <div className='flex flex-col mr-4'>
                                <a href="https://www.facebook.com/PPSKOM/" target="_blank" rel="noopener noreferrer">
                                    <i className='fab fa-facebook-f pt-2 pr-2 fa-2x' />
                                </a>
                            </div>

                            <div className='flex flex-col mr-4'>
                                <a href='https://www.linkedin.com/school/universiti-sains-malaysia-official/' target='_blank' rel='noopener noreferrer'>
                                    <i className='fab fa-linkedin-in pt-2 pr-2 fa-2x' />
                                </a>
                            </div>

                        </div>

                    </div>

                </div>
            </div>


        </div>
    );
}

export default Contact;