import { LoudGreeter } from "../src/LoudGreeter";

describe("LoudGreeter Class", () => {
  test("Inherits the greeting property from parent", () => {
    const newLoudGreeter: LoudGreeter = new LoudGreeter("Howdy");
    expect(newLoudGreeter.greeting).toBe("Howdy");
  });
  test("greet is properly overwritten to account for extra", () => {
    const newLoudGreeter: LoudGreeter = new LoudGreeter("Howdy");
    expect(newLoudGreeter.greet("Mitch")).toBe("Howdy, Mitch!!");
  });
  test("add volume adds extra appropriately", () => {
    const newLoudGreeter: LoudGreeter = new LoudGreeter("Howdy");
    newLoudGreeter.addVolume();
    newLoudGreeter.addVolume();
    expect(newLoudGreeter.greet("Mitch")).toBe("Howdy, Mitch!!!!");
  });
});
