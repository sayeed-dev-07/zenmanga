import React, { useContext, useEffect, useState } from 'react';
import DataContext from './DataContext';
import Carousel from './Carousal';

const Home = () => {
    const { data } = useContext(DataContext);
    const [newData, setNewData] = useState([])
    useEffect(()=>{
        function shuffleArray(arr) {
        const newArr = [...arr]; // copy array
        for (let i = newArr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
        }
        return newArr;
    }
    const deta = shuffleArray(data).slice(0,10)
    setNewData(deta)
    
    },[data])


    return (
        <div>
            <Carousel data={newData} />
        </div>
    );
};

export default Home;
