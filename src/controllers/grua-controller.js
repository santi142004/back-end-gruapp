const { userData } = require('../data/datas');
const path = require('path');
const fs = require('fs');

const addGrua = async (req, res) => {
    console.log('Agregando grúa');
    try {
       
        const gruaInfo = req.body;
        console.log('Información de la grúa:', gruaInfo);
        
        const clienteId = gruaInfo.clienteId;
        console.log('ID del cliente:', clienteId);
        userData.addGrua(gruaInfo, clienteId, (err, _) => {
            if (err) {
                console.error('Error al agregar la grúa:', err.message);
                res.status(500).json({ error: 'Error al agregar la grúa' });
            } else {
                console.log('Grúa agregada exitosamente');
                res.status(201).json({ message: 'Grúa agregada exitosamente' });
            }
        });
    } catch (error) {
        console.error('Error al procesar la solicitud:', error.message);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
    
};


module.exports = { addGrua };