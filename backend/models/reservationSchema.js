
import mongoose from 'mongoose';
import validator from 'validator';


const reservationSchema = new mongoose.Schema({
    firstName : {
        type: String,
        required: true,
        minLength:[2, "First name must contain atleast 2 charecters!!!"],
        maxLength:[30, "first name must contain only 30 Characters!!!!"]
    },
    lastName : {
        type: String,
        required: true,
        minLength:[2, " Last name must contain atleast 2 charecters!!!"],
        maxLength:[30, "Last name must contain only 30 Characters!!!!"]
    },
    email :{
        type: String,
        required: true,
        validate:[ validator.isEmail, "Provide valid email!"],

    },
    phone :{
        type : String,
        required: true,
        minLength:[10, "Phone number must contains only 10 digits"],
        maxLength:[10, "Phone number must contains only 10 digits"],
    },
    time:{
        
        type: String,
        required: true,
    },
    date:{
        
        type: String,
        required: true,
    }
})

export const Reservation = mongoose.model( "Reservation", reservationSchema);