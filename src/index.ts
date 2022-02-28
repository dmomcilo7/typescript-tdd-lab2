import { Greeter } from "./Greeter";
import { JavaScriptGreeter } from "./JavaScriptGreeter";
import { LoudGreeter } from "./LoudGreeter";
import { HtmlGreeter } from "./HtmlGreeter";

const newGreeter = new Greeter("Sup");
const newJavaScriptGreeter = new JavaScriptGreeter("Sup");
const newLoudGreeter = new LoudGreeter("Sup");
const newHtmlGreeter = new HtmlGreeter("Sup");

console.log(newGreeter.greet("Mitch"));
console.log(newJavaScriptGreeter.greet("Mitch"));
console.log(newLoudGreeter.greet("Mitch"));
console.log(newHtmlGreeter.greet("Mitch"));
