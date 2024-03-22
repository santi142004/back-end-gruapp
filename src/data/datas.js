const mysql = require('mysql2');
const path = require('path');
const fs = require('fs');

const database = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'santi14',
  database: 'GruappDta',
});

class userData {
  static addClient(user, callback) {
    const query = "INSERT INTO clients (user, email, password, phone) VALUES (?, ?, ?, ?)";
    database.query(query, [user.user, user.email, user.password, user.phone], (err, result) => {
      if (err) {
        console.error("Error al registrar el cliente: " + err.message);
        callback(err, false);
      } else {
        const nuevoClienteId = result && result.insertId;
        console.log("Cliente registrado exitosamente. ID: " + nuevoClienteId);
        callback(null, true, nuevoClienteId);
      }
    });
  }
  static addGrua(grua, clienteId, callback) {
    const query = "INSERT INTO gruas (marca, modelo, capacidad, whatsapp, ubicacion, foto_path, cliente_id ) VALUES (?, ?, ?, ?, ?, ?, ?)";
    const values = [grua.marca, grua.modelo, grua.capacidad, grua.whatsapp, grua.ubicacion, grua.foto, clienteId];
  
    database.query(query, values, (err, result) => {
      if (err) {
        console.error("Error al agregar la grúa: " + err.message);
        callback(err, false);  // Enviar false en caso de error
      } else {
        const nuevaGruaId = result && result.insertId;
        console.log("Grúa agregada exitosamente. ID: " + nuevaGruaId);
        callback(null, true, nuevaGruaId);  // Enviar true y la nuevaGruaId en caso de éxito
      }
    });
  }

  static obtenerInformacionUsuario(id, callback) {
    const query = 'SELECT * FROM clients WHERE id = ?';
    database.query(query, [id], (err, result) => {
      if (err) {
        console.error('Error al obtener la información del usuario: ' + err.message);
        callback(err, null);
      } else if (result.length === 0) {
        callback(null, null);
      } else {
        const usuario = result[0];
        callback(null, usuario);
      }
    });
  }

  static login(user, callback) {
    const query = 'SELECT * FROM clients WHERE email = ? AND password = ?';
    database.query(query, [user.email, user.password], (err, result) => {
      if (err) {
        console.error('Error al autenticar el usuario: ' + err.message);
        callback(err, null);
      } else if (result.length === 0) {
        callback(null, null);
      } else {
        const user = result[0];
        callback(null, user);
      }
    });
  }

  static obtenerGruas(callback) {
    const query = 'SELECT * FROM gruas';

    database.query(query, (err, result) => {
      if (err) {
        console.error('Error al obtener grúas desde la base de datos:', err.message);
        callback(err, null);
      } else {
        callback(null, result);
      }
    });
  }

  

}



module.exports = {
  userData
};