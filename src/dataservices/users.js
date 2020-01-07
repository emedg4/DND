const execProcedure = require('./base.js')
const procedures = require('./../utils/dbProcedures')

const createUser = async (payload) => {
    let userData = {}
    userData.id    = payload.body.userId,
    userData.pass  = payload.body.password,
    userData.email = payload.body.email,
    userData.h     = payload.h


}



module.exports = {
    createUser : createUser,
    deleteUser : deleteUser,
    modUser    : modUser,
    getUser    : getUser
}
