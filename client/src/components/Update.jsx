import React, {useState} from 'react'
import axios from 'axios'
import {useParams, useNavigate}  from 'react-router-dom'
import { useEffect } from 'react';

const Update = () => {
    const {id} =useParams();
    // const [id,setId] =useState();
    const [name,setName] = useState("");
    const [type,setType] = useState("");
    const [description, setDescription] = useState("");
    const [skill1, setSkill1] = useState("");
    const [skill2, setSkill2] = useState();
    const [skill3, setSkill3] = useState("");
    const [errors, setErrors] = useState("");
    const navigate = useNavigate();
    


    useEffect(()=>{
        axios.get(`http://localhost:8000/api/pet/${id}`)
            .then(res=>{
                console.log(res.data)
                setName(res.data.name)
                setType(res.data.type)
                setDescription(res.data.description)
                setSkill1(res.data.skill1)
                setSkill2(res.data.skill2)
                setSkill3(res.data.skill3)

            })
            .catch(err=>console.log(err));
    },[])


    const onSubmitHandler = (e) =>{
        e.preventDefault();
        axios.put(`http://localhost:8000/api/pet/${id}`,{
            name,
            type,
            description,
            skill1,
            skill2,
            skill3
        })
        .then(res=>{
            console.log(res);
            console.log(res.data)
            navigate("/");
        })
        .catch((err)=>{
            console.log(err)
            console.log(err.response.data.error.errors);
            setErrors(err.response.data.error.errors);
        });
    }
    return (
        <div className='Form-box'>
            <div className="header">
            <p>Update your pet information</p>
            </div>


            <form className='form-wrapper' onSubmit={onSubmitHandler}>
                <div className="form-inner-box">
                <div className="form-categories">

                <div>
                <label>Name:</label>
                {errors.name ?
                    <p style={{color:"red"}}>{errors.name.message}</p>
                    : null}
                <input type="text"value={name} 
                onChange={(e)=>setName(e.target.value)}
                />
                </div>
                
                <div>
                <label>Type:</label>
                {errors.type ?
                    <p style={{color:"red"}}>{errors.type.message}</p>
                    : null}
                <input type="text" value={type}
                onChange={(e)=>setType(e.target.value)}
                />
                </div>
                
                <div>
                <label>Description:</label>
                {errors.description ?
                    <p style={{color:"red"}}>{errors.description.message}</p>
                    : null}
                <input type="text" value={description}
                onChange={(e)=>setDescription(e.target.value)}
                />
                </div>
                </div>
                
                
                <div className="reward-box">
                    <h2>Skills (optional):</h2>
                    <p></p>

                <div>
                <label>Skill 1:</label>
                {errors.skill1 ?
                    <p style={{color:"red"}}>{errors.skill1.message}</p>
                    : null}
                <input type="text" value={skill1}
                onChange={(e)=>setSkill1(e.target.value)}/>
                </div>
                
                <div>
                <label>Skill 2:</label>
                <input type="text" value={skill2}
                onChange={(e)=>setSkill2(e.target.value)}/>
                </div>
                
                <div>
                <label>Skill 3:</label>
                <input type="text" value={skill3}
                onChange={(e)=>setSkill3(e.target.value)}/>
                </div>
                </div>
                </div>
                
                <div className="btn"> 
                    <a href='/'><input type='Submit'/></a>
                </div>
            </form>

        </div>
    )

}

export default Update