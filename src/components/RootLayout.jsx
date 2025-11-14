import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import { Outlet } from 'react-router';
import Footer from './Footer';
import DataContext from './DataContext';

const RootLayout = () => {
    const [faviourite, setFaviourite] = useState([])
    const [cartItem, setCartItem] = useState([])
    const [data, setData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch('/data.json');
            const resData = await res.json();
            setData(resData)
        }
        fetchData()
    }, [])
    return (
        <div className='flex items-center justify-between min-h-screen flex-col bg-[#302f2b] text-white font-fira'>
            <DataContext value={{faviourite, setFaviourite, cartItem, setCartItem, data}}>
                <Navbar />
                <Outlet />
                <Footer />
            </DataContext>

        </div>
    );
};

export default RootLayout;