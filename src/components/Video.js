import React from 'react';

const Video = ({ videoId }) => {
    return (
        <div className="w-full md:w-2/3 lg:w-1/2 mx-auto mb-4">
            <div className="aspect-w-16 aspect-h-9">
                {/* Youtube uses iframe, and they need fixed w, h values */}
                <iframe
                    className='w-full h-full rounded-lg'
                    width="640" height="360"
                    src={`https://www.youtube.com/embed/${videoId}`}
                    frameBorder="0"
                    title="Embed company video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
        </div>
    );
};

export default Video;
