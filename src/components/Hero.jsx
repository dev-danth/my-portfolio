import React from 'react';
//import Computers from './canvas/Computers';
import dynamic from 'next/dynamic';
const Computers = dynamic(() => import('@/components/canvas/Computers'));

const Hero = () => {
    return (
        <section className="w-full h-screen relative mx-auto">
            <div className="flex flex-row items-start gap-5 paddingX absolute top-[120px] max-w-7xl mx-auto">
                <div className="flex flex-col justify-center items-center mt-5">
                    <div className="w-5 h-5 rounded-full bg-[#915eff]"></div>
                    <div className="w-1 sm:h-80 h-40 violet-gradient"></div>
                </div>
                <div>
                    <h1 className="heroHeadText text-white">
                        Hi, I am <span className="text-[#915EFF]">Adrian</span>
                    </h1>
                    <p className="heroSubText mt-2 text-white-100">
                        I develop 3D visuals, user <br className="sm:block hidden" />
                        interfaces and web applications
                    </p>
                </div>
            </div>
            <>
                <Computers />
            </>
        </section>
    );
};

export default Hero;
