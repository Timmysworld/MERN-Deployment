import React,{useState , useEffect} from 'react'
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'


const Info = () => {
    const [item, setItem] = useState({})
    const navigate = useNavigate() 
    const {id} = useParams();
    useEffect(()=>{
        axios.get(`http://localhost:8000/api/pet/${id}`)
            .then(res=>{
                console.log(res.data);
                setItem(res.data)
            })
            .catch(err=>console.log(err));
    },[]);

    const deletePet = ()=>{
        axios.delete(`http://localhost:8000/api/pet/`+ id)
            .then(res=>{
                navigate('/');
            })
            .catch(err=>console.log(err))
    }
    return (
        <>
            Details about {item.name} <button onClick={deletePet}>Adopt   {item.name}</button>

            <h3>Type:</h3>
            <p>{item.type}</p>

            <h3>Description</h3>
            <p>{item.description}</p>

            <h3>Skills</h3>
            <p>{item.skill1}</p>
            {
                (item.skill2) ? <p>{item.skill2}</p> : null

            }
            {
                (item.skill3) ? <p>{item.skill3}</p> : null
            }

        </>
    )
}

export default Info