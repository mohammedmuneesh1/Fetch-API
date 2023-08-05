import React, { useEffect, useState } from 'react';
import './quotes.css';

export default function Quotes  () {
    const [word,setWord]=useState([]);
    useEffect(()=>{
        fetch("https://dummyjson.com/quotes")
        .then(response=>{
            if(!response.ok){
                throw new Error("bad network (error happened)");
               
            }
            return response.json();
        })
        .then(data=>{ 

            return setWord(data.quotes.slice(0,10));
        })
        .catch(error=>console.log("error happened",error));
    },[]);
  return (
    <>
    {word.map((value,index)=>{
        return <h1 key={value.id}>{value.quote}</h1>
    })}
    </>
  )
}
