import React, { useContext, useRef } from 'react';
import DataContext from './DataContext';
import CarousalCards from './CarousalCards';
import { Link } from 'react-router';
import { AnimatePresence, motion } from 'motion/react';

const Favourites = () => {
    const parent = {
        hidden: { opacity: 1, x: 0 },
        show: {
            opacity: 1,
            x: 0,
            transition: { staggerChildren: 0.2 },
        }
    };

    const child = {
        hidden: { opacity: 1, x: 0, filter: 'blur(0px)' },
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

    const { faviourite } = useContext(DataContext);

    // ⭐ Animate ONLY ONCE using useRef flag
    const hasAnimated = useRef(false);

    return (
        <AnimatePresence mode="wait">
            {faviourite.length > 0 ? (
                <motion.div
                    key="fav-list"
                    exit={{ opacity: 0, y: -20 }}
                    onAnimationComplete={() => (hasAnimated.current = true)}
                    className='w-full px-[2%] md:px-[5%] lg:px-[10%] my-[2%] mx-auto'
                >
                    <p className='text-3xl font-akira text-[#eb5e28] mb-3'>
                        Favourite Mangas
                    </p>

                    <motion.div
                        variants={parent}
                        initial={!hasAnimated.current ? 'hidden' : false}
                        animate={!hasAnimated.current ? 'show' : false}
                        className='grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 2xl:grid-cols-4 md:gap-x-6 gap-y-6'
                    >
                        {faviourite.map(item => (
                            <motion.div key={item.id} variants={child}>
                                <CarousalCards card={item} />
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            ) : (
                <motion.div
                    key="empty"
                    variants={parent}
                    initial="hidden"
                    animate="show"
                    exit={{ opacity: 0 }}
                    className='min-h-[50vh] flex items-center justify-center font-fira flex-col gap-y-3'
                >
                    <motion.p variants={child} className='text-2xl'>
                        Nothing Added
                    </motion.p>

                    <motion.p variants={child}>
                        <Link className='underline text-lg' to='/all-manga'>
                            Browse Mangas
                        </Link>
                    </motion.p>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Favourites;
