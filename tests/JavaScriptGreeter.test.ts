import { JavaScriptGreeter } from "../src/JavaScriptGreeter";

describe("JavaScriptGreeter", () => {
  test("Inherits the greeting property from parent", () => {
    const newJavaScriptGreeter: JavaScriptGreeter = new JavaScriptGreeter(
      "Howdy"
    );
    expect(newJavaScriptGreeter.greeting).toBe("Howdy");
  });
  test("Inherits the greeting property from parent", () => {
    const newJavaScriptGreeter: JavaScriptGreeter = new JavaScriptGreeter(
      "Howdy"
    );
    expect(newJavaScriptGreeter.greet("Mitch")).toBe(
      "console.log(Howdy, Mitch!')"
    );
  });
});
