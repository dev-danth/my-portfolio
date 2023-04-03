import React from 'react';
import { SectionWrapper } from '../hoc';
import { technologies } from '../constants';
import dynamic from 'next/dynamic';
const Sun = dynamic(() => import('@/components/canvas/Sun'), { ssr: false });

const Tech1 = () => {
    return (
        <div className="flex flex-row flex-wrap justify-center gap-10 h-screen">
            <Sun />
        </div>
    );
};

export default SectionWrapper(Tech1, 'tech1');
