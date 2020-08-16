import {GoogleSpreadsheet} from 'google-spreadsheet';
import moment from 'moment';
const doc = new GoogleSpreadsheet(process.env.SHEET_DOC_ID) ;

const fromBase64 = value =>{
    const buff = Buffer.from(value,'base64');
    return buff.toString('ascii');
}

export default async(req,resp)=>{
     
    console.log(JSON.parse(req.body));
   // console.log(fromBase64(process.env.SHEET_PRIVATE_KEY))
    resp.end(req.body);

     try{
        
        await doc.useServiceAccountAuth({
            client_email: process.env.SHEET_CLIENT_EMAIL,
            private_key: process.env.SHEET_PRIVATE_KEY
            
        });
        await doc.loadInfo();
        const sheet = doc.sheetsByIndex[0];
        const data = JSON.parse(req.body);
        await sheet.addRow({
            Nome:data.Nome,
            Whatsapp:data.Whatsapp,
            Email:data.Email,
            'Data do pedido': moment().format('DD/MM/YYYY, HH:mm:ss') // August 15th 2020, 11:16:08 am
        });
        resp.end(req.body); 
    }catch(err){
       console.log(err);
       resp.end('error')
    }

   
 }