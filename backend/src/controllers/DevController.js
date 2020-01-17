const axios = require('axios');
const Dev = require('../models/Dev');
const parseStringAsArray = require('../utils/parseStringAsArray');

// index, store, show, update, destroy

/* TODO: 
    - Update User
        - techs, bio, avatar, name , location
    - Delete User (_id)
*/

module.exports = {
    
    async store(req, res) {
        const { github_user, techs, latitude, longitude } = req.body
        let dev = await Dev.findOne({ github_user });
                
        if (!dev) {
            const techsArray = parseStringAsArray(techs);
            const response = await axios.get(`https://api.github.com/users/${github_user}`)
            const { bio, avatar_url, name = login } = response.data

            const location = {
                type: 'Point',
                coordinates: [longitude, latitude]
            }

            dev = await Dev.create({
                github_user,
                name,
                avatar_url,
                bio,
                techs: techsArray,
                location
            })
        }

        return res.json(dev)
    },
    
    async update(req, res){
        console.log(req.params);
        const { techs, bio, avatar, name, latitude, longitude } = req.body
        const techsArray = parseStringAsArray(techs);
        // check if has any user
        
        // body validation
        
        // update user

        console.log(req.body);
        return res.json({})
    },

    async show(req, res) {

    },

    async index(req, res) {
        const devs = await Dev.find({}, {})
        return res.json(devs)
    }

};