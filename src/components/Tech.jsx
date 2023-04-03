import React from 'react';
import { SectionWrapper } from '../hoc';
import { technologies } from '../constants';
import dynamic from 'next/dynamic';
const Ball = dynamic(() => import('@/components/canvas/Ball'), { ssr: false });

const Tech = () => {
    return (
        <div className="flex flex-row flex-wrap justify-center gap-10 h-screen">
            {technologies.map((technology) => (
                <div key={technology.name} className="h-28 w-28">
                    <Ball icon={technology.icon} />
                </div>
            ))}
        </div>
    );
};

export default SectionWrapper(Tech, 'tech');
