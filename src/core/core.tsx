enum CoreTypes {
  TEXT_ELEMENT = "text_element"
}

interface NodeElement {
  type: NodeType,
  props: {
      [prop:string]: any | null,
      children: NodeChildren
  }
}

type NodeType = string
type NodeChildren = NodeElement[] 
type NodeProps = {[prop:string]: any} 



export const birdScript = {
  createElement,
  render
}


function render(element: NodeElement, container: HTMLElement | Text){
    const dom = element.type === CoreTypes.TEXT_ELEMENT ? document.createTextNode("") : document.createElement(element.type) as any

   const isProperty = (key: string) => key !== "children"
   Object.keys(element.props)
   .filter(isProperty)
   .forEach((name: keyof NodeProps) => {
       dom[name] = element.props[name]
   })

    element.props.children.forEach(child => render(child, dom))
    container.appendChild(dom)
}

function createElement(type: string, props: NodeProps, ...children: NodeChildren): NodeElement
function createElement(type: string, props: NodeProps, ...children: NodeChildren){
  return {
      type,
      props: {
          ...props,
          children: children.map(child => typeof child === "object" ? child : createTextElement(child))
      }
  }
}

function createTextElement(text: string): NodeElement
function createTextElement(text: string){
  return {
    type: CoreTypes.TEXT_ELEMENT,
    props:{
      nodeValue: text,
      children: []
    }
  }
}