import React from 'react'
import { useSelector } from 'react-redux'
import WishForHer from './WishForHer'
import WishForOthers from './WishForOthers'

const WishPart = () => {
    const userName = useSelector((state)=>state.user.userName)
    console.log('redux se ye naam utha rha hai : ',userName);
    
  return (
    <>
    {userName === "sadaf" && <WishForHer/>}
    {userName !== "sadaf" && <WishForOthers/>}
    </>
  )
}

export default WishPart