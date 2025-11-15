import React, { useContext, useEffect, useState } from 'react';
import DataContext from './DataContext';
import Carousel from './Carousal';
import { Link } from 'react-router';

const Home = () => {
    const { data } = useContext(DataContext);
    const [newData, setNewData] = useState([])
    useEffect(() => {
        function shuffleArray(arr) {
            const newArr = [...arr]; // copy array
            for (let i = newArr.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
            }
            return newArr;
        }
        const deta = shuffleArray(data).slice(0, 10)
        setNewData(deta)

    }, [data])


    return (
        <div className='w-full flex flex-col items-center'>
            <Carousel data={newData} />
            <div class="w-full my-6 lg:w-1/2 bg-linear-to-r from-[#e7fa3d] to-[#e4e4a2] lg:p-10 p-4 lg:rounded-md text-black">

                <h3 class="text-2xl font-akira mb-3">
                    Pick any 3 different mangas and get 20% off.
                </h3>

                <p class="mb-3">
                    Pick any three unique mangas and unlock a special 20% off your total. The more variety you explore, the more you save — start building your perfect trio!
                </p>
                <a href="/all-manga"
                    class="px-6 py-3 bg-black text-white rounded-full inline-block">
                    SHOP NOW
                </a>

            </div>

        </div>
    );
};

export default Home;
