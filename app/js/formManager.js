
const formFunction = () =>{
    const inputs = document.querySelectorAll(".input");

    function focusFunction(){
        let parent = this.parentNode;
        parent.classList.add("focus");
    }

    function blurFunction(){
        if(this.value != ""){
            return;
        }
        let parent = this.parentNode;
        parent.classList.remove("focus");
    }

    inputs.forEach(input => {
        input.addEventListener("focus", focusFunction);
        input.addEventListener("blur", blurFunction);
    });
}


formFunction();