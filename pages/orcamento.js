import React ,{useState}from 'react';
import {useRouter} from 'next/router';
import Link from 'next/link';
import PageTitle from '../components/Header/PageTitle';

const Orcamento=()=>{
    const router = useRouter();
    const [form ,setForm] = useState({
        Nome:'',
        Whatsapp:'',
        Email:''
    });
  
   const save =async()=>{
     /*   const form ={
        Nome:'dddd',
        Whatsapp:'ffff',
        Email:'ffff' 
       } */
      try{

          const response = await fetch('/api/save',{
               method:'POST',
              // headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
               body: JSON.stringify(form)
           });
           const data = await response.json();
          // console.log('dados',data);
          
          router.push('/');
      }catch(err){
        console.log('Erro',err)
      }
      
   }

    const onChange = evt =>{
        const value =evt.target.value;
        const key = evt.target.name;
        setForm(old => ({
                ...old,
                [key]: value

               }));
    }
    return(

        <div className='w-1/2 mx-auto'>
            <PageTitle title='Orçamento'/>
            <h1 className='text-center font-bold text-green-800 text-2xl'>Solicite um Orçamento</h1>
            <div>
                <lable>Nome:</lable>
                <input onChange={onChange} type='text' name='Nome' value={form.Nome}   placeholder='Nome' className='inputForm' />
               
                <lable >Whatsapp:</lable>
                <input onChange={onChange}  type='text' name='Whatsapp' value={form.Whatsapp}  placeholder='Whatsapp' className='inputForm' />
                 
                <lable >E-mail:</lable>
                <input onChange={onChange}  type='text' name='Email' value={form.Email}  placeholder='E-mail' className='inputForm' />
                <pre>
                  {/*   {JSON.stringify(form,null,2)} */}
                </pre>
               <span className='spanBt'>

                <button onClick={save} className='bg-green-400 px-12 py-4 font-bold rounded-lg shadow-lg hover:shadow  my-2 mx-auto'> Enviar</button>
               </span>
            
            </div>
        </div>
    );
}

export default Orcamento;