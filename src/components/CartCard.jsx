// CartCard.jsx
import React, { useContext } from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import DataContext from './DataContext';

const CartCard = ({ card }) => {
  const { setCartItem } = useContext(DataContext);
  const qty = card.qty || 1;

  const handlePlus = () => {
    setCartItem(prev => prev.map(it => it.id === card.id ? { ...it, qty: (it.qty || 1) + 1 } : it));
  };

  const handleMinus = () => {
    if (qty <= 1) {
      // delete item
      setCartItem(prev => prev.filter(it => it.id !== card.id));
    } else {
      setCartItem(prev => prev.map(it => it.id === card.id ? { ...it, qty: it.qty - 1 } : it));
    }
  };

  const handleDelete = () => {
    setCartItem(prev => prev.filter(it => it.id !== card.id));
  };

  return (
    <div className='flex w-full flex-col pb-6 sm:pb-0 md:flex-row items-center justify-between border-2 gap-y-6 pr-6'>
      <div className='flex items-center w-full sm:w-[30%] gap-x-6 '>
        <div className='w-[120px]'>
          <img className='w-full h-full' src={card.image} alt="" />
        </div>
        <div className=''>
          <p className='text-2xl font-semibold'>{card.title}</p>
          <p className='text-xl'>Volume {card.vol}</p>
        </div>
      </div>

      <div className='flex items-center justify-between gap-x-6 text-2xl'>
        <p>$ {card.price}</p>
        <div>
          <div className='flex items-center justify-center border-2 border-[#eb5e28] rounded-md'>
            <div onClick={handleMinus} className='p-2 cursor-pointer bg-[#eb5e28]'>
              { qty === 1 ? <MdDelete /> : <FaMinus /> }
            </div>
            <p className='px-4'>{qty}</p>
            <div onClick={handlePlus} className='p-2 cursor-pointer bg-[#eb5e28]'>
              <FaPlus />
            </div>
          </div>
        </div>

        <p>$ {(card.price * qty).toFixed(2)}</p>
      </div>

      <div>
        <button onClick={handleDelete} className='px-4 py-2 bg-[#eb5e28] cursor-pointer rounded-md'>
          Delete
        </button>
      </div>
    </div>
  );
};

export default CartCard;
