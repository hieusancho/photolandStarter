import React,{createContext, useEffect, useState} from 'react';
//create context
export const CartContext= createContext();


const CartProvider = ({children}) => {
  //sd IsOpen vs UseContext bên header.js
  const [isOpen, setIsOpen] =useState(false);
  const [cart,setCart] = useState([]);
  const [itemsAmount,setItemsAmount] = useState(0);
  const [amount,setAmount] = useState(0);
  const [total, setTotal] = useState(0);

  //cart amount(so luong tren gio hang)
  useEffect(()=>{
    const amount =cart.reduce((a,c)=>{
      return a + c.amount;
    }, 0);

    setItemsAmount(amount);
  }, [cart]);

  //cart total (tong tien so cartitem)
  useEffect(()=>{
    const total = cart.reduce((a,c)=>{
      return a + c.attributes.price * c.amount;
    }, 0);

    setTotal(total);
  }, [cart]);


  //
  const handleSelect =  (e,id)=>{
    const value = parseInt(e.target.value);
    const cartItem =cart.find((item)=>{
      return item.id === id;
    })
     if(cartItem){
      const newCart = [...cart].map(item=>{
        if(item.id === id){
          setAmount(value);
          return {...item,amount: value}

        }else{
          return item;
        }
      })

      setCart(newCart);
     }
  }

  //Add to cart
  //sd useCOntext bên ProductDetails.js
  const addToCart = (item, id)=>{
    const itemID = parseInt(id);
    const newItem ={...item[0], amount: 1};
    setCart([...cart, newItem]);
    //check item co trong cart
    const cartItem = cart.find((item)=>{
      return item.id === itemID
    })

    if(cartItem){
      const newCart = cart.map(item=>{
        if(item.id=== itemID){
          setAmount(cartItem.amount + 1);
          return {...item, amount: cartItem.amount + 1}
        }else{
          return item;
        }
      });
      setCart(newCart);
    }else{
      setCart([...cart, newItem])
    }
    //open the cart sidebar
    setIsOpen(true);
  }

  //remove to cart
  const removeFromCart = (id) =>{
    const newCart = cart.filter((item)=>{
      return item.id !== id;
    })
    setCart(newCart);
  }


  return <CartContext.Provider value={{isOpen, setIsOpen, addToCart, cart, removeFromCart, itemsAmount, handleSelect, total}}>
    {children}
  </CartContext.Provider>;
};

export default CartProvider;
