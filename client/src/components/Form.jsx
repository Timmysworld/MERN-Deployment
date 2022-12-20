import React, {useState} from 'react'
import axios from 'axios'
import {useNavigate}  from 'react-router-dom'


const Form = () => {
    const [name,setName] = useState("");
    const [type,setType] = useState("");
    const [description, setDescription] = useState("");
    const [skills, setSkills] = useState([]);
    const [errors, setErrors] = useState("");
    const navigate = useNavigate();

    const onSubmitHandler = (e) =>{
        e.preventDefault();
        axios.post('http://localhost:8000/api/pet',{
            name,
            type,
            description,
            skills,
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
            <p>Add a new Pet for Adoption</p>
            </div>


            <form className='form-wrapper' onSubmit={onSubmitHandler}>
                <div className="form-inner-box">
                <div className="form-categories">
                <div>
                <label>Name:</label>
                {errors.name ?
                    <p style={{color:"red"}}>{errors.name.message}</p>
                    : null}
                <input type="text" 
                onChange={(e)=>setName(e.target.value)}
                />
                </div>
                
                <div>
                <label>Type:</label>
                {errors.type ?
                    <p style={{color:"red"}}>{errors.type.message}</p>
                    : null}
                <input type="text" 
                onChange={(e)=>setType(e.target.value)}
                />
                </div>

                <div>
                <label>Description:</label>
                {errors.description ?
                    <p style={{color:"red"}}>{errors.description.message}</p>
                    : null}
                <input type="text" 
                onChange={(e)=>setDescription(e.target.value)}
                />
                </div>
                </div>
                
                
                <div className="reward-box">
                    <h2>Skills (optional):</h2>
                <div>
                    {
                        (skills) 
                        ?
                            skills.map((item, i) => (<p>item</p>))
                        :
                        null
                    }
                <label>Skill 1:</label>
                {errors.skills ?
                    <p style={{color:"red"}}>{errors.skills.message}</p>
                    : null}
                <input type="text" 
                onChange={(e)=>setSkills(e.target.value.split(","))}/>
                </div>
                
                {/* <div>
                <label>Skill 2:</label>
                <input type="text" 
                onChange={(e)=>setSkills(e.target.value)}/>
                </div>
                
                <div>
                <label>Skill 3:</label>
                <input type="text" 
                onChange={(e)=>setSkills(e.target.value)}/>
                </div> */}

                </div>
                </div>
                
                <div className="btn"> 
                    <a href='/'><input type='Submit'/></a>
                </div>
            </form>

        </div>
    )
}

export default Form