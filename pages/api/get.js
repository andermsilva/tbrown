import {GoogleSpreadsheet} from 'google-spreadsheet';
import moment from 'moment';
const doc = new GoogleSpreadsheet(process.env.SHEET_DOC_ID) ;

const fromBase64 = value =>{
    const buff = Buffer.from(value,'base64');
    return buff.toString('ascii');
}


export default async(req,resp) =>{

    try{
        await doc.useServiceAccountAuth({
            client_email: process.env.SHEET_CLIENT_EMAIL,
            private_key: fromBase64(process.env.SHEET_PRIVATE_KEY)
        });
        await doc.loadInfo();
        const sheet = doc.sheetsByIndex[1];
        await sheet.loadCells('A2:B2');
        const mostrarConfigCell= sheet.getCell(1,0);
        const textoCell = sheet.getCell(1,1);

        resp.end(JSON.stringify({
            config: mostrarConfigCell.value === true,
            message: textoCell.value
    
        }))
        
    }catch(err){
        resp.end(JSON.stringify({
            config: false,
            message: ''
         
        }));
        console.log(err)
    }


}