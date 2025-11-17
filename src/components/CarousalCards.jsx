import React, { useContext } from 'react';
import { toast } from "react-toastify";
import { Link } from 'react-router';
import DataContext from './DataContext';
import TagsButton from './TagsButton';
import { BsCart } from 'react-icons/bs';
import { ShoppingCart } from 'lucide-react';
import { motion } from 'motion/react';


const CarousalCards = ({ card }) => {
    const { setFaviourite, faviourite, cartItem, setCartItem } = useContext(DataContext);

    // derive clicked from global favourites
    const clicked = faviourite.some(item => item.id === card.id);
    const clicked2 = cartItem.some(item => item.id === card.id);

    function handleClickFav() {
        const exists = clicked;

        if (exists) {
            setFaviourite(prev => prev.filter(item => item.id !== card.id));
        } else {
            setFaviourite(prev => [...prev, card]);
        }
    }

    const handleClickCart = () => {
        let exits = clicked2;
        if (!exits) {
            toast(`${card.title} added to cart`)
            setCartItem(prev => [...prev, { ...card, quantity: 1 }])
        } else {
            toast.error(`${card.title} is already added to the cart`)
        }
    };

    const handleInfoClick = () => {
        // Scroll to top before navigation for smooth layoutId animation
        window.scrollTo({ top: 0, behavior: 'instant' });
    };



    return (
        <div className="p-2 sm:p-6 border-2 md:border-4 mx-3 min-w-[250px] sm:min-w-[300px] border-white rounded-md flex flex-col items-center justify-between">

            <div className="h-[350px] w-full">
                <motion.img 
                    layoutId={card?.id ? `${card.id}-img` : undefined}
                    className="h-full w-full" 
                    src={card.image} 
                    alt={card.title} 
                />
            </div>

            <div className="text-center w-full flex flex-col gap-y-2 font-fira py-3">

                <motion.p layoutId={`${card.id}-title`} className="text-2xl font-semibold">{card.title}</motion.p>
                <motion.p layoutId={`${card.id}-volume`}>Volume {card.vol}</motion.p>
                <motion.p layoutId={`${card.id}-price`} className="font-semibold text-2xl">$ {card.price}</motion.p>
                <motion.div layoutId={`${card.id}-tags`} className='flex flex-wrap gap-3'>
                    {
                        card.genres.map((item, index) => <TagsButton key={index} element={item} />)
                    }
                </motion.div>
                <div className="flex items-center justify-between gap-3 mt-3">
                    <motion.button layoutId={`${card.id}-button`}
                        onClick={handleClickCart}
                        className={`px-4 py-2 cursor-pointer ${clicked2 ? 'bg-[#bc4749] text-white' : 'bg-[#e9c46a]'} text-[#413f3f] rounded-lg flex items-center gap-2`}
                    >
                        {!clicked2 ? (
                            <>
                                <ShoppingCart size={20} /> Add to Cart
                            </>
                        ) : (
                            "Added to Cart"
                        )}
                    </motion.button>


                    <motion.div layoutId={`${card.id}-svg`} onClick={handleClickFav} className="relative group w-6 h-6 cursor-pointer">

                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            stroke="currentColor"
                            className={`absolute inset-0 w-6 h-6 text-white ${clicked ? "opacity-0" : "opacity-100"}`}
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                        </svg>


                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="crimson"
                            viewBox="0 0 24 24"
                            className={`absolute inset-0 w-6 h-6 transition-all duration-200 ${clicked ? "opacity-100" : "opacity-0"}`}
                        >
                            <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                        </svg>
                    </motion.div>
                </div>

                <Link 
                    className="py-2 uppercase text-base font-semibold mt-1 bg-[#e63946] text-white rounded-md tracking-[0.1rem]" 
                    to={`/all-manga/${card.id}`}
                    state={{ fromCard: true }}
                    onClick={handleInfoClick}
                >
                    Info
                </Link>
            </div>
        </div>
    );
};

export default CarousalCards;