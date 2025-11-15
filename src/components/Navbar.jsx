import { Heart, ShoppingCartIcon } from 'lucide-react';
import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router';
import DataContext from './DataContext';
import Marquee from "react-fast-marquee";


const Navbar = () => {
    const { faviourite, cartItem } = useContext(DataContext)
    return (
        <div className=' w-full pb-3'>
            <div className='bg-[#302f2b] px-[2%] md:px-[5%] lg:px-[10%] flex items-center py-5 justify-between w-full text-[#efece3]'>
                <div>
                    <Link to='/' className='text-2xl sm:text-4xl font-akira  '>ZENMANGA</Link>
                </div>
                <div className='flex items-center justify-between gap-3'>

                    <Link to='faviourite' className='relative cursor-pointer text-[#efece3] hover:text-[crimson]'>
                        <Heart />
                        {faviourite.length > 0 ? <span className='absolute text-xs -top-2 py-0.5 px-2 bg-[#161414eb] rounded-full -right-2'>{faviourite.length}</span> : ''}
                    </Link>

                    <Link to='cart' className='relative cursor-pointer text-[#efece3] hover:text-[crimson]'>
                        <ShoppingCartIcon />
                        {cartItem.length > 0 ? <span className='absolute text-xs -top-2 py-0.5 px-2 bg-[#161414e9] rounded-full -right-2'>{cartItem.length}</span> : ''}
                    </Link>
                </div>
            </div>
            <div className='text-xl shadow-xl sm:text-3xl bg-[#e9c46a] text-black py-3 font-akira'>
                <Marquee speed={50} delay={0.3} gradient={false}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Enjoy free shipping on orders over $25 — plus get 30% off when you buy  3 different products together !</Marquee>
            </div>
            <div className='flex items-center justify-between text-lg md:text-3xl mx-[2%] text-[#efece3] md:mx-[5%] lg:mx-[10%] py-6 font-akira  border-b-2 flex-wrap gap-y-3 gap-x-2'>
                <NavLink className={({isActive})=>
                    isActive ? 'text-[#2a9d8f]' : 'text-[#efece3]'
                } to='/'>Home</NavLink>
                <NavLink className={({isActive})=>
                    isActive ? 'text-[#2a9d8f]' : 'text-[#efece3]'
                } to='all-manga'>All Mangas</NavLink>
                <NavLink className={({isActive})=>
                    isActive ? 'text-[#2a9d8f]' : 'text-[#efece3]'
                } to='best-sell'>Best Sell</NavLink>
                <NavLink className={({isActive})=>
                    isActive ? 'text-[#2a9d8f]' : 'text-[#efece3]'
                } to='new-arrival'>New Arrival</NavLink>

            </div>
        </div>
    );
};

export default Navbar;