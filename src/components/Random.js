import React from 'react'
// import axios from 'axios';
// import { useEffect, useState } from 'react';
import Spinner from './Spinner';
import useGif from "../hooks/useGif";

// const API_KEY =process.env.REACT_APP_GIPHY_API_KEY
const Random = () => {
    // const[gif,setGif]=useState('');
    // const[loading,setLoading]=useState(false);
    

    // async function fetchdata(){
    //     setLoading(true);
    //     const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
    //     const {data}=await axios.get(url);
    //     // console.log(output);
    //     const imageSource=data.data.images.downsized_large.url
    //     setGif(imageSource);
    //     // console.log(imageSource);
    //     setLoading(false);
    // }

    // useEffect(()=>{
    //     fetchdata();
    // },[])

    const{gif,loading,fetchdata}=useGif();

    function clickHandler(){
        fetchdata();
    }

  return (
    <div className="flex flex-col items-center bg-green-500 md:w-1/2 w-11/12 rounded-lg border-2 border-gray-600 gap-y-5 mt-[15px] mx-auto py-5">
        <h1 className="uppercase font-bold text-2xl underline ">A Random Gifs</h1>
        {
            loading ? <Spinner /> : <img src={gif} alt="gif" width="450" />
        }

        
        
        <button onClick={clickHandler}
        className="uppercase bg-[#F0F0F0] w-10/12 rounded-lg font-normal py-2 text-xl"
        >
            Generate
        </button>

    </div>
  )
}

export default Random