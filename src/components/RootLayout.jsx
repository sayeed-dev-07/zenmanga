import React, { useEffect, useState } from 'react';
import MangaData from '../../public/MangaData';
const RootLayout = () => {
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
        <div className='grid grid-cols-5 px-[5%] py-[5%] gap-3'>
            {data.map(item=>(
                <div className='p-3 border' key={item.id}>
                    <div>
                        <img src={item.image} alt="" />
                    </div>
                    <div>
                        <p>{item.title}</p>
                        <p>{item.author.name}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default RootLayout;