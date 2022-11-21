import express from 'express';
import routes from './src/routes/crmRoutes';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

dotenv.config();
const app = express();
const PORT = 4000;

//mongoose connection
mongoose.Promise = global.Promise; //ici sa dit d'attrendre pour un résultat quand on se connect a la db de mongo
mongoose.connect(process.env.DB_CONNECTION_STRING,{
   useNewUrlParser : true,
   useUnifiedTopology: true
}); //on se connect et si la db CRMdb exist pas ca va la créer


// bodyparser setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes(app);

app.get('/', (req, res) =>
    res.send(`Node and express server running on port ${PORT}`)
);

app.listen(PORT, () => 
    console.log(`Your server is running on port ${PORT}`)
);