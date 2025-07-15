import React, { useEffect, useState } from 'react'

const useFetch = (url) => {
  const [datas, setDatas]=useState(null)
      const [isLoading, setIsloading]=useState(true)
      const [error, setError]=useState(null);
  
  
  
      useEffect(()=>{
  
          setTimeout(()=>{
              fetch(url)
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
      },[url])

      return {datas,isLoading, error}
}

export default useFetch