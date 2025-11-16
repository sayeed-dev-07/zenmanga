import React, { useContext } from 'react';
import { Link, useParams } from 'react-router';
import DataContext from './DataContext';
import TagsButton from './TagsButton';
import { FaLanguage, FaRegFile } from 'react-icons/fa';
import { PiBuildingOffice } from 'react-icons/pi';
import { RiBarcodeLine } from 'react-icons/ri';
import { toast } from "react-toastify";

const MangaDetails = () => {
    const { id } = useParams()
    const { data, cartItem, setCartItem, setFaviourite, faviourite } = useContext(DataContext)
    const cardData = data.find(item => item.id == id);
    const clicked2 = cartItem.some(item => item.id === cardData.id);
    const clicked = faviourite.some(item => item.id === cardData.id);
    const handleClickCart = () => {
        let exits = clicked2;
        if (!exits) {
             toast(`${cardData.title} added to cart`)
            setCartItem(prev => [...prev, { ...cardData, quantity: 1 }])
        }else{
            toast.error(`${cardData.title} is already added to the cart`)
        }
    };
    function handleClickFav() {
        const exists = clicked;

        if (exists) {
            setFaviourite(prev => prev.filter(item => item.id !== cardData.id));
        } else {
            setFaviourite(prev => [...prev, cardData]);
        }
    }

    if (!cardData) {
        return (
            <div className="min-h-screen font-fira flex items-center justify-center text-white">
                <span class="loader"></span>
            </div>
        );
    }
    return (
        <div className='font-fira px-[2%] md:px-[5%] lg:px-[10%] my-6'>
            <div className='my-3'>
                <Link className='px-4 py-2 bg-[#c24425] font-semibold font-fira rounded-md text-[#eaeaea]' to='/all-manga'>Back</Link>
            </div>
            <div className='gap-x-12 flex flex-col md:flex-row gap-y-3'>
                <div className='min-w-[300px] lg:min-w-[350px]'>
                <img className='w-full h-auto' src={cardData.image} alt={cardData.title} />
                </div>
            <div className='flex flex-col gap-y-4'>
                <div>
                    <p className='text-4xl
                    font-semibold'>{cardData.title}</p>
                    <p className='text-2xl'>Volume {cardData.vol}</p>
                </div>
                <div className='flex items-center justify-start gap-x-3 flex-wrap gap-y-2'>
                    {cardData.genres.map((item, index) => <TagsButton key={index} element={item} />)}
                </div>
                <div className='flex flex-col gap-y-6 text-xl flex-1'>
                    <p>{cardData.context.main}</p>
                    <p>
                        {cardData.context.sub}
                    </p>
                </div>
                <div className=''>
                    <div className='flex items-center gap-x-6'> 
                        <p className='text-3xl font-akira'>${cardData.price}</p>
                    <div>
                        <button onClick={handleClickCart} className={`px-4 py-2 cursor-pointer ${clicked2 ? 'bg-amber-500' : ''} bg-[#e9c46a] text-black rounded-lg`}>{`${clicked2 ? 'Added to Cart' : 'Add to Cart'}`}</button>
                    </div>
                    <div onClick={handleClickFav} className="relative group w-6 h-6 cursor-pointer">

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
                    </div>
                    </div>
                    <div className='line w-full h-[0.09rem] bg-slate-300 my-5'></div>
                    <div className='flex my-6 items-center justify-start gap-x-6 text-lg font-medium flex-wrap gap-y-3'>
                        <div className='flex flex-col items-center justify-center gap-y-2'>
                            <p>Print Length</p>
                            <FaRegFile size={26}/>
                            <p>{cardData.pageLength}</p>
                        </div>
                        <div className='flex flex-col items-center justify-center gap-y-2'>
                            <p>Language</p>
                            <FaLanguage  size={26} />
                            <p>English</p>
                        </div>
                        <div className='flex flex-col items-center justify-center gap-y-2'>
                            <p>Publisher</p>
                            <PiBuildingOffice  size={26} />
                            <p>{cardData.publisher}</p>
                        </div>
                        <div className='flex flex-col items-center justify-center gap-y-2'>
                            <p>VAR-CODE</p>
                            <RiBarcodeLine  size={26} />
                            <p>{cardData.isbn}</p>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            <div className='my-3'>
                <p className='text-3xl font-semibold text-[#2a9d8f]'>Author Introduction</p>
                <p className='text-xl font-semibold mb-3 text-[#10a4f4]'>{cardData.author.name}</p>
                <p className='text-lg'>
                    {cardData.author.bio}
                </p>
            </div>
        </div>
    );
};

export default MangaDetails;