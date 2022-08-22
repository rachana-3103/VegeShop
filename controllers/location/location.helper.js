const { locations } = require("../../models/index");
const { LOCATION_NOT_FOUND } = require("../../helpers/messages");
const {
  findAllLocation,
  deleteLocations,
  findLocationById,
  updateLocations,
} = require("../../Dao/location");

exports.addLocation = async (param) => {
  try {
    const locationObj = {
      user_id: param.user.id,
      latitude: param.latitude,
      longitude: param.longitude,
      name: param.name,
      address: param.address,
      is_favourite: true,
    };

    await locations.create(locationObj);
    return {
      err: false,
      data: null,
      msg: "location added Successfully.",
    };
  } catch (error) {
    return {
      err: true,
      msg: error.message,
    };
  }
};

exports.getLocation = async (param) => {
  try {
    const location = await findAllLocation(param.isFavourite, param.user.id);
    if (!location) {
      return {
        err: true,
        msg: LOCATION_NOT_FOUND,
      };
    }
    return {
      err: false,
      data: location,
      msg: "Location Details.",
    };
  } catch (error) {
    return {
      err: true,
      msg: error.message,
    };
  }
};

exports.deleteLocation = async (param) => {
  try {
    const location = await findLocationById(param.user.id, param.locationId);
    if (!location) {
      return {
        err: true,
        msg: LOCATION_NOT_FOUND,
      };
    } else {
      await deleteLocations(param.user.id, param.locationId);
    }

    return {
      err: false,
      data: null,
      msg: "Location deleted Successfully.",
    };
  } catch (error) {
    return {
      err: true,
      msg: error.message,
    };
  }
};

exports.updateLocation = async (param) => {
  try {
    const location = await findLocationById(param.user.id, param.locationId);
    if (!location) {
      return {
        err: true,
        msg: LOCATION_NOT_FOUND,
      };
    }

    const locationObj = {
      id: param.locationId,
      user_id: param.user.id,
      latitude: param.latitude,
      longitude: param.longitude,
      name: param.name,
      address: param.address,
    };
    await updateLocations(locationObj);
    return {
      err: false,
      data: null,
      msg: "location updated Successfully.",
    };
  } catch (error) {
    return {
      err: true,
      msg: error.message,
    };
  }
};

exports.getLocationDetails = async (param) => {
  try {
    const location = await findLocationById(param.user.id, param.id);
    return {
      err: false,
      data: location,
      msg: "Location Details.",
    };
  } catch (error) {
    return {
      err: true,
      msg: error.message,
    };
  }
};
