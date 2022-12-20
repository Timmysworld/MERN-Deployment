// const { Request } = require('express');
const PetShelterController = require('../controller/PetShelter.controller');

module.exports = app => {
    app.get('/api/all',PetShelterController.getPet);

    //CREATE
    app.post('/api/pet', PetShelterController.createPet);

    //READ 
    app.get('/api/pet/:id',PetShelterController.getAPet);

    //UPDATE
    app.put('/api/pet/:id',PetShelterController.updatePet);

    //DELETE
    app.delete('/api/pet/:id',PetShelterController.deletePet);

}