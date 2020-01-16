const axios = require('axios')
const { ObjectId } = require('mongoose').Types.ObjectId;
const Dev = require('../models/Dev')
const parteStringAsArray = require('../utils/parseStringAsArray')

// Exibir uma lista de Devs
exports.index = async (request, response) => {
        const devs = await Dev.find({})
        return response.json(devs)
}

//Criar novos Devs
exports.store = async (request, response) => {
    const { github_username, techs, latitude, longitude } = request.body

    let dev = await Dev.findOne({github_username})

    if(!dev) {
        const gitApiDatas = await axios.get(`https://api.github.com/users/${github_username}`)
        if(gitApiDatas.data){
            const { name = login, avatar_url, bio} = gitApiDatas.data
        
            const techsArray = parteStringAsArray(techs)
            
            const location = {
                type: 'Point',
                coordinates: [longitude, latitude]
            }
            
            dev = await Dev.create({
                name,
                github_username,
                bio,
                avatar_url,
                techs: techsArray,
                location
            })
    
            return response.json(dev)
        }else{
            return response.status(404).json({ message: 'Username not found at Github. Cheack this name' })
        }
        
    }else{
        return response.status(404).json({ message: 'User already registered' })
    }
        
}

//Atualizar Devs
exports.update = async (request, response) => {
    const id = request.params.id
    const { name, avatar_url, bio, techs, latitude, longitude } = request.body

    const techsArray = parteStringAsArray(techs)
      
    try{
        if(ObjectId.isValid(id)){
            var dev = await Dev.findOneAndUpdate(
                {_id: id},
                {
                    $push: {techs: techsArray},
                    $set: {
                        name,
                        avatar_url,
                        bio,
                        latitude,
                        longitude
                    }
                },
            );
            return response.status(200).send({ messa: 'User Updated' })         
         }else{
            return response.status(404).json({ message: 'Invalid Object id' })
         }
    }catch(err){
        return response.status(404).json({ message: `Error to get user: ${err}` })
    }
    
    
}

//Deletar Devs
exports.destroy = async (request, response) => {
    const id = request.params.id
    const key = request.params.secretkey

    try{
        if(key && key === process.env.SECRET_KEY_DELETE){
            if(ObjectId.isValid(id)){
                var dev = await Dev.findByIdAndRemove({_id: id});
                return response.status(200).send({ messa: 'User Deleted' })
             }else{
                return response.status(404).json({ message: 'Invalid Object id' })
             }
        }else{
            return response.status(401).json({ message: 'User not Allowed' })
        }
    }catch(err){
        return response.status(404).json({ message: `Error to get user: ${err}` })
    }
}