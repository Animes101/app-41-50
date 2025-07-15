import React, { useEffect, useState } from 'react'

const UseEffect = () => {
    const [count ,setCount]=useState(0);
    const [click ,setClick]=useState(0);



    useEffect(()=>{

        console.log('useEffect')

    },[count])
  return (
    <div>
        {console.log('render')}
        <h1>count {count}</h1>
        <h1>{click}</h1>

        <button onClick={()=>setCount((prev)=> prev + 1)}>Count</button>
        <button onClick={()=>setClick((prev)=> prev +2)}>click</button>
    </div>
  )
}

export default UseEffect