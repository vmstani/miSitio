
function addEvent(id_flag){

const flagsElement = document.getElementById(id_flag);
flagsElement.addEventListener("click", (e)  =>  {
    console.log(e.target.parentElement.dataset.language);
});

}


addEvent("flag_es");
addEvent("flag_en");


