import React, { useContext } from 'react';
import DataContext from './DataContext';
import CarousalCards from './CarousalCards';

const TagsManga = () => {
    const { tags, data } = useContext(DataContext)
    const filterArr = data.filter(item => item.genres.includes(tags))

    return (
        <div className='w-full px-[2%] md:px-[5%] lg:px-[10%] my-[2%]  mx-auto '>
            <p className='font-akira text-[#eb5e28] mb-6 text-3xl'>{tags} Mangas :</p>
            <div className='grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 2xl:grid-cols-4 md:gap-x-6 gap-y-6'>
                {filterArr.map(item => <CarousalCards key={item.id} card={item} />)}
            </div>
        </div>
    );
};

export default TagsManga;