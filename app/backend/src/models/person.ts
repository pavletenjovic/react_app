
import mongoose from 'mongoose'

const Schema = mongoose.Schema;

let Person = new Schema({
    Name: {
        type: String
    },
    Surname: {
        type: String
    },
    CreatedDate: {
        type: Date
    },
    City: {
        type: String
    },
    Address: {
        type: String
    },
    Phone: {
        type: String
    }
})

export default mongoose.model('Person', Person, 'person');