import React from 'react';
import style from './styles.module.css';
import Link from 'next/link';


const Header =()=>{

    return(
      < >
        <div className='bg-green-100 h-20 absolute w-full -mt-20'>
        <div className={style.marg +' w-24 z-0 relative '}>
             

             <Link href='/'>
                <a> <img  className={style.logo} src='./logotbrown1.png' alt='BrownLimpe'/></a>
             </Link>
             
             
          </div>
        
        </div>
        <div className=' menu bg-green-200 retative w-full mt-20 z-40 text-green-800 shadow-md'>
            <div className='w-1/2 mx-auto text-center'>

                <Link href='./sobre'>
                  <a className='px-2 hover:underline' >Sobre</a>
                </Link>
                <Link href='/contato'>
                  <a className='px-2 hover:underline'>Contato</a>
                </Link>
                <Link href='/orcamento'>
                  <a className={style.menu +'px-2 hover:underline'}>Orçamento</a>
                </Link>
            </div>
        </div> 
       
      </>   

    );
}
export default Header;