import React from 'react';

const Footer =()=>{

    return(
        <div className='bg-green-100  w-full py-2 '>
        <div className='py-8 text-center text-xs text-green-800' >
           Desenvolvido por:{' '}
          
               <a className='hover:underline' href=''>
                  Anderson Marques da Silva/{' '}
               </a>
         
           
               <a className='hover:underline' href='https://github.com/andermsilva' target='blank'>
                 GitHub/{' '}
               </a>
         
          
               <a className='hover:underline' href='https://www.linkedin.com/in/anderson-marques-da-silva-37777614' target='blanck'>
                Linkedin
               </a>
          
        </div>
   </div> 

    );
}
export default Footer;