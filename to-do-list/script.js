



const inputText = document.getElementById("input-text")
const listItem = document.getElementById("list-item")
inputText.addEventListener(
    "keypress", 
    function(event){
        if (event.key == "Enter"){
            addItem(this.value)
         this.value = ""
        }
    }
)
function addItem(item) {
    const child = document.createElement("li")
    child.innerHTML = ` 
         ${item}
    <i class="fa-solid fa-trash-can"></i> 
    `;
    child.addEventListener("click",
        function(){
            this.classList.toggle("completed")
        }
    )
    child.querySelector("i").addEventListener(
        "click",
        function(){
            child.remove()
        }
    )

    listItem.appendChild(child)
}

