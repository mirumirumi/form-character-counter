// const target: string[] = ["textarea", "input"];
const inputType: any[] = ["email", "number", "password", "search", "tel", "text", "url", null];
// const selector: string =
//   "input[type=email]," +
//   "input[type=number]," +
//   "input[type=password]," +
//   "input[type=search]," +
//   "input[type=tel]," +
//   "input[type=text]," +
//   "input[type=url]," +
//   "textarea";
// const forms = document.querySelectorAll<HTMLInputElement|HTMLTextAreaElement>(selector);


document.addEventListener("keypress", (e: Event) => main(e));


function main(e: Event): void {
  if (checkTarget(e)) {

  }
}


function checkTarget(e: Event): boolean {
  const tag = e.target as HTMLElement;
  const tagName = tag.tagName;
  const typeName = tag.getAttribute("type");
  if (tagName === "textarea") return true;
  if (tagName === "input" && inputType.includes(typeName)) return true;
  return false;
}


function countChar(text: string): number {
  return text.length;
}









