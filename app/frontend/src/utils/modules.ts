import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:8000/",
});

export const partitionData = (data: any[], size: number) => {
  const initialData = [...data]
  const result: any[] = []
  while (initialData.length !== 0) {
    result.push(initialData.splice(0, size))
  }
  return result
}

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
