import { api } from "../http/axios";
import { URL } from "./constants";

export const announcements = {
  get: async (query: string) => {
    const { data } = await api.get(`${URL.ANNOUNCEMENTS}/${query}`);
    return data;
  },
};
