import { Equal, Expect } from "../helpers/type-utils";

export const programModeEnumMap = {
  GROUP: "group",
  ANNOUNCEMENT: "announcement",
  ONE_ON_ONE: "1on1",
  SELF_DIRECTED: "selfDirected",
  PLANNED_ONE_ON_ONE: "planned1on1",
  PLANNED_SELF_DIRECTED: "plannedSelfDirected",
} as const;

// Access the enum values via there individual indexes
export type IndividualProgram =
  | typeof programModeEnumMap["ONE_ON_ONE"]
  | typeof programModeEnumMap["SELF_DIRECTED"]
  | typeof programModeEnumMap["PLANNED_ONE_ON_ONE"]
  | typeof programModeEnumMap["PLANNED_SELF_DIRECTED"];

// Access multiple enum values via a union of possible indexes e.g. "ONE_ON_ONE" -> "1on1"
type a = typeof programModeEnumMap[
  | "ONE_ON_ONE"
  | "SELF_DIRECTED"
  | "PLANNED_ONE_ON_ONE"
  | "PLANNED_SELF_DIRECTED"];

type tests = [
  Expect<
    Equal<
      IndividualProgram,
      "1on1" | "selfDirected" | "planned1on1" | "plannedSelfDirected"
    >
  >
];
