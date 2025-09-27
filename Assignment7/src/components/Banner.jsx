import React from 'react';
import one from '../assets/vector1.png'
import two from '../assets/vector2.png'
const Banner = ({progresscount,countresolved}) => {
    return (
        <div className=" text-white text-[80px] mt-4 flex  justify-center  items-center gap-5">
            <div className='2xl:pt-12 pt-4 2xl:w-[708px] 2xl:h-[250px] bg-gradient-to-br from-[#632EE3] to-[#9F62F2] items-center justify-center w-[200px] ml-2 h-[190px] shadow-2xl border-1  rounded-lg'><h1 className='text-4xl text-center mt-3'>In-progess</h1><h1 className='text-center'>{progresscount}</h1></div>
            <div className='2xl:pt-12 pt-4 bg-gradient-to-r from-[#54CF67] to-[#00827A] w-[200px] m mr-2 h-[190px]  2xl:w-[708px] 2xl:h-[250px] items-center justify-center  shadow-2xl border-1  rounded-lg'><h1 className='text-4xl text-center mt-3'>Resolved</h1><h1 className='text-center'>{countresolved}</h1></div>
        </div>
    );
};

export default Banner;