import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import { Outlet } from 'react-router';
import Footer from './Footer';
import DataContext from './DataContext';

const RootLayout = () => {
    const [faviourite, setFaviourite] = useState([]);
    const [cartItem, setCartItem] = useState([]);

    const [subTotal, setSubTotal] = useState(0);
    const [discount, setDiscount] = useState(0);
    const [shipping, setShipping] = useState(5);
    const [total, setTotal] = useState(0);

    const [data, setData] = useState([]);
    const [tags, setTags] = useState([]);


    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch('/data.json');
            const resData = await res.json();
            setData(resData);
        };
        fetchData();
    }, []);


    useEffect(() => {

        const newSubTotal = cartItem.reduce(
            (sum, item) => sum + item.price * (item.qty || 1),
            0
        );


        const newShipping = newSubTotal > 25 ? 0 : 5;


        const newDiscount = cartItem.length >= 3 ? newSubTotal * 0.3 : 0;


        const newTotal = newSubTotal + newShipping - newDiscount;

        // eslint-disable-next-line react-hooks/set-state-in-effect
        setSubTotal(Number(newSubTotal.toFixed(2)));
        setShipping(newShipping);
        setDiscount(Number(newDiscount.toFixed(2)));
        setTotal(Number(newTotal.toFixed(2)));
    }, [cartItem]); 

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
