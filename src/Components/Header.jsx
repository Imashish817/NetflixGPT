import React, { useEffect, useState } from 'react'
import l from '../img/l.png'
import { auth } from '../Utils/Firebase';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../Utils/userSlice';
import {onAuthStateChanged } from "firebase/auth";
import { toggleGPTSearch } from '../Utils/GPTSlice';

const Header = () => {
  const Dispatch=useDispatch();
  const user=useSelector((store)=> store.user)
  const GPTBTN=useSelector((store)=> store.GPTSearch.GPTSearchToggle)
  // console.log(GPTBTN)
 
  const Navigate=useNavigate();
  const handleSignout=()=>{
    signOut(auth).then(() => {
      // Sign-out successful.
      Navigate("/");
    }).catch((error) => {
    });
  }
  const[]=useState("GPT Search")
  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const {uid,accessToken,displayName,email} = user;
        // console.log(user)
        Dispatch(addUser({"uid":uid,"accessToken":accessToken,"displayName":displayName,"email":email}))
        Navigate("/browse");
      } else {
       Dispatch(removeUser());
       Navigate("/");
      }
    });
  },[])

  const handleSearchView=()=>{
    Dispatch(toggleGPTSearch())
  }
  return (
      <div className='absolute w-full z-10 flex flex-col justify-between bg-black md:align-middle md:flex-row'>
        <img className='w-[50%] h-auto pt-2 mx-auto md:mx-2 md:w-[20%]' src={l} alt='logo' />
        {user && <div className='flex p-0 justify-around '>
        <button className='text-white m-1 border h-7 px-5 rounded-md hover:bg-red-800 hover:opacity-100 hover:font-bold md:mt-[8%]'
        onClick={handleSearchView}>{GPTBTN? "Home":"GPT Search"}</button>
        <div className='flex'>
        <img onClick={handleSignout} className='cursor-pointer   h-7 md:mt-[18%]' src='https://occ-0-3216-2164.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png' />
        <button onClick={handleSignout}className='text-white text text-white  h-8   '>(Signout)</button>

        {/* <p className='text-center border font-bold my-auto'>{user?.displayName}</p> */}
       
        </div>
        
      </div>}
      </div>

    
  )
}

export default Header