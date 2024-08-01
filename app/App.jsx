'use client'
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Header';
 function App() {
  return (

  <div className="box bg-slate-600 flex flex-wrap justify-center md:flex-nowrap">
      <Header
        imageSrc="https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4"
        title1="Rent a property"
        title2="Lets Rent property or homes for everyone"
        description="A sense of luxury, comfort, and tranquility, making it an ideal retreat for those seeking a peaceful and upscale living experience."
        link="https://www.example.com"
        buttonText="Click To Buy!"
        className="md:w-1/2 xl:w-1/3"
      />
      <Header
        imageSrc="https://bayut-production.s3.eu-central-1.amazonaws.com/image/110993385/6a070e8e1bae4f7d8c1429bc303d2008"
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