import {commonRequest } from "./axiosCall.js";
import { BASE_URL } from "./helper.js";

export const handleUserContactDetailForm = async (data) => {
  return await commonRequest('POST', `${BASE_URL}/client/contact`, data);
};