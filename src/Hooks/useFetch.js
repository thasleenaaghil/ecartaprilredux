//custome hooks - used to fetch data

import { useEffect, useState } from "react"


const useFetch = (url)=>{
  const[data,setData]=useState(null)
    useEffect(()=>{
        //api call
        fetch(url).then((result)=>{
            result.json().then((response)=>{
                setData(response.products);
            })
        })
    },[])
    
     return data
}

export default useFetch