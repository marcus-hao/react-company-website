import React from 'react';
import AboutUs from '../components/AboutUs';
import useDocumentTitle from '../hooks/useDocumentTitle';

const Home = () => {
    useDocumentTitle("HabisLiao | From Delay to A's: HabisLiao Way!");
    return (
        <div>
            <AboutUs />
        </div>
    );
}

export default Home;