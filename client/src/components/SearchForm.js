import React, {useEffect, useState} from 'react';
import { FiSearch } from 'react-icons/fi'; 

import { useNavigate } from 'react-router-dom';


const SearchForm = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] =useState('');
  const [isAnimating, setIsAnimating] =useState(false);


  const handleSearchInput= (e)=>{
    setSearchTerm(e.target.value);
  } 

  const handleSubmit= (e)=>{
    e.preventDefault();
    if(searchTerm.length >0){
      navigate(`/search?query=${searchTerm}`);
      document.querySelector('input').value = '';
      setSearchTerm('')
    }else{
      //input rỗng setAnimating là true
      console.log('Please search for something')
      setIsAnimating(true);
    }
  }

  return (
    <form onSubmit={handleSubmit} className= 'relative w-full' >
      <input
            onChange={handleSearchInput} 
            className='input' type='text' 
            placeholder='Search for a product ...'/>

      <button className='btn btn-accent absolute top-0 right-0  '>
        <FiSearch className='text-xl '/>
      </button>
    </form>
  )
};

export default SearchForm;
