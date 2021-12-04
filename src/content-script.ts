const target: string = "input, textarea";
const inputType: any[] = ["email", "number", "password", "search", "tel", "text", "url", null];
const forms = document.querySelectorAll<HTMLInputElement | HTMLTextAreaElement>(target);

for (let i = 0; i < forms.length; i++) {  // NodeList is not iterable (is not even Array)
  eventListeners(forms[i]);
}

const observer = new MutationObserver((mutationRecords): undefined => {
  for (const m of mutationRecords) {
    if (m.type !== "childList") return;
    for (let i = 0; i < m.addedNodes.length; i++) {
      const nodeAsHtmlElem = m.addedNodes[i] as HTMLElement;
      if (checkTarget(nodeAsHtmlElem)) {
        eventListeners(m.addedNodes[i]);
      }
    }
  }
});
observer.observe(document.body, {
  childList: true,
  subtree: true,
  attributes: false,
  characterData: false,
});


function eventListeners(form: Node): void {
  if (!form) return;
  form.addEventListener("input", (e: Event) => showCounter(e));
  form.addEventListener("focus", (e: Event) => showCounter(e));
  form.addEventListener("blur" , (e: Event) => hideCounter(e));
}


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


export function checkTarget(tag: HTMLElement): boolean {
  let tagName;
  let typeName;
  try {
    tagName = tag.tagName.toLowerCase();
    typeName = tag.getAttribute("type");
  } catch (e) {
    ;
  }
  if (tagName === "textarea") return true;
  if (tagName === "input" && inputType.includes(typeName)) return true;
  return false;
}


export function countChar(text: string): number {
  return (text ?? "").length;
}


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


