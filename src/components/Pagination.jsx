import React from 'react';

const Pagination = ({postPerPage, totalPostLen, setCurPage, curPage}) => {
    let pageArr = []
    for (let i = 1; i <= Math.ceil(totalPostLen / postPerPage); i++) {
        pageArr.push(i)
        
    }
    return (
        <div className='flex items-center justify-center gap-x-4 flex-wrap gap-y-3'>
            {
                pageArr.map((item, index)=> <button onClick={()=> setCurPage(item)} className={`border-2 px-3 py-2 cursor-pointer text-[#eee9e9] font-semibold rounded-sm ${curPage == item ? 'bg-[#eee9e9] text-black border-2 border-white' : ''}`} key={index}>{item}</button>)
            }
        </div>
    );
};

export default Pagination;