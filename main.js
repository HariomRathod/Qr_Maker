let form = document.querySelector("form");
let input = document.querySelector("input");
let image = document.querySelector("img");


form.addEventListener("submit",QrGen );

 async function QrGen(e){
    e.preventDefault();
    let inputValue = input.value;
    // console.log(inputValue);

    // const res=await fetch(``)

    let res = await fetch(
        `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${inputValue}`
      );
      let qrImage = res.url;
    
      image.setAttribute("src", qrImage);

    form.reset();
}