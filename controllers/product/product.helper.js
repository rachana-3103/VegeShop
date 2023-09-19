const Sequelize = require('sequelize');
const {
  PRODUCT_ALREADY_EXIST,
  GROUP_NOT_FOUND,
  CONTACT_PHONENUMBER_SAME,
} = require("../../helpers/messages");
const {
  findProductByName,
  findProductById,
  deleteGroups,
  updateGroups,
} = require("../../Dao/product");
const {products} = require("../../models/index");

async function addProduct(param) {
  try {
    const productData = await findProductByName(param.name);
    if (productData) {
      return {
        err: true,
        msg: PRODUCT_ALREADY_EXIST,
      };
    }
    const productObj = {
      name: param.name,
      details: param.details,
      unit: param.unit,
      price: param.price,
      no_of_stock:param.noOfStock,
      inventory: param.inventory,
      category: param.category,
    };

    await products.create(productObj);
    return {
      err: false,
      data: null,
      msg: "Product added Successfully.",
    };
  } catch (error) {
    return {
      err: true,
      msg: error.message,
    };
  }
}

async function listProduct(req) {
  try {
    let shop;
    if(req.query.category && !req.query.min_price && !req.query.max_price){
       shop = await products.findAll({
        where:{
          category:req.query.category
        },
        attributes: { exclude: ["createdAt", "updatedAt"] },
      });
    } 
    else if(req.query.min_price && req.query.max_price && !req.query.category){
      shop = await products.findAll({
       where:{
         price :{
          [Sequelize.Op.between]: [req.query.min_price, req.query.max_price],
         }
       },
       attributes: { exclude: ["createdAt", "updatedAt"] },
     });
   } 
   else if(req.query.min_price && req.query.max_price && req.query.category){
    shop = await products.findAll({
     where:{
       price :{
        [Sequelize.Op.between]: [req.query.min_price, req.query.max_price],
       },
       category:req.query.category
     },
     attributes: { exclude: ["createdAt", "updatedAt"] },
   });
 } 
    else {
      shop = await products.findAll({
        attributes: { exclude: ["createdAt", "updatedAt"] },
      });
    }
     
    return {
      err: false,
      data: shop,
      msg: "Product List.",
    };
  } catch (error) {
    return {
      err: true,
      msg: error.message,
    };
  }
}

async function getProductDetails(param) {
  try {
    const product = await findProductById(param.id);
    return {
      err: false,
      data: product,
      msg: "Product Details.",
    };
  } catch (error) {
    return {
      err: true,
      msg: error.message,
    };
  }
}

async function deleteGroup(param) {
  try {
    const group = await findGroupById(param.user.id, param.groupId);
    if (!group) {
      return {
        err: true,
        msg: GROUP_NOT_FOUND,
      };
    } else {
      await deleteGroups(param.user.id, param.groupId);
    }

    return {
      err: false,
      msg: "Group deleted Successfully.",
    };
  } catch (error) {
    return {
      err: true,
      msg: error.message,
    };
  }
}

async function updateGroup(param) {
  try {
    const group = await findGroupById(param.user.id, param.groupId);
    if (!group) {
      return {
        err: true,
        msg: GROUP_NOT_FOUND,
      };
    }
    let contactArray = [];
    for (const obj of param.contacts) {
      const conatactPhoneNumber = await param.contacts.find(
        (objNo) =>
          objNo.phone_number == obj.phoneNumber &&
          objNo.country_code == obj.countryCode
      );
      if (conatactPhoneNumber) {
        return {
          err: true,
          msg: CONTACT_PHONENUMBER_SAME,
        };
      }
      obj.phone_number = obj.phoneNumber;
      obj.country_code = obj.countryCode;

      delete obj.phoneNumber;
      delete obj.countryCode;
      contactArray.push(obj);
    }

    await updateGroups(param.user.id, param.groupId, contactArray, param.name);

    return {
      err: false,
      msg: "Group updated Successfully.",
    };
  } catch (error) {
    return {
      err: true,
      msg: error.message,
    };
  }
}

module.exports = {
  addProduct,
  listProduct,
  getProductDetails,
  deleteGroup,
  updateGroup,
};
