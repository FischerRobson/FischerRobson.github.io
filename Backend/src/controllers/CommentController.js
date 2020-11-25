const crypto = require('crypto')
const connection = require('../database/connection')

module.exports = {
    async create(req, res) {
        const { name, date, email, phone, comment } = req.body

        const id = crypto.randomBytes(4).toString('HEX')
    
        await connection('comments').insert({
             id, 
             name,
             date,
             email,
             phone,
             comment
         })
    
        return res.json({id})
    },

    async index (req, res) {
        const comments = await connection('comments').select('*')
    
        return res.json(comments)
    },

    async detail (req, res) {

        const id = req.params.id

        const comment = await connection('comments').select('*').where('id', id)
    
        return res.json(comment)
    }
}
