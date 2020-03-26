const connection = require('../database/connection');
//crypto - já vem no noje. serve para gerar criptografia, ou nesse caso que utilizaremos, gerar um id randomico
const crypto = require('crypto');

module.exports = {
    async index(request, response) {
        const ongs = await connection('ongs').select('*');
        
        return response.json(ongs);
    },

    async create(request, response) {
        //define quais campos irão salvar, assim garante que o usuário não envie dados que nós não queremos
        const { name, email, whatsapp, city, uf } = request.body;
        
        const id = crypto.randomBytes(4).toString('HEX');
        
        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf
        });

        return response.json({ id });
    }
}