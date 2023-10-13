import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const CreatePerson = () =>{
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [city, setCity] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSavePerson = () => {
        const date = new Date();
        const data = {
            name,
            surname,
            city,
            phone,
            address,
            createdDate: date
        };
        setLoading(true);
        axios
          .post('http://localhost:4000/createPerson', data)
          .then(() => {
            setLoading(false);
            navigate('/');
          });
          
      };
    
    return(
        <div>
            <div className='naslov'><h2>Create a person</h2></div>
            <div className="form-container">
            <div>
                <label>Name</label>
                <input
                type='text'
                value={name}
                onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div>
                <label>Surname</label>
                <input
                type='text'
                value={surname}
                onChange={(e) => setSurname(e.target.value)}
                />
            </div>
            <div>
                <label>City</label>
                <input
                type='text'
                value={city}
                onChange={(e) => setCity(e.target.value)}
                />
            </div>
            <div>
                <label>Phone</label>
                <input
                type='text'
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                />
            </div>
            <div>
                <label>Address</label>
                <input
                type='text'
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                />
            </div>
            <button onClick={handleSavePerson}>
                Save
            </button>
            </div>
        </div>
    )
}

export default CreatePerson