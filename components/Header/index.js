import React from 'react';
import style from './styles.module.css';
import Link from 'next/link';


const Header =()=>{

    return(
      <div  >
        <div className='bg-green-100 h-20 absolute w-full -mt-20'>
        <div className=' w-3/5 mx-auto z-30 relative'>
             <Link href='/'>
                <a> <img  className={style.logo} src='./logotbrown1.png' alt='BrownLimpe'/></a>
             </Link>
             
          </div>
        
        </div>
        <div className='  bg-green-200 retative w-full mt-20 z-10 text-green-800 shadow-md'>
            <div className='w-1/2 mx-auto text-center '>

                <Link href='/agenda'>
                  <a className='px-2' >Agenda</a>
                </Link>
                <Link href='/contato'>
                  <a className='px-2'>Contato</a>
                </Link>
                <Link href='/sobre'>
                  <a className='px-2'>Sobre</a>
                </Link>
            </div>
        </div> 
       
      </div>   

    );
}
export default Header;