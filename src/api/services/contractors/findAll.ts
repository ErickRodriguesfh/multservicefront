import { Contractor } from "../../../types/contractor";

export const fetchUsers = async (): Promise<Contractor[]> => {
  const response = await fetch("http://localhost:3000/contractors");
  return await response.json();
};
