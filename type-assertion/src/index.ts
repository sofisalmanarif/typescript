const btn  =  document.getElementById("btn") as HTMLElement   //here we say ts that its a htmlem=lement not null

btn.addEventListener("click",()=>console.log("clicked"))

const img =  document.getElementById("img") as HTMLImageElement
img.src = "https://picsum.photos/200/300"