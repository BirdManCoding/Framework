import {birdScript} from "./core/core"

const root = document.querySelector("#root")! as HTMLElement


function Button(props: any){
  return <div>
    <h2>{props.btnHeading}</h2>
    <button className="Nice">{props.btnName}</button>
  </div>
}

function Text(props: any){
  return <p id={props.id}>{props.children}</p>
}

const btnHeading = "here Comes the Narf!"

function App(){
  return <div>
    <h1 style={{color: "red", backgroundColor:"blue"}}>Hallo App</h1>
    <Button btnName="NARF!!!!" btnHeading={btnHeading}/>
    <Text id="SomeID">hallo leute!!!!</Text>
  </div>
}


birdScript.render(<App/>, root)

//birdScript.createElement("div", {
//  name: "jenny",
//  className: "miau"
//}, birdScript.createElement("h1", null, "wuffwuff"))



