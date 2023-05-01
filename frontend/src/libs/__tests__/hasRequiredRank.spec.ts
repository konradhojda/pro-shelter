import each from "jest-each";
import { hasRequiredRank } from "../hasRequiredRank";

each([
  ["admin", "user", false],
  ["logged_user", "logged_user", true],
  ["user", "logged_user", true],
]).test("returns the result of adding %s to %s", (a, b, expected) => {
  expect(hasRequiredRank(a, b)).toBe(expected);
});
