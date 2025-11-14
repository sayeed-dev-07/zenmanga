import React, { useContext } from 'react';
import DataContext from './DataContext';
import CartCard from './CartCard';
import { Link } from 'react-router';

const ShopCart = () => {
    const {cartItem, subTotal,  total, discount, shipping} = useContext(DataContext)
    return (
        <div className='w-full px-[2%] md:px-[5%] lg:px-[10%] my-[2%] flex-wrap mx-auto'>
            
            {
                cartItem.length > 0 ? 
                <div>
                    <div className='flex gap-y-2 flex-col w-full'>
                {cartItem.map(item => <CartCard card={item} key={item.id}/>)}
                </div>
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
                        <button className='px-4 cursor-pointer py-2 bg-[#eb5e28] rounded-md'>checkout</button>
                    </div>
                </div>
                </div>
            </div> :
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