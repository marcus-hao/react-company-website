import React from 'react';
import img from '../assets/images/graduation.svg';

const AboutUs = () => {
    return (
        <div className="m-auto max-w-6xl p-2 md:p-12 h-5/6" id='about'>
            <div className="flex items-center justify-center h-screen">
                <div className="flex flex-col lg:flex-row py-8 justify-between lg:text-left">
                    <div className="lg:flex lg:items-center lg:justify-center lg:w-1/2">
                        <img src={img} alt="Graduation" className="rounded-t w-64 h-auto" />
                    </div>
                    <div className="lg:w-1/2 lg:pl-8">
                        <h2 className="text-2xl font-bold text-blue-800 mb-4">We understand the struggles of student life.</h2>
                        <div>
                            <p className="my-3 text-xl text-gray-600 font-semibold">Our approach is simple yet effective—inspired by the 'Malaysia Boleh' spirit, we've crafted services to help students stop procrastinating.</p>
                            <p className="my-3 text-xl text-gray-600 font-semibold">Let's turn your academic journey into a success story together.🔥</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
