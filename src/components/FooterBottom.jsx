import { Github, GithubIcon } from 'lucide-react';
import React from 'react';
import { BsGithub } from 'react-icons/bs';

const FooterBottom = () => {
    return (
        <div className='font-fira mb-4'>
            <div className='flex text-[#fffaf4] items-center justify-between w-full lg:max-w-[70vw] xl:max-w-[50vw] flex-wrap gap-y-3 mx-auto'>
                <div className='flex items-center gap-x-2'>
                    <p>© 2025</p>
                    <p className='text-2xl'>ZENMANGA</p>
                </div>
                <p className='underline hover:text-[crimson] cursor-pointer'>Privacy</p>
                <p className='underline hover:text-[crimson] cursor-pointer'>Accessibility</p>
                <p className='underline hover:text-[crimson] cursor-pointer'>Terms and Conditions</p>
                <p className='underline hover:text-[crimson] cursor-pointer'>Refund Policy</p>
            </div>
            <div className='flex items-center justify-center gap-x-6 my-5'>
                <p>Copyright © 2025 Sayeed Shorif</p>
                <a className='' target='_blank' href="https://github.com/sayeed-dev-07">
                    <BsGithub className='hover:rotate-360 hover:scale-110 transition-all duration-300' size={25}/>
                </a>
            </div>
        </div>
    );
};

export default FooterBottom;