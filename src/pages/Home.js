import React from 'react';
import Hero from '../components/Hero';
import useDocumentTitle from '../hooks/useDocumentTitle';
import Review from '../components/Review';
import Service from '../components/Service';
import Video from '../components/Video';

const Home = () => {
    useDocumentTitle("HabisLiao | From Delay to A's: HabisLiao Way!");
    return (
        <div>
            <Hero />
            <Video videoId={'FWTNMzK9vG4'}/>
            <Service />
            <Review />
        </div>
    );
}

export default Home;