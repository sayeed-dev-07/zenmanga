import React, { useContext } from 'react';
import DataContext from './DataContext';
import CartCard from './CartCard';
import { Link } from 'react-router';
import { toast } from "react-toastify";
import { AnimatePresence, stagger } from 'motion/react';
import { motion } from 'motion/react';

const ShopCart = () => {

    const { cartItem, subTotal, total, discount, shipping, setCartItem } = useContext(DataContext)

    function handleCheckout() {
        toast('You would have Buy all these if it were a real store 🤦‍♂️')
        setCartItem([])
    }

    const containerVariants = {
        hidden: {
            opacity: 0,
            y: -40
        },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2,
            }
        }
    };

    const itemVariants = {
        hidden: {
            opacity: 0,
            x: -100,
            filter: 'blur(5px)'
        },
        show: {
            opacity: 1,
            x: 0,
            filter: 'blur(0px)',

        },
        exit: {
            x: 200,
            opacity: 0,
            filter: 'blur(5px)',
            transition: {
                duration: 0.3,
                ease: "easeInOut"
            }
        }
    };

    return (
        <div className='w-full px-[2%] md:px-[5%] lg:px-[10%] my-[2%] flex-wrap mx-auto overflow-hidden'>

            {
                cartItem.length > 0 ?
                    <motion.div>
                        <motion.div
                            variants={containerVariants}
                            initial='hidden'
                            animate='show'
                            className='flex gap-y-2 flex-col w-full'
                        >
                            <AnimatePresence mode="popLayout">
                                {cartItem.map(item => (
                                    <motion.div
                                        layout
                                        variants={itemVariants}
                                        key={item.id}
                                        transition={{
                                            layout: {
                                                type: "spring",
                                                stiffness: 300,
                                                damping: 30
                                            }
                                        }}
                                    >
                                        <CartCard card={item} />
                                    </motion.div>
                                ))}
                            </AnimatePresence>
                        </motion.div>
                        <div className='flex items-center md:justify-end justify-center my-6 md:text-end text-center'>
                            <div className='w-full md:w-[70%] lg:w-[30vw] uppercase text-lg md:text-2xl flex flex-col gap-y-2'>
                                <div>Subtotal : $<span>{subTotal.toFixed(2)}</span></div>
                                <div>Discount(30%) : $<span>{discount.toFixed(2)}</span></div>
                                <div>Shipping Fee : $<span>{shipping}</span></div>
                                <div className='w-full h-[0.03rem] bg-[#d1cdcd]'>

                                </div>
                                <div>
                                    <p>total : $<span>{total.toFixed(2)}</span>
                                    </p>
                                </div>
                                <div>
                                    <button onClick={handleCheckout} className='px-4 cursor-pointer py-2 bg-[#eb5e28] rounded-md'>checkout</button>
                                </div>
                            </div>
                        </div>
                    </motion.div> :
                    <div className='min-h-[60vh] flex items-center justify-center flex-col gap-y-3 text-2xl'>
                        <p className='text-2xl'>
                            Nothing Added To cart
                        </p>
                        <Link className='text-lg underline' to='/all-manga'>Browse Manga</Link>
                    </div>
            }

        </div>
    );
};

export default ShopCart;