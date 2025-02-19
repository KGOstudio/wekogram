"use client";
import React, { useEffect, useState } from 'react';

function Nav() {

  const isLoggin = false;
  const [isTab, setIsTab] = useState(false);  
  const getScreenSize = () => {
    const { innerWidth: width, innerHeight: height } = window;
    return { width, height };
  }

  const [screenSize, setScreenSize] = useState(getScreenSize());

  useEffect(() => {
    const handleResize = () => {
      setScreenSize(getScreenSize());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="flex p-5 shadow-sm shadow-white gap-3" style={{}}>
      <img src="https://cdn-icons-png.flaticon.com/128/87/87408.png" width="30" height="15" className="self-center bg-white p-1 rounded-lg"/>
      <h1 className="font-mono font-semibold" style={{letterSpacing: 0.5}}>
          wekogram
      </h1>

      {!isLoggin ? (

      <div className="flex gap-5 absolute right-5">
       {screenSize.width > 500 && (
        <>
        <button className="bg-white text-black font-mono p-1 px-3 rounded-lg hover:bg-inherit hover:text-white transition-all" style={{letterSpacing: 0.5, fontWeight: "500"}}>
          register
        </button>

        <button className="text-white font-mono p-1 px-3 rounded-lg border border-black hover:border hover:border-white transition-all" style={{letterSpacing: 0.5, fontWeight: "500"}}>
          sign in
        </button>
        </>
        )}

        {screenSize.width <= 500 && (
          <>
            <button onClick={() => setIsTab(!isTab)}
            className="bg-white p-1 rounded-lg">
              <img src="https://cdn-icons-png.flaticon.com/128/3917/3917711.png" className="w-7 h-7"/>
            </button>

            {isTab && (
              <div className="flex flex-col gap-1 absolute right-1 bg-white p-3 rounded-lg shadow-lg top-5">
                <button className="bg-white text-black font-mono p-1 px-3  hover:bg-inherit hover:text-gray-500 transition-all" style={{letterSpacing: 0.5, fontWeight: "500", borderBottomWidth: 0.5,}}>
                  register
                </button>

                <button className="bg-white text-black font-mono p-1 px-3  hover:bg-inherit hover:text-gray-500 transition-all" style={{letterSpacing: 0.5, fontWeight: "500"}}>
                  sign in
                </button>
              </div>
            )}
            
          </>
        )}
      </div>

      ) 
      : 
      (
        <div className="flex gap-3 absolute right-5">
          <div className="bg-white p-1 rounded-lg">
            <img src="https://cdn-icons-png.flaticon.com/128/3917/3917711.png" className="w-7 h-7"/>
          </div>

          


        </div>
      )
      }

    </div>
  )
}

export default Nav