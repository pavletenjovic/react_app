"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
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
});
exports.default = mongoose_1.default.model('Person', Person, 'person');
//# sourceMappingURL=person.js.map