import React, { useEffect, useState } from 'react'
import useFetch from './useFetch'
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const DataFetch = () => {

    const {datas,isLoading,error}=useFetch('https://jsonplaceholder.typicode.com/albums');
    const [albums, setAblums]=useState(null)


    const handleDelet=(id)=>{

        const filterAblums=albums.filter((items)=> items.id !== id);
        toast(' Id Number Delet'+id)
        setAblums(filterAblums);




    }

    useEffect(()=>{
        if(datas){
            setAblums(datas)
        }
    },[datas])


  return (
    <div>
         <ToastContainer />
        <h1>
            DataFetch
        </h1>
        {error && <p>{error}</p>}
        {isLoading && <p>LOaidng ,.,.</p>}
        {albums?.map((data)=>{

            return(
                <div key={data.id}>
                    <div>
                    
                    <h1>{data.title}</h1>
                    <h3>{data.id}</h3> 
                    </div>
                     <button onClick={()=>handleDelet(data.id)}>Delet</button>
                </div>
            )
        })}
    </div>
  )
}

export default DataFetch