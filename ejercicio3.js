// 3) Inserción y actualización de varios registros. 

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
const user1 = await User.create({
    firstName: "Miguel",
    lastName: "Merentiel"
})

const user2 = await User.create({
    firstName: "Edinson",
    lastName: "Cavani"
})

// Atualización de registros
await user1.update({
    lastName: 'Abuelo',
    where: {
        lastName: 'Merentiel'
    }
})

await user2.update({
    lastName: 'Rodriguez',
    where: {
        lastName: 'Cavani'
    }
})