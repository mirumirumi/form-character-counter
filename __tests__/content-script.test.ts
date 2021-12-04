import {
  checkTarget,
  countChar,
} from "../src/content-script";

describe("countChar", () => {
  test("\"\"", () => {
    expect(countChar("")).toBe(0);
  });  
  test("\"12345\"", () => {
    expect(countChar("12345")).toBe(5);
  });  
  test("\"abcdef\"", () => {
    expect(countChar("abcdef")).toBe(6);
  });  
  test("\" \"", () => {
    expect(countChar(" ")).toBe(1);
  });  
  test("\"   \"", () => {
    expect(countChar("   ")).toBe(3);
  });  
});

describe("checkTarget", () => {
  test("textarea", () => {
    expect(checkTarget(document.createElement("textarea"))).toBe(true);
  });  
  test("input all", () => {
    expect(checkTarget(document.createElement("input"))).toBe(true);
  });  
  test("input radio", () => {
    const inputRadio = document.createElement("input");
    inputRadio.type = "radio";
    expect(checkTarget(inputRadio)).toBe(false);
  });  
  test("select", () => {
    expect(checkTarget(document.createElement("select"))).toBe(false);
  });  
  test("div", () => {
    expect(checkTarget(document.createElement("div"))).toBe(false);
  });  
});


