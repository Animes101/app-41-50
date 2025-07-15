import React, { useEffect, useState } from 'react'

const DataFetch = () => {

    const [datas, setDatas]=useState(null)



    useEffect(()=>{

        fetch('https://jsonplaceholder.typicode.com/albums')
        .then((res)=> res.json())
        .then((data)=> {
            setDatas(data);

        },)
    },[])

    console.log(datas)
  return (
    <div>
        <h1>
            DataFetch
        </h1>
        {datas?.map((data)=>{
            return(
                <div key={data.id}>
                    <h1>{data.title}</h1>
                    <h3>{data.id}</h3>

                    
                </div>
            )
        })}
    </div>
  )
}

export default DataFetch