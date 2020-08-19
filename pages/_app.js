import React from 'react';
import Link from 'next/link'
import '../css/styles.css';
import  './css/main.css';

import Header from '../components/Header';
import Footer from '../components/Footer';


const MyApp = ({Component, props})=>{
     
    return (
        <div>
            <Header />
       
         
        <div className=' w-full' >
           
            <div className='central'>
                <Component  {...props}/>
                
            </div>
            <Footer/>
        </div> 
        </div>

    );
}
export default MyApp;