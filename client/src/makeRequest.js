import axios from "axios";

export const makeRequest = axios.create({
  baseURL: `http://localhost:1337/api`,
  headers: {
    Authorization:
      "bearer " +
      "f6b27b74dd76325d1a901fe689ef555cc4e28f2a4c274298988051873b8217b10f866abdee6c1515d04daa2849755881d45ad7b70d30a3d4f8796d590352a91360d4dbc2fb058be081f05ba304eb8e1a16fa20a92c0c5fab922f375bb5bdfd7bf172720e986a453b0ad2dd7fa3f52ae43a7c90c5e8f1bbc810274139285875da",
  },
});
