import axios from "axios";

const baseUrl = "http://localhost:5000/api";

export const getFarmers = (setFarmerList) => {
  axios.get(baseUrl + "/list").then((resp) => {
    const farmerListFromDB = resp.data.admins;
    setFarmerList(farmerListFromDB);
    return farmerListFromDB;
  });
};
export const addUser = (values) => {
  axios({
    method: "POST",
    url: baseUrl + "/register",
    data: values,
  });
};
