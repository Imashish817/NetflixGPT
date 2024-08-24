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
  console.log(GPTBTN)
 
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
      <div className='absolute bg-gradient-to-b from-black w-full z-10 flex justify-between'>
        <img className='w-44 mx-0 -my-10' src={l} alt='logo' />
      
        {user && <div className='flex'>
        {/* <form className=' bg-black bg-opacity-70 grid grid-cols-12 rounded-xl'>
        <input type="text" className='p-2 col-span-12 m-3 rounded-lg ' placeholder='What do you want to see Today?' onClick={handleSearchView}/>
       
      </form> */}
        <button className='text-white m-6 border h-12 px-5 opacity-40 rounded-xl hover:bg-red-800 hover:opacity-100 hover:font-bold'
        onClick={handleSearchView}>{GPTBTN? "Home":"GPT Serch"}</button>
        <div>
        <img className='my-auto h-12 w-12 justify-center mt-6 border' src='https://occ-0-3216-2164.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png' />
        {/* <p className='text-center border font-bold my-auto'>{user?.displayName}</p> */}
        </div>
        <button onClick={handleSignout}className='font-bold text-white border my-6 rounded-xl px-2 mx-3'>Signout</button>
      </div>}
      </div>

    
  )
}

export default Header