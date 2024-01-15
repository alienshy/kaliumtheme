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











let url = "http://localhost:3000/data/";

let card =  document.querySelector("#cards");
let search =  document.querySelector("#search");
let sort = document.querySelector("#sort")
let filter = [];
let copy = [];
let maxl = 4;
let load =  document.querySelector(".loadmore");

async function global(){
    let res = await axios.get(url)
    let data = await res.data
    copy = data; 

card.innerHTML="";
filter = filter.length || search.value ? filter : data;

filter.slice(0,maxl).forEach(el =>{
    card.innerHTML+=`
    <div>
    <img src="${el.img}" alt="">
    <h1>${el.name}</h1>
    <p>${el.info}</p>
    <span>
    <a onclick="deletecards(${el.id})"><i class="bi bi-trash2-fill"></i></a>
    <a href="./add.htm?id=${el.id}"><i class="bi bi-arrow-down-square-fill"></i></a>
    <a href="./det.htm?id=${el.id}"><i class="bi bi-info-circle-fill"></i></a>
</span>
</div>
    `
})
}
global();


load.addEventListener("click",()=>{
    math()
    double()
    global()
})
function double(){
    if(maxl >= copy.length){
        load.innerHTML= "show lens"
    }
    else{
        load.innerHTML = "load more"
    }
}
function math(){
    if(load.innerHTML =="show lens"){
        maxl = 4;
    }
    else{
        maxl+=4;
    }
}

////////serach/////
search.addEventListener("input",(e)=>{
    filter = copy;
    filter = filter.filter((y)=>{
        return y.name.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase())
    })
    global();
 })


 /////sort//////
 sort.addEventListener("change",(e)=>{
    if(e.target.value == "az"){
        filter.sort((a,b)=>a.name.localeCompare(b.name))
    }
    else if (e.target.value == "za"){
        filter.sort((a,b)=>b.name.localeCompare(a.name))
    }
    else {
        filter = copy;
    }
    global();
 });


 /////delete//////

 async function deletecards(id){
    let res = await axios.delete(url + id)
    window.location.reload();
    return res.data;
 }



















