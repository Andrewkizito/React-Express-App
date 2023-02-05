import axios from "axios";

export const api = axios.create({
  baseURL: "http://192.168.128.181:8000/",
  withCredentials: true,
});

export const updateData = (
  field: string,
  value: string,
  updateFunction: Function
) => {
  updateFunction((prevState: any) => ({
    ...prevState,
    [field]: value,
  }));
};
