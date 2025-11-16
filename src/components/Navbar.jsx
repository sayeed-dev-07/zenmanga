import { Heart, ShoppingCartIcon } from 'lucide-react';
import React, { useContext } from 'react';
import { Link } from 'react-router';
import DataContext from './DataContext';
import Marquee from "react-fast-marquee";
import { motion } from 'motion/react';
import { div, path } from 'motion/react-client';
import Navlink from './Navlink';
import { delay } from 'motion';

const Navbar = () => {
    const { faviourite, cartItem } = useContext(DataContext)
    const parent = {
        hidden: {
            opacity: 0,
            x: -40
        },
        show: {
            opacity: 1,
            x: 0,
            transition: {
                delay:0.3,
                staggerChildren: 0.3,
            }
        }
    }
    const child = {
        hidden: { opacity: 0, x: -80 ,filter: 'blur(5px)'},
        show: {
            opacity: 1,
            x: 0,
            filter: 'blur(0px)',
            transition: {
                type: "spring",
                stiffness: 120,
                damping: 15
            }
        }
    };


    const navList = [
        {
            path: '/',
            name: 'Home'
        },
        {
            path: 'all-manga',
            name: 'All Mangas'
        },
        {
            path: 'best-sell',
            name: 'Best Sell'
        },
        {
            path: 'new-arrival',
            name: 'New Arrival'
        }
    ]

    return (
        <div className=' w-full pb-3'>
            <div className='bg-[#302f2b] px-[2%] md:px-[5%] lg:px-[10%] flex items-center py-5 justify-between w-full text-[#efece3]'>
                <motion.div initial={{ x: -60, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{
                    duration: 0.3, delay: 0.2, type: 'spring', stiffness: 200,
                    damping: 15,
                    mass: 1,
                }}>
                    <Link to='/' className='text-2xl sm:text-4xl font-akira  '>ZENMANGA</Link>
                </motion.div>
                <motion.div initial={{ x: 60, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{
                    duration: 0.3, delay: 0.4, type: 'spring', stiffness: 200,
                    damping: 15,
                    mass: 1,
                }} className='flex items-center justify-between gap-3'>


                    <Link to='faviourite' className='relative cursor-pointer text-[#efece3] hover:text-[crimson]'>
                        <Heart />
                        {faviourite.length > 0 ? <span className='absolute text-xs -top-2 py-0.5 px-2 bg-[#161414eb] rounded-full -right-2'>{faviourite.length}</span> : ''}
                    </Link>


                    <Link to='cart' className='relative cursor-pointer text-[#efece3] hover:text-[crimson]'>
                        <ShoppingCartIcon />
                        {cartItem.length > 0 ? <span className='absolute text-xs -top-2 py-0.5 px-2 bg-[#161414e9] rounded-full -right-2'>{cartItem.length}</span> : ''}
                    </Link>
                </motion.div>
            </div>
            <div className='text-xl shadow-xl sm:text-3xl bg-[#e9c46a] text-black py-3 font-akira'>
                <Marquee speed={50} delay={0.3} gradient={false}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Enjoy free shipping on orders over $25 — plus get 30% off when you buy  3 different products together !</Marquee>
            </div>
            <motion.div variants={parent} initial='hidden' animate='show' className='flex items-center justify-between text-lg md:text-3xl mx-[2%] text-[#efece3] md:mx-[5%] lg:mx-[10%] py-6 font-akira  border-b-2 flex-wrap gap-y-3 gap-x-2'>
                {
                    navList.map((item, index) => <motion.div variants={child} key={index}>
                        <Navlink name={item.name} path={item.path} />
                    </motion.div>)
                }

            </motion.div>
        </div>
    );
};

export default Navbar;