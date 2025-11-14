import React, { useContext } from 'react';
import DataContext from './DataContext';
import CarousalCards from './CarousalCards';
import { Link } from 'react-router';

const Faviourties = () => {
    const {faviourite, setFaviourite} = useContext(DataContext)
    return (
        <>
        {faviourite.length > 0 ? <div className='w-full px-[2%] md:px-[5%] lg:px-[10%] my-[2%] flex-wrap mx-auto '>
            <p className='text-3xl font-akira text-[#eb5e28] mb-3'>Faviourite Mangas</p>
            <div className='grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 2xl:grid-cols-4 md:gap-x-6 gap-y-6'>
                {faviourite.map(item => <CarousalCards key={item.id} card={item}/>)}
            </div>
            
        </div> : <div className='min-h-[50vh] flex items-center justify-center font-fira flex-col gap-y-3'>
            <p className='text-2xl'>Nothing Added</p>
            <Link className='underline text-lg' to='/all-manga'>Browse Mangas</Link>
            </div>}
        </>
    );
};

export default Faviourties;