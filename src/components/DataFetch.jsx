import React, { useEffect, useState } from 'react'

const DataFetch = () => {

    const [datas, setDatas]=useState(null)
    const [isLoading, setIsloading]=useState(true)
    const [error, setError]=useState(null);



    useEffect(()=>{

        setTimeout(()=>{
            fetch('https://jsonplaceholder.typicode.com/albums')
        .then((res)=> {
            if(!res.ok){
                throw Error('fection is not success')
            }
            return res.json()
        })
        .then((data)=> {
            setDatas(data);
            setIsloading(false)
            setError(null)

        },)
        .catch((err)=> {
            setError(err.message)
            setIsloading(false)
        })

        },2000)
    },[])


  return (
    <div>
        <h1>
            DataFetch
        </h1>
        {error && <p>{error}</p>}
        {isLoading && <p>LOaidng ,.,.</p>}
        {datas?.map((data)=>{

            return(
                <div key={data.id}>
                    <div>
                    
                    <h1>{data.title}</h1>
                    <h3>{data.id}</h3> 
                    </div>
                </div>
            )
        })}
    </div>
  )
}

export default DataFetch