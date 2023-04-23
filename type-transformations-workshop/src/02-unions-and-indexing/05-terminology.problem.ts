/**
 * It's important to understand the terminology around unions:
 *
 * One of the type declarations below is a union.
 * One of the type declarations below is a discriminated union.
 * One of the type declarations below is an enum.
 *
 * Which is which?
 *
 * C is an ENUM
 * B is a union
 * A is discriminated union
 */

type A =
  | {
      type: "a";
      a: string;
    }
  | {
      type: "b";
      b: string;
    }
  | {
      type: "c";
      c: string;
    };

const reducerWithDiscriminatedUnionType = (action: A) => {
  if (action.type === "a") {
    return action.a;
  }

  if (action.type === "b") {
    return action.b;
  }

  if (action.type === "c") {
    return action.c;
  }

  return null;
};

type B = "a" | "b" | "c";

enum C {
  A = "a",
  B = "b",
  C = "c",
}

export {};
