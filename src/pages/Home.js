import React from 'react';
import Hero from '../components/Hero';
import useDocumentTitle from '../hooks/useDocumentTitle';
import Review from '../components/Review';
import Service from '../components/Service';
import Video from '../components/Video';
import useScrollToTop from '../hooks/useScrollToTop';

const Home = () => {
    useDocumentTitle("HabisLiao | From Delay to A's: HabisLiao Way!");
    useScrollToTop();
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