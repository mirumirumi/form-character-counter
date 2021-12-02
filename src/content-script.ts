function showCounter(e: Event): void {
  const tag = e.target as HTMLInputElement | HTMLTextAreaElement;
  if (checkTarget(tag)) {
    counter.textContent = countChar(tag.value).toString();
    box.style.display = "block";
  }
}


function hideCounter(e: Event): void {
  box.style.display = "none";
}


function checkTarget(tag: HTMLInputElement | HTMLTextAreaElement): boolean {
  const tagName = tag.tagName.toLowerCase();
  console.log(tagName);
  const typeName = tag.getAttribute("type");
  console.log(typeName);
  if (tagName === "textarea") return true;
  if (tagName === "input" && inputType.includes(typeName)) return true;
  return false;
}


function countChar(text: string): number {
  return (text ?? "").length;
}


const target: string = "input, textarea";
const forms = document.querySelectorAll<HTMLInputElement | HTMLTextAreaElement>(target);
const iframes = document.querySelectorAll<HTMLIFrameElement>("iframe");
const inputType: any[] = ["email", "number", "password", "search", "tel", "text", "url", null];
const box: HTMLElement = document.createElement("div");
const counter: HTMLElement = document.createElement("span");
box.style.cssText = `
  display: none; 
  position: fixed;
  bottom: 5px;
  right: 7px;
  padding: 2px 8px;
  background-color: #898989b5;
  border-radius: 3.3px;
  text-align: center;
  line-height: 1.5;
  z-index: 999999;
`;
counter.style.cssText = `
  color: #fff;
  font-size: 18px;
  font-weight: bold;
  font-family: -apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;
  line-height: 1.5;
`;
box.appendChild(counter);
document.body.appendChild(box);


if (forms) {
  for (let i = 0; i < forms.length; i++) {  // NodeList is not iterable (is not even Array)
    forms[i].addEventListener("input", (e: Event) => showCounter(e));
    forms[i].addEventListener("focus", (e: Event) => showCounter(e));
    forms[i].addEventListener("blur", (e: Event) => hideCounter(e));
  }
}


