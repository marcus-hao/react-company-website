import React from 'react';
import Vision from '../components/Vision';
import TeamCard from '../components/TeamCard';
import Slider from 'react-slick';
import { team } from '../data/teamMembers';
import useDocumentTitle from '../hooks/useDocumentTitle';
import useScrollToTop from '../hooks/useScrollToTop';

function About() {
    useDocumentTitle('About Us - HabisLiao');
    useScrollToTop();
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: false,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: false,
                    dots: true
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: false,
                    dots: true
                }
            }
        ]
    };
    return (
        <div>
            <Vision />
            <div className='w-full bg-[#e9f8f382] py-3'>
                <div className='md:max-w-[1480px] m-auto  max-w-[600px]'>
                    <h1 className='font-bold text-center text-2xl font-bold'>Meet the Team!</h1>
                    <Slider {...settings}>
                        {team.map(members => <TeamCard members={members} />)}
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default About;