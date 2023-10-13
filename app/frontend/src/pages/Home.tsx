import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

const Home = () =>{
    const[persons, setPersons] = useState([]);
    const[loading, setLoading] = useState(false);
    useEffect(()=>{
        setLoading(true);
        axios.get('http://localhost:4000/').then((response)=>{
            setPersons(response.data.data);
            setLoading(false);
        });
    }, []);

    const handleDeletePerson = (personId) => {
        // Send a DELETE request to your backend API to delete the person
        axios.delete(`http://localhost:4000/${personId}`).then((response) => {
            setLoading(false);
            window.location.reload();
        });
      };
    return(
        <div>
            <div className='naslov'><h2>All persons</h2></div>
            <Link to='/createPerson'>
                Create Person
            </Link>
            <br />
            {
                loading ? (
                    <br />
                ):(
                    <table>
                        <thead>
                            <th>Name</th>
                            <th>Surname </th>
                            <th>CreatedDate </th>
                            <th>City </th>
                            <th>Address </th>
                            <th>Phone</th>
                            <th>Update/Delete</th>
                        </thead>
                        <tbody>
                            {persons.map((person, index)=>(
                                <tr key={person._id}>
                                    <td>{person.Name}</td>
                                    <td>{person.Surname}</td>
                                    <td>{new Date(person.CreatedDate).toString()}</td>
                                    <td>{person.City}</td>
                                    <td>{person.Address}</td>
                                    <td>{person.Phone}</td>
                                    <td>
                                        <Link to={`/editPerson/${person._id}`}>Edit</Link>
                                        <button onClick={() => handleDeletePerson(person._id)}>
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))
                            }
                        </tbody>
                    </table>
                )
            }
        </div>
    )
}

export default Home