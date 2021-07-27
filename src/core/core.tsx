

export const birdScript = {
  createElement,
  render
}


type props = {
  [prop:string]: any | null,
  children: DomNodeElement[]
};

interface DomNodeElement {
  type: string,
  props: props
}

interface TextNodeElement {
  isText: boolean,
  props: props
}

function render(element: TextNodeElement | DomNodeElement, container: HTMLElement | Text){
  let dom: HTMLElement | Text;
  if("isText" in element){
    dom = document.createTextNode("")
  } else {
    dom = document.createElement(element.type)
  }

  const isProperty = (key:string) => key !== "children"
  Object.keys(element.props)
  .filter(isProperty)
  .forEach((name: string) => {
    (dom as any)[name] = element.props[name]
  })
  
  element.props.children.forEach(child => render(child, dom))
  container.appendChild(dom)
}


function createElement(type: string, props: {} | null, ...children: DomNodeElement[] | string[] ): DomNodeElement
function createElement(type: string, props: {} | null, ...children: DomNodeElement[] | string[] ){
  return {
    type,
    props: {
      ...props,
      children: children.map(child => typeof child === "object" ? child : createTextElement(child))
    }
  }
}

function createTextElement(text: string): TextNodeElement
function createTextElement(text: string){
  return {
    isText: true,
    props: {
      nodeValue: text,
      children: []
    }
  }
}