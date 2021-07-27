import {birdScript} from "./core/core"

const root = document.querySelector("#root")! as HTMLElement

const element = (
  <div className="foo">
    <h1 id="heading">Hallo Welt</h1>
  </div>
);

birdScript.render(element, root)



