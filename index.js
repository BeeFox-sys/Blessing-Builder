function download() {
    html2canvas(document.querySelector(".show"), {
        scale: 5,
        // windowWidth: document.querySelector(".show").scrollWidth,
        // windowHeight: document.querySelector(".show").scrollHeight,
        width: document.querySelector(".show").clientWidth+20,
        height: document.querySelector(".show").clientHeight-120,
        // x:0,
        y:0,
        scrollY: 22,
        backgroundColor: "#000000",
        useCORS: true,
        // foreignObjectRendering: true,
        ignoreElements: (element) => element.classList.contains("ignore")
    }).then(canvas=>{
        canvas.toBlob(function (blob) {
            saveAs(blob, "DecreesAndBlessings.png");
        });
    });
}

function toggleSponser(e){
    e.parentElement.classList.toggle("showSponsor")
};

// function downloadBlessing(e){
//     html2canvas(e.parentElement, {
//         scale: 3,
//         // windowWidth: document.querySelector(".show").scrollWidth,
//         // windowHeight: document.querySelector(".show").scrollHeight,
//         width: e.parentElement.clientWidth,
//         height: e.parentElement.clientHeight,
//         x:e.parentElement.getBoundingClientRect().left,
//         y:e.parentElement.getBoundingClientRect().right,
//         backgroundColor: "#000000",
//         useCORS: true,
//         ignoreElements: (element) => element.classList.contains("sponsorbutton")
//     }).then(canvas=>{
//         canvas.toBlob(function (blob) {
//             saveAs(blob, "Blessing.png");
//         });
//     });
// }

function uploadImage(e){
    if (e.files && e.files[0]) {
        var reader = new FileReader();

        reader.onload = function (f) {
            e.parentElement.firstElementChild.src=f.target.result;
        };

        reader.readAsDataURL(e.files[0]);
    }
};