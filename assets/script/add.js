let id = new URLSearchParams(window.location.search).get("id")

let url = "http://localhost:3000/data/";


let form = document.querySelector("form")
let file = document.querySelector("#myimg")
let img = document.querySelector(".img img")
let namem = document.querySelector("#name")
let text = document.querySelector("#info")


axios(url + id).then((res)=>{
    namem.value=res.data.name;
    text.value=res.data.info;
    img.src=res.data.img;

});

file.addEventListener("input",(e)=>{
    let image = e.target.files[0];
    if(image){
        let reader = new FileReader();
        reader.readAsDataURL(image);
        reader.onload = () =>{
            img.src = reader.result;
        }
    }
})


form.addEventListener("submit",(e)=>{
    e.preventDefault();
    if(!id){
        axios.post(url,{
            img: img.src,
            name: namem.value,
            info: text.value

        })
    }
    else{
        axios.patch(url+id,{
            img: img.src,
            name: namem.value,
            info: text.value
        })

    }
    window.location = "./index.htm";
})