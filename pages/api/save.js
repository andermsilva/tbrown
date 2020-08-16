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
           // private_key: '-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCWItS/0bsUt+RE\nl7mDd2M5Ve9SgzSxalkCi6BXCnEezTNwbkj07oQekMURkUb+HbJNdVYebwRKRfyk\naxiF2x6eFHPScds4k/UvcV2rhEjMmFnW8F6Z7RnDNgGKppjPUbsUMu5AfbHNmM7S\naxGp2hKQc9rYuSFoG/Oe0NiApcbBLLKEtf3Uz4svxkBPSs+W6L+aflA+GwMnQUg9\nb+S22biHGcQvb/XwaRH02vcZatMBQAA8kTl4EjSoks1QA+/im4TBGydsTB0iLrqJ\nZYNhNPloOty0oi1ZNriIYvbGCb5+wtEjqg1PyYtc7jhMN45cazhrMbZkeGLRLxh1\n7VvUZcmvAgMBAAECggEALI15hNLAKY3Id3Ju4sxy7XjK5Dl7UYq1j0PP+QRoPTO3\nqA2SKNz+5/MeB/CMmKxHVSUUwUNAiqnqJwCA7nfvxglbtX+EBm4hvEpv+Y3v7Ibp\nYhdCe3sYwg0st/BoOF2QnpXejdS/Brvp5BdRzo2gJK28q8OEXlitGtvu435OVNRy\nQhojz+xm5GP0FOvvzn7D3lfqAn/MEKlij5bip325vKQxwSkjAbcuGMJk7QGALRZ3\naB1jfhcwHnyyqepYhMmClzNheZNBj+/DhzzwefZjzGnI03A9jK5Gi+0/SUzeyxdx\nlCIVm6wuI31kYKNrM3j41f7i55gnVObi0mvzTLunQQKBgQDOgSpO3kCXO7RNXiNc\nSVP+CcjcweKXwMTxjCGFbks+Dqet42dZF87RU1biu1LlkTVQqHY7X6C97N7qsi6g\nas7KFPc++P6M5gikGnhw9aECLq8oJV16Ss2qmo1HRzcgfKCYv0j5unDQ7dVwk4Ec\neRvI/QAeCIYN5rJzWSUnPHvfPQKBgQC6HvkE3bQJUfdM3Llyvpf9T+VBbtKbaf6P\ncKECG8vbHFRpayqSYhqfnj62jCIS8gH91wRo1Jcv5H+IYxySI2wr3hUNCCTfswW2\ngyOE5x4NTWAKGuQD3etGqQUH+NF1JmHehMPvtBKSACmhhW5dXiXjR/iczVJHr6Tg\nLBFRcDobWwKBgQCZnmrLyvg/yNFjMKGbeI08ESlUWANpoqSfkAAr05Wzr5E7gUyT\ncWuQOrAK8RFE59XCj9+MYaIhR4G5FB4thecZW6lmNjKevE03Tt3EImXJStNQSSOV\n4unGfTyWBrtStoN9vebap8BfHF5IZeKJPOrXhKY+sVaQJssflfRWkN8RfQKBgCd7\nFnvPw7cOahUl5TjP8VHMtubwaUCKdXNcAut9lfq+wbEzCG7Q3LDrUoZKp5e5Om7s\nQ4UxQ3jnUZ5O1+qwFOwhSfnftmK1iQq0Or6ggCF2Pl8mYSPo2VW92NFeGKBvKeeX\n5jBc1GugGTSoJ0crB4J06+nnLAME4UakUnAiDFFtAoGBAMPOqa/23OWFyej6h7dv\nf+hlNIHd8PHUquXRkV0dBfKugDg2OC5DzFUuKfvZIBd57hZJbK3sesI+cel8ICtx\nuoYJDj/UZCUtAdfJ9W6aI3r35XdKxP4br6iizs1Rz8qi+g/46oByS6asZTh+sGF4\nL/js5fE+IgN9RDI+MDA6Ino5\n-----END PRIVATE KEY-----\n',
             private_key: fromBase64(process.env.SHEET_PRIVATE_KEY)
            
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