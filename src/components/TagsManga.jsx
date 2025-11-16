import React, { useContext } from 'react';
import DataContext from './DataContext';
import CarousalCards from './CarousalCards';
import { motion } from 'motion/react';


const TagsManga = () => {

    const parent = {
            hidden: {
                opacity: 0,
                y: -40
            },
            show: {
                opacity: 1,
                y: 0,
                transition: {
                    staggerChildren: 0.2,
                }
            }
        }
        const child = {
            hidden: { opacity: 0, y: 100 ,filter: 'blur(5px)'},
            show: {
                opacity: 1,
                y: 0,
                filter: 'blur(0px)',
                transition: {
                    type: "spring",
                    stiffness: 120,
                    damping: 15
                }
            }
        };

    const { tags, data } = useContext(DataContext)
    const filterArr = data.filter(item => item.genres.includes(tags))

    return (
        <div className='w-full px-[2%] md:px-[5%] lg:px-[10%] my-[2%]  mx-auto '>
            <p className='font-akira text-[#eb5e28] mb-6 text-3xl'>{tags} Mangas :</p>
            <motion.div key={filterArr}  variants={parent} initial='hidden' animate='show' className='grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 2xl:grid-cols-4 md:gap-x-6 gap-y-6'>
                {filterArr.map(item => <motion.div variants={child} key={item.id}>
                    <CarousalCards  card={item} />
                </motion.div>)}
            </motion.div>
        </div>
    );
};

export default TagsManga;