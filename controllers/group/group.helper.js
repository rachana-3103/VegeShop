const { groups } = require("../../models/index");

const {
  GROUP_ALREADY_EXIST,
  GROUP_NOT_FOUND,
  CONTACT_PHONENUMBER_SAME,
} = require("../../helpers/messages");
const {
  findGroupByName,
  findGroupById,
  deleteGroups,
  updateGroups,
} = require("../../Dao/group");

async function addGroup(param) {
  try {
    const groupData = await findGroupByName(param.user.id, param.name);
    if (groupData) {
      return {
        err: true,
        msg: GROUP_ALREADY_EXIST,
      };
    }
    let contactArray = [];
    for (const obj of param.contacts) {
      const conatactPhoneNumber = await param.contacts.find(
        (objNo) => objNo.phone_number == obj.phoneNumber
      );
      if (conatactPhoneNumber) {
        return {
          err: true,
          msg: CONTACT_PHONENUMBER_SAME,
        };
      }
      obj.phone_number = obj.phoneNumber;
      delete obj.phoneNumber;
      contactArray.push(obj);
    }

    const groupObj = {
      name: param.name,
      user_id: param.user.id,
      contacts: contactArray,
      no_of_contact: param.contacts.length,
    };

    await groups.create(groupObj);
    return {
      err: false,
      data: null,
      msg: "Group added Successfully.",
    };
  } catch (error) {
    return {
      err: true,
      msg: error.message,
    };
  }
}

async function listGroup(param) {
  try {
    const group = await groups.findAll({
      where: {
        user_id: param.user.id,
      },
      attributes: { exclude: ["createdAt", "updatedAt", "contacts"] },
    });
    return {
      err: false,
      data: group,
      msg: "Group List.",
    };
  } catch (error) {
    return {
      err: true,
      msg: error.message,
    };
  }
}

async function getGroupDetails(param) {
  try {
    const group = await findGroupById(param.user.id, param.id);
    return {
      err: false,
      data: group,
      msg: "Group Details.",
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
        (objNo) => objNo.phone_number == obj.phoneNumber
      );
      if (conatactPhoneNumber) {
        return {
          err: true,
          msg: CONTACT_PHONENUMBER_SAME,
        };
      }
      obj.phone_number = obj.phoneNumber;
      delete obj.phoneNumber;
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
  addGroup,
  listGroup,
  getGroupDetails,
  deleteGroup,
  updateGroup,
};
