const input = document.getElementById('qr-text');
const sizes = document.getElementById('sizes');
const downloadbtn = document.getElementById('downloadBtn');
const  generatebtn = document.getElementById('generateBtn');
const qrcontainer = document.querySelector('.qr-body');



let size = sizes.value;

generatebtn.addEventListener('click' ,(e)=> {
    e.preventDefault();
    isEmptytext();


});
 
sizes.addEventListener('change',(e) => {
    size = e.target.value;
    isEmptytext();

} )

downloadbtn.addEventListener('click' , () => {
    let img = document.querySelector('.qr-body img');

    if(img !== null){
        let imgAtrr = img.getAttribute('src');
        downloadbtn.setAttribute("href", imgAtrr );
        

    }
    else{
        alert("Please generate the Qr code to download")
    }
})

function isEmptytext(){
    if(input.value.length > 0){
        generate();

    }
    else{
        alert("Enter the text or URL to generate your QR code")
    
    }
}
function generate(){
    qrcontainer.innerHTML = "";
    new QRCode(qrcontainer,{
        text:input.value,
        height:size,
        width:size,
        colorLight:'#fff',
        colorDark:'#000',
    })
    
}


