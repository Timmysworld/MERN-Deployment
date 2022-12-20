const PetShelter = require('../models/PetShelter.model');

const getPet = (req, res)=>{
    PetShelter.find().sort([["type",1]])
    //.sort(["attribute", 1= ascending -1= descending])
        .then((allPet)=>res.json(allPet))
        .catch(err=> response.status(400).json({
            message: "Oh no! Something went wrong!", error: err
        }));
    
};

const createPet = (request, response) => {
    PetShelter.create(request.body)
        .then(pet=>response.json(pet))
        .catch(err =>response.status(400).json({
            message:"Oh no! Something went wrong!", error:err
        }));
};

const getAPet = (request, response) => {
    PetShelter.findOne({_id:request.params.id})
        .then(pet=>response.json(pet))
        .catch(err => response.status(400).json({ message: "Oh no! Something went wrong!", error: err }));
};

const updatePet =(request,response) => {
    PetShelter.findOneAndUpdate({_id:request.params.id},
    request.body,{new:true,runValidators:true})
        .then(pet=>response.json(pet))
        .catch(err => response.status(400).json({ message: "Oh no! Something went wrong!", error: err }));
};

const deletePet =(request, response) =>{
    PetShelter.deleteOne({_id:request.params.id})
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.status(400).json({ message: "Oh no! Something went wrong!", error: err }));
}

module.exports ={
    getPet,
    createPet,
    getAPet,
    updatePet,
    deletePet,
}