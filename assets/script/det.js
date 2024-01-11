window.addEventListener("scroll",()=>{
    if(window.scrollY > 200){
        document.querySelector(".bi-shift").style.right = "40px"
    }
    else{
        document.querySelector(".bi-shift").style.right = "-240px"
    }
})



document.querySelector(".bi-list").addEventListener("click",()=>{
    document.querySelector(".ul1").style.top = "0px"
    document.querySelector(".bi-list").style.display = "none"
})
document.querySelector(".bi-x-square-fill").addEventListener("click",()=>{
    document.querySelector(".ul1").style.top = "-700px"
    document.querySelector(".bi-list").style.display = "block"
})
window.addEventListener("resize",()=>{
    if(window.innerWidth > 768 ){
        document.querySelector(".bi-list").style.display = "none"
        document.querySelector(".ul1").style.top = "-700px"
        document.querySelector(".bi-x-square-fill").style.display = "none"
    } else{
        document.querySelector(".bi-list").style.display = "block"
        document.querySelector(".bi-x-square-fill").style.display = "block"
    }
})


let id = new URLSearchParams(window.location.search).get("id")

let url = "http://localhost:3000/data/";

let card =  document.querySelector("#cards");

async function info(id){
    let res = await axios.get(url+id)
    let data = await res.data;

    card.innerHTML+=`
    <div>
    <img src="${data.img}" alt="">
    <h1>${data.name}</h1>
    <p>${data.info}</p>
</div>
`
}
info(id);

