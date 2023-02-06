
var btn = document.getElementById("btn")
btn.addEventListener("click",function(){
   this.innerText = "按屁啊！"
   this.style.color = "red"
})

this.innertext = "按屁啊！"

function handle_click(element){
    alert("叫你按你还真按啊？")

}
var img = document.getElementById("img") 
console.log("img")
img.addEventListener("mouseover",function(){
    this.src = "小黑子2.png"

})
img.addEventListener("mouseout",function(){
    this.src = "小黑子.jpg"

})
