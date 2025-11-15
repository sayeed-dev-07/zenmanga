import React, { useContext, useState } from 'react';
import DataContext from './DataContext';
import CarousalCards from './CarousalCards';
import Pagination from './Pagination';

const AllManga = () => {
    const {data} = useContext(DataContext)
    const [curPage, setCurPage] = useState(1)
    const [postPerPage, setPostPerPage] = useState(8)
    const totalPostLen = data.length;
    
    const lastPostIndex = curPage * postPerPage;
    const firstPostIndex = lastPostIndex - postPerPage
    const currData = data.slice(firstPostIndex, lastPostIndex)
    return (
        <div className='w-full px-[2%] md:px-[5%] lg:px-[10%] my-[2%] flex-wrap mx-auto '>
            <p className='text-3xl font-akira text-[#ee6c4d] mb-3'>All Mangas</p>
            <div className='grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 2xl:grid-cols-4 md:gap-x-6 gap-y-6'>
                {currData.map(item => <CarousalCards key={item.id} card={item}/>)}
            </div>
            <div className='flex items-center justify-center mt-12 gap-x-4'>
                <Pagination postPerPage={postPerPage} totalPostLen={totalPostLen} setCurPage={setCurPage} curPage={curPage}/>
            </div>
        </div>
    );
};

export default AllManga;