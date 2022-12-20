import React from 'react'
import axios from 'axios';
import {useEffect, useState} from 'react';
import {Link} from  'react-router-dom';

const Display = () => {
    const [list, setList] = useState([])
    useEffect(()=>{
        axios.get(`http://localhost:8000/api/all`)
            .then(res=>{
                console.log(res.data);
                setList(res.data)
            })
            .catch(err=>console.log(err));
    },[]);


    return (
    <div className='display-table'>
        <p className='title-text'>These Pets are looking for a good home</p>
                <table >
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Type</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>                              
                    {
                    list.map((pet,index)=>{
                        return <tr key={index}>
                            <td>{pet.name}</td>
                            <td>{pet.type}</td>
                            <td> <Link to={`/info/${pet._id}`}> Info </Link> | <Link to={`/info/update/${pet._id}`}>Update</Link></td>
                                </tr>
                                })
                    }
                    </tbody>
                </table>
    
    </div>
    )
}

export default Display