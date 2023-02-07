const { User } = require('../../db/models')
const bcrypt = require('bcrypt')


//register new users

const createUser = async (fullname, address, phone, email, pass, role) => {
    return User.create({
        fullname: fullname,
        address: address,
        phone: phone,
        email: email,
        password: bcrypt.hashSync(pass, 8),
        role: role
    })
}

module.exports = {
    createUser,
}