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

Extracting values from discriminated unions

- Allows you to extract certain types from a discriminated union

- Provide the type and a property which contains a unique value e.g. {type: "click"}

*/
type ClickEvent = Extract<Event, { type: "click" }>;
type ClickEventA = Extract<Event, { event: MouseEvent }>;
type ClickEventB = Extract<Event, { type: "click" }>;

type tests = [Expect<Equal<ClickEvent, { type: "click"; event: MouseEvent }>>];
