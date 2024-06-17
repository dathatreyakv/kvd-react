import React from 'react'
import { SWIGGY_ASSET_URL } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addToCart } from '../utils/cartSlice';

const ItemList = ({items}) => {
  const dispatch = useDispatch();
  function addItemToCart(item) {
    dispatch(addToCart(item));
  }
  return (
    <div>{
      items?.map((item, indx) => {
          const {info} = item?.card
          if(!info) return <></>;

          return <div key={info?.id+'-'+indx} className='p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between'>
            <div className='w-9/12'>
              <div className='p-2'>
                <span>{info?.name}</span>
                <span> -  ₹{(info?.price || info?.defaultPrice)/100.0}</span>
              </div>
              <p className='text-xs'>{info?.description}</p>
            </div>
            <div className='w-3/12 p-4'>
              <div className='absolute text-xs'>
                <button className='p-2 bg-black text-white shadow-md rounded-lg -mx-2' onClick={() => {addItemToCart(item)}}>Add +</button>
              </div>
              <img src={SWIGGY_ASSET_URL + info?.imageId} className='w-full'/>
            </div>
          </div>
        }
      )
      }</div>
  )
}

export default ItemList