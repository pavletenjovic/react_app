"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const mongoose_1 = __importDefault(require("mongoose"));
const person_1 = __importDefault(require("./models/person"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
mongoose_1.default.connect('mongodb://127.0.0.1:27017/react_app');
const connection = mongoose_1.default.connection;
connection.once('open', () => {
    console.log('db connection ok');
});
const router = express_1.default.Router();
app.get('/', (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const persons = yield person_1.default.find({});
    return response.json({
        data: persons
    });
}));
app.get('/:id', (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = request.params;
    const persons = yield person_1.default.findById(id);
    return response.json(persons);
}));
app.post('/createPerson', (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    if (request.body.name && request.body.surname
        && request.body.city && request.body.address
        && request.body.phone) {
        const newPerson = {
            Name: request.body.name,
            Surname: request.body.surname,
            City: request.body.city,
            Address: request.body.address,
            Phone: request.body.phone,
            CreatedDate: request.body.createdDate
        };
        yield person_1.default.create(newPerson);
        return response.send("ok");
    }
}));
app.put('/:id', (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = request.params;
    const result = yield person_1.default.findByIdAndUpdate(id, request.body);
    if (result) {
        return response.send("ok");
    }
    else {
        return response.send("bad");
    }
}));
app.delete('/:id', (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('usao');
    const { id } = request.params;
    const result = yield person_1.default.findByIdAndDelete(id);
    if (result) {
        return response.send("ok");
    }
    else {
        return response.send("bad");
    }
}));
app.use('/', router);
app.listen(4000, () => console.log(`Express server running on port 4000`));
//# sourceMappingURL=server.js.map