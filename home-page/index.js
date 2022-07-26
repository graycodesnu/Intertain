var selection = document.querySelector("#categories")    
var search = document.querySelector("#search")

selection.addEventListener('change',function(event){
  localStorage.setItem('category',selection.value)
  console.log(selection.value)
})    

search.addEventListener('click',function(){
  if(selection.value){
    return window.location = '../results-page/results.html' 
  }
})