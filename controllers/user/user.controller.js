  
  // const {
  //   successResponse,
  //   errorResponse,
  // } = require('../../helpers/helpers');
  const { isEmpty } = require('lodash')
  
  
  exports.register = async (req, res) => {
    try {
      // const param = { ...req.body, ...req.params, ...req.query };
      // const user = await userRegister(param);
      // if (!isEmpty(user) && user.err){
      //   return errorResponse(req, res, user.msg, 400)
      // }
      // return successResponse(req, res, user);
    } catch (error) {
      console.log(error);
      // return errorResponse(req, res, error, 400)
    }
  };

  
  exports.login = async (req, res) => {
    try {
      // const param = { ...req.body, ...req.params, ...req.query };
      // const user = await userLogin(param);
      // if (!isEmpty(user) && user.err){
      //   return errorResponse(req, res, user.msg, 401)
      // }
      // return successResponse(req, res, user.msg);
    } catch (error) {
      // return errorResponse(req, res, error.message);
    }
  };

  
  
  
  