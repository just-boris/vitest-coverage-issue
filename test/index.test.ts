import { test } from "vitest";
import { hello } from "../lib/index.js";

test("prints hello", () => {
  hello();
});
