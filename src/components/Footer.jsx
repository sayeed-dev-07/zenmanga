import React from 'react';
import FooterTop from './FooterTop';
import { Facebook, Linkedin, LinkedinIcon, TwitterIcon, YoutubeIcon } from 'lucide-react';
import FooterBottom from './FooterBottom';

const Footer = () => {
    return (
        <div className='w-full'>
            <FooterTop />
            <div className='bg-[#302f2b] text-[#efece3] px-[2%] md:px-[5%] lg:px-[10%]'>
                <div className='grid font-fira uppercase gap-y-6 text-center sm:text-start sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 py-12 text-lg'>
                    <div>
                        <h3 className='text-2xl font-semibold font-akira'>Company</h3>
                        <p>our story</p>
                        <p>shop locations</p>
                        <p>CAREER OPPORTUNITIES</p>
                    </div>
                    <div>
                        <h3 className='text-2xl font-semibold font-akira'>BRAND</h3>
                        <p>REVIEWS</p>
                        <p>BLOG</p>
                        <p>EVENTS</p>
                        <p>NEWSLETTERS</p>
                    </div>
                    <div>
                        <h3 className='text-2xl font-semibold font-akira'>HELP</h3>
                        <p>SHOPPING & RETURNS</p>
                        <p>FAQ</p>
                        <p>CONTACT US</p>
                    </div>
                    <div>
                        <h3 className='text-2xl font-semibold font-akira'>HELP</h3>
                        <p>SHOPPING & RETURNS</p>
                        <p>FAQ</p>
                        <p>CONTACT US</p>
                    </div>
                    <div>
                        <h3 className='text-2xl font-semibold font-akira'>Follow us</h3>
                        <div className='flex items-center justify-center sm:justify-start gap-x-3'>
                            <a target='_blank' className='text-[#efece3] hover:text-[crimson]' href="https://www.facebook.com/sayeed.shorif.2025">
                                <Facebook />
                            </a>
                            <a target='_blank' className='text-[#efece3] hover:text-[crimson]' href="https://www.youtube.com/@SAYEED_SHORIF">
                                <YoutubeIcon/>
                            </a>
                            <a target='_blank' className='text-[#efece3] hover:text-[crimson]' href="https://x.com/ShorifSaye76262">
                                <TwitterIcon/>
                            </a>
                            <a target='_blank' className='text-[#efece3] hover:text-[crimson]' href="https://www.linkedin.com/in/sayeed-shorif-68080234b/">
                                <Linkedin/>
                            </a>
                        </div>
                    </div>
                </div>
                <FooterBottom/>
            </div>
            
        </div>
    );
};

export default Footer;