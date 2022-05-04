const {
    users,
} = require('../../models');


async function userRegister(param) {
    try {
        
    } catch (error) {
        return {
            err: true,
            msg: error.message
        }
    }
}

async function userLogin(param) {
    try {

       
    } catch (error) {
        console.log(error);
        return {
            err: true,
            msg: error,
        }
    }
}

module.exports = {
    userRegister,
    userLogin
};
