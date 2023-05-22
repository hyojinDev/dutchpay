import { ValuesType } from "utility-types";

export const PATH = {
  CREATE_GROUP: "/groups",
  ADD_MEMBERS: "/groups/:guid/members",
  EXPENSE_MAIN: "/groups/:guid/expenses",
} as const;
export type PATH = ValuesType<typeof PATH>;
