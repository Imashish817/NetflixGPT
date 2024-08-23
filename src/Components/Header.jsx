import React, { useEffect } from 'react'
import l from '../img/l.png'
import { auth } from '../Utils/Firebase';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../Utils/userSlice';
import {onAuthStateChanged } from "firebase/auth";

const Header = () => {
  const Dispatch=useDispatch();
  const user=useSelector((store)=> store.user)
  const Navigate=useNavigate();
  const handleSignout=()=>{
    signOut(auth).then(() => {
      // Sign-out successful.
      Navigate("/");
    }).catch((error) => {
      
    });
  }
  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const {uid,accessToken,displayName,email} = user;
        console.log(user)
        Dispatch(addUser({"uid":uid,"accessToken":accessToken,"displayName":displayName,"email":email}))
        Navigate("/browse");
      } else {
       Dispatch(removeUser());
       Navigate("/");
      }
    });
  },[])
  return (
   
      <div className='absolute bg-gradient-to-b from-black w-full z-10 flex justify-between'>
        <img className='w-44 mx-0 -my-10' src={l} alt='logo' />
      
        {user && <div className='flex'>
        <div>
        <img className='my-auto h-12 w-12 align-middle border' src='https://occ-0-3216-2164.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png' />
        <p className='text-center border font-bold my-auto'>{user?.displayName}</p>
        </div>
        <button onClick={handleSignout}className='font-bold text-white border my-6 rounded-xl px-2 mx-3'>Signout</button>
      </div>}
      </div>

    
  )
}

export default Header