import { ValuesType } from "utility-types";
import { PATH } from "./path";

const replaceGuid = (route: string, guid: string) =>
  route.replace(":guid", guid);

export const ROUTE_UTILS = {
  ADD_MEMBERS: (guid: string) => replaceGuid(PATH.ADD_MEMBERS, guid),
  EXPENSE_MAIN: (guid: string) => replaceGuid(PATH.EXPENSE_MAIN, guid),
} as const;
export type ROUTE_UTILS = ValuesType<typeof ROUTE_UTILS>;
