import React from 'react';
import { useLocation } from 'react-router-dom';

import useFetch from '../hooks/useFetch';
//component
import CategoryNav from '../components/CategoryNav';
import Product from '../components/Product';


const Search = () => {
  const location =useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchTerm = searchParams.get('query');

  console.log(searchTerm);

  //get products base on search term tkiem
  const {data} = useFetch(
    `/products?populate=*&filters[title][$contains]=${searchTerm}`
  ); 
    console.log(data);

  return <div>
    <div className='container mx-auto'>
        <div>

          {/* title */}
          <div className='py-3 text-xl uppercase text-center lg:text-left'>
            {data?.length>0 
              ? `${data.length} results for ${searchTerm}`
              : `no results found for ${searchTerm}`
            }
          </div>
          {/* product grid */}
          
          <div>
            {data?.map(product=>{
              return <Product product={product} key={product.id}/>
            })}
          </div>
        </div>
    </div>
  </div>;
};

export default Search;
