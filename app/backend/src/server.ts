import express, { response } from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import person from './models/person';
import { request } from 'http';

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/react_app');

const connection = mongoose.connection;
connection.once('open', ()=>{
    console.log('db connection ok');
})

const router = express.Router();


app.get('/', async (request, response) =>{
    const persons = await person.find({});
    return response.json({
        data: persons
    });
})

app.get('/:id', async (request, response) =>{
    const {id} = request.params;

    const persons = await person.findById(id);
    return response.json(persons);
})

app.post('/createPerson', async (request, response)=>{
    if(
        request.body.name && request.body.surname
        && request.body.city && request.body.address 
        && request.body.phone 
    ){
        const newPerson ={
            Name: request.body.name,
            Surname: request.body.surname,
            City: request.body.city,
            Address: request.body.address,
            Phone: request.body.phone,
            CreatedDate: request.body.createdDate
        };
        await person.create(newPerson);
        return response.send("ok");
        
    }
})

app.put('/:id', async (request,response)=>{
    
    const {id} = request.params;

    const result = await person.findByIdAndUpdate(id, request.body);
    if(result){
        return response.send("ok");
    }
    else{
        return response.send("bad");
        }
    
})

app.delete('/:id', async(request, response)=>{
    console.log('usao');
    const {id} = request.params;
    const result = await person.findByIdAndDelete(id);
    if(result){
        return response.send("ok");
    }
    else{
        return response.send("bad");
        }
})

app.use('/', router);
app.listen(4000, () => console.log(`Express server running on port 4000`));