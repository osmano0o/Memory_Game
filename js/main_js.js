const boxes = document.querySelectorAll("div div div")
const container = document.getElementsByClassName("container")
const backs = document.querySelectorAll("span")

let temp = "";
let click = 0;
boxes.forEach(function(el ,ind){
    container[ind].style.order = Math.round(Math.random() * 12)
    el.onclick = function(){
        if(temp == ""){
            this.classList.add("clicked")
            temp = backs[ind].getAttribute("fruit");
            click = ind
        }
        else{
            this.classList.add("clicked")
            if(backs[ind].getAttribute("fruit") == temp){
                temp = ""
            }
            else{
                boxes.forEach(function(ele){
                    ele.style.pointerEvents = "none"
                })
                container[ind].classList.add("return")
                container[click].classList.add("return")
                setTimeout(() => {
                    container[ind].style.transformStyle = "preserve-3d"
                    container[click].style.transformStyle = "preserve-3d"

                }, 500);
                temp="";
                setTimeout(() => {
                    boxes[ind].classList.remove("clicked")
                    boxes[click].classList.remove("clicked")
                    container[ind].classList.remove("return")
                    container[click].classList.remove("return")
                    container[ind].style.transformStyle = "flat"
                    container[click].style.transformStyle = "flat"
                    boxes.forEach(function(ele){
                        ele.style.pointerEvents = "auto"
                    })
                }, 1000);

            }
        }
    }


})
