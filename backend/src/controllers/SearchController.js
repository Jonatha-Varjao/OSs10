const Dev = require('../models/Dev');
const parseStringAsArray = require('../utils/parseStringAsArray');

module.exports = {
    async index(req, res){
        // busca todos devs num raio
        // filtrar por tecnologias
        const { latitude, longitude, techs, maxDistance } = req.query;
        
        const techsArray = parseStringAsArray(techs);

        const devs = await Dev.find({ 
            techs: {
                $in: techsArray,
            },
            location: {
                $near: {
                    $geometry: {
                        type: 'Point',
                        coordinates: [longitude, latitude],
                    },
                    $maxDistance: maxDistance,
                },
            }
         })

        return res.json({ devs })
    }
}