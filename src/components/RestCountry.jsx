import React, { useEffect, useState } from 'react'
import useFetch from '../customHooks/useFetch'
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RestCountry = () => {

    const {datas,isLoading,error}=useFetch('https://api.worldbank.org/v2/country?format=json');
    const [countris, setCountris]=useState([]);
    const [filterData, setFilterData]=useState([]);
    const [searchText, setSearchText]=useState('');




    useEffect(()=>{
        if(datas){
            setCountris(datas[1])
            setFilterData(datas[1]);

        }
    },[datas])

    const handleDelet=(id)=>{

        const filterData=countris?.filter((items)=> items.id !== id);
            toast(' Id Number Delet'+id)
            setCountris(filterData)


    }


    const handleChange=(e)=>{

        const value = e.target.value;
        setSearchText(value);
         const searchValue = value.toUpperCase();

         const newCountry=filterData?.filter((items)=>items.name.toUpperCase() === searchValue )

        //  console.log(newCountry)





    }

    useEffect(()=>{

    },[searchText])
  return (
    <div>
        <h1>RestCountry</h1>
        <ToastContainer />

        <input onChange={handleChange} value={searchText} type="search" name="search" placeholder='Search Country' id="search" />
        <div>
            {countris?.map((country)=>{
                return(  
                    <div key={country.id}>
                        <h1>{country.name}</h1>
                        <h3>{country.incomeLevel?.value}</h3>
                        <p>{country.iso2Code}</p>
                        <h4>{country.longitude}</h4>
                        <button onClick={()=>handleDelet(country.id)}>Delet</button>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default RestCountry