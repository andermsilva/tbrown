import React ,{useState}from 'react';
import {useRouter} from 'next/router';
import PageTitle from '../components/Header/PageTitle';

const Divis =()=>{
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

        <div >
            <PageTitle title='Orçamento'/>
            <h1 className='text-center font-bold text-green-800 text-2xl'>Solicite um Orçamento</h1>
            <div >
                <lable className='margin-label cor-texto' for='Nome'>Nome:</lable>
                <input onChange={onChange} type='text' name='Nome' value={form.Nome}  placeholder='Nome' className='inputForm' />
               
                <lable  className='margin-label cor-texto'>Whatsapp:</lable>
                <input onChange={onChange}  type='text' name='Whatsapp' value={form.Whatsapp}  placeholder='Whatsapp' className='inputForm' />
                 
                <lable className='margin-label cor-texto'>E-mail:</lable>
                <input onChange={onChange}  type='text' name='Email' value={form.Email}  placeholder='E-mail' className='inputForm' />
                <pre>
                  {/*   {JSON.stringify(form,null,2)} */}
                </pre>
             
                 <div className='bt-orcamento'>

                  <button  onClick={save} className='bt px-12 py-4 font-bold rounded-lg shadow-lg hover:shadow  my-2 '> Enviar</button>
                 </div>
             
            
            </div>
        </div>
    );
}


export default Divis;