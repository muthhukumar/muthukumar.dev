import { composeToBoolean } from "./utils";

describe("composeToBoolean convert the string or boolean value to actual boolean", () => {
  test("It should return true if the passed value is 'true'	", () => {
    expect(composeToBoolean("true")).toBeTruthy();
  });
});
