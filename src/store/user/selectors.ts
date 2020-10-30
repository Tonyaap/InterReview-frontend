import { storeState } from "./types";


export const selectToken = (state: storeState) => state.user.token;

export const selectUser = (state: storeState) => state.user;
