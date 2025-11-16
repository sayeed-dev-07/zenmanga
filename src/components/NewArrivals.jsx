import React, { useContext, useState } from 'react';
import DataContext from './DataContext';
import CarousalCards from './CarousalCards';
import Pagination from './Pagination';
import { motion } from 'motion/react';

const NewArrivals = () => {

    const parent = {
        hidden: {
            opacity: 0,
            x: 100
        },
        show: {
            opacity: 1,
            x: 0,
            transition: {
                staggerChildren: 0.2,
            }
        }
    }
    const child = {
        hidden: { opacity: 0, x: 100, filter: 'blur(5px)' },
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

    const { data } = useContext(DataContext)
    const filterArr = data.filter(item => item.additionalInfo.newRelease)


    const [curPage, setCurPage] = useState(1)
    const [postPerPage, setPostPerPage] = useState(8)
    const totalPostLen = filterArr.length;

    const lastPostIndex = curPage * postPerPage;
    const firstPostIndex = lastPostIndex - postPerPage
    const currData = filterArr.slice(firstPostIndex, lastPostIndex)

    return (
        <div className='w-full px-[2%] md:px-[5%] lg:px-[10%] my-[2%] flex-wrap mx-auto '>
            <p className='text-3xl font-akira text-[#ee6c4d] mb-3'>New Arrivals</p>
            <motion.div key={curPage} variants={parent} initial='hidden' animate='show' className='grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 2xl:grid-cols-4 md:gap-x-6 gap-y-6'>
                {currData.map(item => <motion.div variants={child} key={item.id}>
                    <CarousalCards card={item} />
                </motion.div>)}
            </motion.div>
            <div className='flex items-center justify-center mt-12 gap-x-4'>
                <Pagination postPerPage={postPerPage} totalPostLen={totalPostLen} setCurPage={setCurPage} curPage={curPage} />
            </div>
        </div>
    );
};

export default NewArrivals;