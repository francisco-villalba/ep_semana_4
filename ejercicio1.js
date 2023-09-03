// 1) Inserción y actualización de un registro. 

import { Sequelize } from 'sequelize'

const sequelize = new Sequelize('semana4', 'root', 'root', {
    host: 'localhost',
    dialect: 'mariadb',
})

sequelize
    .authenticate()
    .then(() => console.log('Conexión a la base de datos estblecida.'))
    .catch(e => console.log('Error al conectarse a la base de datos: ', e))

class User extends Sequelize.Model { }

User.init({
    firstName: Sequelize.STRING,
    lastName: Sequelize.STRING
}, { sequelize, modelName: 'users' })

// Inserción de registro
const user = await User.create({
    firstName: "Juana",
    lastName: "Azurduy"
})

// Actualización de registro
await user.update({
    firstName: 'Emilia',
    where: {
        lastName: 'Azurduy'
    }
})