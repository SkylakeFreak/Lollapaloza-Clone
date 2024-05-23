import React, { useEffect, useState } from 'react'

function Videosixth() {
    useEffect(()=>{
        function handlescroll(){
            var adjustedScrollY = window.scrollY - 4700;

            // Checking the adjusted scroll value and setting the pad accordingly
            if (adjustedScrollY >= 0 && adjustedScrollY < 50) {
                setpad(29);
            } else if (adjustedScrollY >= 50 && adjustedScrollY < 55) {
                setpad(28);
            } else if (adjustedScrollY >= 55 && adjustedScrollY < 60) {
                setpad(27);
            } else if (adjustedScrollY >= 60 && adjustedScrollY < 65) {
                setpad(26);
            } else if (adjustedScrollY >= 65 && adjustedScrollY < 70) {
                setpad(25);
            } else if (adjustedScrollY >= 70 && adjustedScrollY < 75) {
                setpad(24);
            } else if (adjustedScrollY >= 75 && adjustedScrollY < 80) {
                setpad(23);
            } else if (adjustedScrollY >= 80 && adjustedScrollY < 85) {
                setpad(22);
            } else if (adjustedScrollY >= 85 && adjustedScrollY < 90) {
                setpad(21);
            } else if (adjustedScrollY >= 90 && adjustedScrollY < 95) {
                setpad(20);
            } else if (adjustedScrollY >= 95 && adjustedScrollY < 100) {
                setpad(19);
            } else if (adjustedScrollY >= 100 && adjustedScrollY < 105) {
                setpad(18);
            } else if (adjustedScrollY >= 105 && adjustedScrollY < 110) {
                setpad(17);
            } else if (adjustedScrollY >= 110 && adjustedScrollY < 115) {
                setpad(16);
            } else if (adjustedScrollY >= 115 && adjustedScrollY < 120) {
                setpad(15);
            } else if (adjustedScrollY >= 120 && adjustedScrollY < 125) {
                setpad(14);
            } else if (adjustedScrollY >= 125 && adjustedScrollY < 130) {
                setpad(13);
            } else if (adjustedScrollY >= 130 && adjustedScrollY < 135) {
                setpad(12);
            } else if (adjustedScrollY >= 135 && adjustedScrollY < 140) {
                setpad(11);
            } else if (adjustedScrollY >= 140 && adjustedScrollY < 145) {
                setpad(10);
            } else if (adjustedScrollY >= 145 && adjustedScrollY < 150) {
                setpad(9);
            } else if (adjustedScrollY >= 150 && adjustedScrollY < 155) {
                setpad(8);
            } else if (adjustedScrollY >= 155 && adjustedScrollY < 160) {
                setpad(7);
            } else if (adjustedScrollY >= 160 && adjustedScrollY < 165) {
                setpad(6);
            } else if (adjustedScrollY >= 165 && adjustedScrollY < 170) {
                setpad(5);
            }


        }
        window.addEventListener('scroll',handlescroll);
        return ()=>{
            window.removeEventListener('scroll',handlescroll);
        };

        

    },[]);
    const [pad,setpad]=useState(30);
  return (
    <div className='h-screen bg-sp'>
        <div className=''>
        <video className={` transition-all object-cover flex p-[${pad}%] h-[1000px] md:h-[1500px] w-screen`} autoPlay loop muted src="https://assets-global.website-files.com/65e1e77c24f2cc3e8c657d6d/65f2a94d9580e4bf4859969d_LOL24_WebUSP_v4-transcode.mp4"></video>
        </div>
        
    </div>
  )
}

export default Videosixth