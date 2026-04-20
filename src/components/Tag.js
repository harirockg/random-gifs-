import React from 'react'
// import axios from 'axios';
import {  useState } from 'react';
//import useGif from "../hooks/useGif";
import Spinner from './Spinner';
import useGif from "../hooks/useGif"; 

// const API_KEY =process.env.REACT_APP_GIPHY_API_KEY
const Tag= () => {
    const[tag,setTag]=useState('car');
    // const[gif,setGif]=useState('');
    // const[loading,setLoading]=useState(false);
    

    // async function fetchdata(){
    //     setLoading(true);
    //     const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
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


    const{gif,loading,fetchdata}=useGif(tag);

    // function clickHandler(){
    //     fetchdata();
    // }


    // function changeHandler(event){
    //     setTag(event.target.value);
        
    // }

  return (
    <div className="flex flex-col items-center bg-blue-500 md:w-1/2 w-11/12 rounded-lg border-2 border-gray-600 gap-y-5 mt-[15px] mx-auto py-5">
        <h1 className="uppercase font-bold text-2xl underline ">Random {tag} Gifs</h1>
        {
            loading ? <Spinner /> : <img src={gif} alt="gif" width="450" />
        }

        <input
            className="uppercase bg-[#F0F0F0] w-9/12 rounded-lg font-normal py-[5px] text-sm text-center"
            onChange={(event) => setTag(event.target.value)}
            value={tag}
        />
        
        <button onClick={() => fetchdata(tag)}
        className="uppercase bg-[#F0F0F0] w-10/12 rounded-lg font-normal py-2 text-xl"
        >
            Generate
        </button>

    </div>
  )
}

export default Tag