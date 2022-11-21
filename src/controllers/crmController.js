import mongoose from 'mongoose';
import { ContactSchema } from '../models/crmModel';
import bookHelper from '../helpers/bookHelper'

const Contact = mongoose.model('Contact', ContactSchema) //ici on est en train d'utiliser ce qui à été créer au model 

const addnewContact = (req, res) => {
    let newContact = new Contact(req.body);

    newContact.save((err, contact) => {
        if (err) {
            res.send(err);
        }
        res.json(contact);
    })
}
const getContacts = (req, res) => {
   Contact.find({}, ((err,r) => {
        return res.json(r)
    }))
}

const getSingleContact = (req,res) => {
    Contact.find({firstName: req.params.firstName}, (err, contact) => {
        if (err) {
            res.send(err);
        }
        res.json(contact);
    })
}

const changeContact = (req, res) => {
    Contact.findOneAndUpdate({ firstName: req.params.firstName}, req.body, { new: true, useFindAndModify: false}, (err,contact) =>{
        if(err){
            res.send(err);
        }
        res.json(contact);
    });
}

const deleteContact = (req, res) => {
    Contact.remove({firstName: req.params.firstName}, (err) => {
        if(err) {
            res.send(err);
        }
        res.json({ message: 'successfully deleted contact'});
    })
}

module.exports  = {
   addnewContact,
   getContacts,
   changeContact,
   deleteContact,
   getSingleContact
}
