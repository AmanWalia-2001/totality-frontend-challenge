'use client'
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Header';
 function App() {
  return (

  <div className="box bg-slate-600 flex flex-wrap justify-center md:flex-nowrap">
      <Header
        imageSrc="https://ipropertymedia.com/wp-content/uploads/2016/09/Emaar-Properties-Dubai-Hills-Estate-Sidra-Townhouses-Exterior.jpg"
        title1="Rent a property"
        title2="Lets Rent property or homes for everyone"
        description="A sense of luxury, comfort, and tranquility, making it an ideal retreat for those seeking a peaceful and upscale living experience."
        link="https://www.example.com"
        buttonText="Click To Buy!"
        className="md:w-1/2 xl:w-1/3"
      />
      <Header
        imageSrc="https://th.bing.com/th/id/R.ff20b5ef8b0405610b226866b74b12f2?rik=eGIy74viLRY%2b%2bA&riu=http%3a%2f%2fww1.prweb.com%2fprfiles%2f2015%2f03%2f02%2f12556168%2fGeneva_Q1_Facade.jpg&ehk=JPpfgQiaCOhK7BwYU8TBB6FCKISsQc%2fvK6kd9ElEKGs%3d&risl=1&pid=ImgRaw&r=0"
        title1="Buy a property"
        title2="Lets Buy property or home for everyone"
        description="A sense of luxury, comfort, and tranquility, making it an ideal retreat for those seeking a peaceful and upscale living experience."
        link="https://www.example.com"
        buttonText="Click To BUY!"
        className="md:w-1/2 xl:w-1/3"
      />
    </div>
   
  );
}
  export default App;