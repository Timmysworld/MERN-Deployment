const mongoose = require('mongoose');

const PetShelterSchema = new mongoose.Schema(
    {
        name:{
            type:String,
            required:[
                true,
                "Name is required"
            ],
            minlength:[
                3, "Must be at least 3 characters Long!"
            ]
        },
        type:{
            type:String,
            required:[
                true,
                "Type is required"
            ],
            minlength:[
                3, "Must be at least 3 characters Long!"
            ]
        },
        description:{
            type:String,
            required:[
                true,
                "Description is required"
            ],
            minlength:[
                3, "Must be at least 3 characters Long!"
            ]
        },
        skills:{
            type:[String],
            required:[
                true,
                "At least one skill is required"
            ],
            uniqueItems: true,
            minItems: 3
        },
        // skill2:{
        //     type:String
        // },
        // skill3:{
        //     type:String
        // },
        // rewards:{
        //     type:String,
        //     options:{
        //         required:[
        //             true,
        //             "Having a reward encourages you so add at least 1"
        //         ]
        //     }
        // }
    },{timestamps:true}

);

module.exports = mongoose.model('PetShelter',PetShelterSchema)