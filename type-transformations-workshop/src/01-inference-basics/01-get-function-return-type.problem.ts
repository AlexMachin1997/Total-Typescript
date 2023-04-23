import { Equal, Expect } from "../helpers/type-utils";

const myFunc = () => {
  return "hello";
};

/**
 * How do we extract MyFuncReturn from myFunc?
 *
 * - Use the ReturnType typescript utility
 * - Use the typeof keyword to generate the return type of the myFunc
 * - Pass in the typeof myFunc to the ReturnType
 */
type MyFuncReturn = ReturnType<typeof myFunc>;

type tests = [Expect<Equal<MyFuncReturn, string>>];
