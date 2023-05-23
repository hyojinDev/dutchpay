import { atom } from "recoil";

export const groupMembersState = atom<string[]>({
  key: "groupMembers",
  default: [],
});
