import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import { Outlet } from 'react-router';
import Footer from './Footer';
import DataContext from './DataContext';

const RootLayout = () => {
    const [faviourite, setFaviourite] = useState([]);
    const [loader, setLoader] = useState(false)
    const [cartItem, setCartItem] = useState([]);

    const [subTotal, setSubTotal] = useState(0);
    const [discount, setDiscount] = useState(0);
    const [shipping, setShipping] = useState(5);
    const [total, setTotal] = useState(0);

    const [data, setData] = useState([]);
    const [tags, setTags] = useState([]);


    useEffect(() => {
    const fetchData = async () => {
        setLoader(true);       
        try {
            const res = await fetch('/data.json');
            const resData = await res.json();
            setData(resData);
        } 
        finally {
            setLoader(false);      
        }
    };
    fetchData();
}, []);



    useEffect(() => {
    // 1. Subtotal
    const subtotal = cartItem.reduce((acc, item) => {
        return acc + item.price * item.quantity;
    }, 0);
    const discountAmount = cartItem.length >= 3 ? subtotal * 0.3 : 0;
    const shippingCost = subtotal > 25 ? 0 : 5;
    const finalTotal = subtotal - discountAmount + shippingCost;
    setSubTotal(subtotal);
    setDiscount(discountAmount);
    setShipping(shippingCost);
    setTotal(finalTotal);

}, [cartItem]);
    if (loader) {
    return (
        <div className="min-h-screen flex items-center justify-center bg-[#302f2b] text-white">
            <span className="loader"></span>
        </div>
    );
}


    return (
        <div className='flex items-center justify-between min-h-screen flex-col bg-[#302f2b] text-white font-fira'>
            <DataContext
                value={{
                    faviourite, setFaviourite,
                    cartItem, setCartItem,
                    data, tags, setTags,
                    subTotal, setSubTotal,
                    total, setTotal,
                    discount, setDiscount,
                    shipping, setShipping
                }}
            >
                <Navbar />
                <Outlet />
                <Footer />
            </DataContext>
        </div>
    );
};

export default RootLayout;
