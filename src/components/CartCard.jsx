// CartCard.jsx
import React, { useContext } from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import DataContext from './DataContext';
import { toast } from "react-toastify";

const CartCard = ({ card }) => {
  const { setCartItem } = useContext(DataContext);
  function handlePlus() {
    setCartItem(prevCart => {
      return prevCart.map(item => {
        const isSameItem = item.id == card.id;

        if (isSameItem) {
          return { ...item, quantity: item.quantity + 1 };
        }

        return item;
      });
    });

  }
  function handleMinus() {
    if (card.quantity <= 1) {
      toast(`${card.title} is deleted from the Cart`)
      setCartItem(prev => prev.filter(item => item.id != card.id))
    } else {
      setCartItem(prev => prev.map(item =>
        item.id == card.id ? { ...item, quantity: (item.quantity - 1) } : item
      ))
    }
  }
  function handleDelete() {
    toast(`${card.title} is deleted from the Cart`)
    setCartItem(prev => prev.filter(it => it.id !== card.id));
  }
  return (
    <div className='flex w-full flex-col pb-6 sm:pb-0 md:flex-row items-center justify-between border-2 gap-y-6 sm:pr-6'>
      <div className='flex items-center w-full sm:w-[30%] gap-x-6 flex-col sm:flex-row'>
        <div className='w-[120px]'>
          <img className='w-full h-full' src={card.image} alt="" />
        </div>
        <div className=''>
          <p className='text-2xl font-semibold'>{card.title}</p>
          <p className='text-xl'>Volume {card.vol}</p>
        </div>
      </div>

      <div className='flex items-center justify-between  gap-x-3 sm:gap-x-6 sm:text-2xl text-xl'>
        <p>$ {card.price}</p>
        <div>
          <div className='flex items-center justify-center border-2 border-[#eb5e28] rounded-md'>
            <div onClick={handleMinus} className='p-2 cursor-pointer bg-[#eb5e28]'>
              {card.quantity === 1 ? <MdDelete /> : <FaMinus />}
            </div>
            <p className='px-4'>{card.quantity}</p>
            <div onClick={handlePlus} className='p-2 cursor-pointer bg-[#eb5e28]'>
              <FaPlus />
            </div>
          </div>
        </div>

        <p>$ {(card.price * card.quantity).toFixed(2)}</p>
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
