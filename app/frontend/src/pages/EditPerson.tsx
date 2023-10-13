import React, { useState, useEffect } from 'react';

import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const EditPerson = () =>{
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [city, setCity] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [loading, setLoading] = useState(false);
    const {id} = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        setLoading(true);
        axios.get(`http://localhost:4000/${id}`)
        .then((response) => {
            setName(response.data.Name);
            setSurname(response.data.Surname);
            setCity(response.data.City);
            setAddress(response.data.Address);
            setPhone(response.data.Phone);
            setLoading(false);
          }).catch((error) => {
            setLoading(false);
            alert('error');
            console.log(error);
          });
      }, [])

    const handleEditPerson = () => {
        const data = {
            Name: name,
            Surname: surname,
            City: city,
            Phone: phone,
            Address: address,
        };
        setLoading(true);
        axios
          .put(`http://localhost:4000/${id}`, data)
          .then(() => {
            setLoading(false);
            navigate('/');
          });
          
      };
    
    return(
        
        <div>
            <div className='naslov'><h2>Edit a person</h2></div>
            {loading ? (
                <div></div>
            ):(
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
                <button onClick={handleEditPerson}>
                  Save
                </button>
              </div>
            )}
        </div>
        
    )
}

export default EditPerson