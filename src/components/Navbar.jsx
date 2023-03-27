import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { navLinks } from '../constants';
import { logo, menu, close } from '../assets';

const Navbar = () => {
    const [active, setActive] = useState('');
    const [toggle, setToggle] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            if (scrollTop > 100) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    return (
        <nav
            className={`py-5 paddingX top-0 fixed flex items-center w-full z-20 ${
                scrolled ? 'bg-primary' : 'bg-transparent'
            }`}
        >
            <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
                <Link
                    href="/"
                    className="flex items-center gap-2"
                    onClick={() => {
                        setActive('');
                        window.scrollTo(0, 0);
                    }}
                >
                    <Image src={logo} alt="logo" className="w-9 h-9 object-contain " />
                    <p className="text-[18px] font-bold">
                        Adrian &nbsp;
                        <span> | JavaScript Mastery</span>
                    </p>
                </Link>
                <ul className="list-none hidden sm:flex gap-10">
                    {navLinks.map((link) => (
                        <li
                            key={link.id}
                            className={`${
                                active === link.title ? 'text-white' : 'text-secondary'
                            } hover:text-white text-[18px] font-medium cursor-pointer`}
                            onClick={() => setActive(link.title)}
                        >
                            <a href={`#${link.id}`}>{link.title} </a>
                        </li>
                    ))}
                </ul>

                <div className="sm:hidden flex flex-1 justify-end items-center">
                    <Image
                        src={toggle ? close : menu}
                        alt="menu"
                        onClick={() => setToggle(!toggle)}
                        className="h-[20px] w-[20px] object-contain"
                    />
                    <div
                        className={`${
                            !toggle ? 'hidden' : 'flex'
                        } p-6 black-gradient absolute top-[50px] right-0 mx-4 my-2 min-w-[140px] z-20 rounded-xl`}
                    >
                        <ul className="list-none flex gap-4 flex-col justify-end items-start flex-1">
                            {navLinks.map((link) => (
                                <li
                                    key={link.id}
                                    className={`${
                                        active === link.title ? 'text-white' : 'text-secondary'
                                    } hover:text-white font-poppins text-[18px] font-medium cursor-pointer`}
                                    onClick={() => {
                                        setActive(link.title);
                                        setToggle(!toggle);
                                    }}
                                >
                                    <a href={`#${link.id}`}>{link.title} </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
