import React, { useContext } from 'react';
import {IoArrowForward, IoCartOutline, IoClose} from 'react-icons/io5';

import {CartContext} from '../context/CartContext';

//components
import CartItem from '../components/CartItem';


const Cart = () => {
 const {setIsOpen, cart ,total,clearCart }= useContext(CartContext);

  return <div className='w-full h-full px-4 text-white'>
            <div>
              <div
                  onClick={()=> setIsOpen(false)} 
                  className='text-4xl w-20 h-[98px] flex justify-start items-center cursor-pointer '>
                <IoClose />
              </div>

              <div className='flex flex-col gap-y-10 px-2 '>
                {cart.map(item =>{
                  return <CartItem item ={item} key={item.id}/>
                })}
              </div>

              {/* subtotal and total */}
              {cart.length>=1 && (
                <div className='px-6 py-10 flex flex-col'>

                    {/* total */}
                    <div className='flex justify-between text-2xl'>
                      <div>Total</div>
                      <div>$ {total}</div>
                    </div>
                </div>
              )}

              {/* button */}
              <div>
                {cart.length>=1 ? (
                  <div className='flex justify-between gap-x-4'>
                   
                  </div>
                  ) : (

                    <div  className='h-full absolute top-0 right-0 left-0 flex justify-center items-center flex-col text-white/30'>
                      <div className='text-2xl'>Your cart is empty</div>
                      <div className='text-6xl'>
                        <IoCartOutline />
                      </div>
                    </div>
                )}
              </div>

            </div>
        </div>;
};

export default Cart;
