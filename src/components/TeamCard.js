import React from 'react'

const TeamCard = ({ members }) => {
    return (
        <div className='bg-white drop-shadow-md overflow-hidden rounded-2xl mr-2 my-4' >
            <img src={members.linkImg}
                className="h-40 w-full object-cover"
            />
            <div className='p-5 border border-b'>
                <h1 className='text-bold text-3xl'>{members.title}</h1>
                <p>{members.position}</p>
            </div>
            <p className='p-5'>{members.quote}</p>

            <div className='absolute top-0 bg-white m-3 px-2 py-[2.5px] rounded font-bold'>
                {members.tag}
            </div>
        </div>
    );
};

export default TeamCard;