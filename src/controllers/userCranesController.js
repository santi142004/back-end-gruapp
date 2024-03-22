const { userData } = require('../data/datas');

// Obtener las grúas del usuario por su ID
const getUserCranes = (req, res) => {
  const userId = req.params.id; // Obtener el ID del usuario de los parámetros de la solicitud

  // Utilizar el método para obtener las grúas del usuario desde userData
  userData.obtenerGruasUsuario(userId, (err, gruas) => {
    if (err) {
      return res.status(500).json({ error: 'Error interno del servidor' });
    }

    res.json(gruas);
  });
};

module.exports = {
  getUserCranes,
};
