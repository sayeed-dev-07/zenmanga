import React from 'react';

const FooterTop = () => {
    return (
        <div className='flex items-center justify-between px-[2%] md:px-[5%] lg:px-[10%] py-6 text-[#071522] bg-[#e9c46a] gap-x-6 w-full lg:flex-row flex-col gap-y-6'>
            <div className='flex-1'>
                <p className='text-2xl sm:text-4xl font-akira'>Be a Part of the <span className='text-[#fbfbfb] text-shadow-black text-shadow-md'>ZENMANGA</span> Community</p>
                <p className='text-xl sm:text-2xl font-fira'>Transmit your email address to unlock exclusive manga deals, special event updates, and the latest blog posts — straight to your inbox!</p>
            </div>
            <div className='w-full md:w-[30%] flex items-center justify-center gap-2 flex-wrap sm:flex-nowrap'>
                <input className='p-2 flex-3/4 pr-9 outline-none rounded-sm border-2 border-black' placeholder='Enter your email here' type="text" />
                <div className='py-2 rounded-sm px-5 flex-1/4 bg-black text-white cursor-pointer text-xl text-center uppercase'>
                    subscribe
                </div>
            </div>
        </div>
    );
};

export default FooterTop;