const btn  =  document.getElementById("btn") as HTMLElement   //here we say ts that its a htmlem=lement not null

btn.addEventListener("click",()=>console.log("clicked"))

const img =  document.getElementById("img") as HTMLImageElement
img.src = "https://picsum.photos/200/300"



const form = document.querySelector("form") as HTMLFormElement
form.onsubmit = (e )=>{
    e.preventDefault()
    const input = document.querySelector("form > input") as HTMLInputElement
    console.log("first",input.value)
    const h2 =  document.createElement("h2") as HTMLHeadElement
    h2.innerText = input.value
    const body  = document.querySelector("body") as HTMLBodyElement

    body.appendChild(h2)
}