import mongoose, { Schema } from 'mongoose';

// Schema 
const QuetesSchema = Schema({
    title:String,
    text:String,
    by:{
        type:Schema.Types.ObjectId,
        ref:'user',
    }

})


// Quote 
const Quote = mongoose.model('Quote',QuetesSchema);

export default Quote;
