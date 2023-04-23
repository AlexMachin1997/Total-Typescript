import { Equal, Expect } from "../helpers/type-utils";

export type Event =
  | {
      type: "click";
      event: MouseEvent;
    }
  | {
      type: "focus";
      event: FocusEvent;
    }
  | {
      type: "keydown";
      event: KeyboardEvent;
    };

/*

Excluding values from discriminated unions

- Allows you to exclude certain types from a discriminated union

- Provide the type and a property which contains a unique value e.g. {type: "click"}

*/
type NonKeyDownEvents = Exclude<Event, { type: "keydown" } | { type: "click" }>;

type tests = [
  Expect<
    Equal<
      NonKeyDownEvents,
      // | { type: "click"; event: MouseEvent }
      { type: "focus"; event: FocusEvent }
    >
  >
];
