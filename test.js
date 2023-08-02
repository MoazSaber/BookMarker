var ProdArray=[]
if(localStorage.getItem('Products')!=null){
ProdArray=JSON.parse(localStorage.getItem('Products'))
show()
}
var prodname=document.getElementById('prodName').value
var prodLink=document.getElementById('link').value
/////////////////////////////////////////////////////////
function addProd() {
     prodname=document.getElementById('prodName').value

     prodLink=document.getElementById('link').value
    var prodObject ={
    "prodname" : prodname,
    "prodlink":prodLink
}
if(checkName(prodname) == true && checkURL(prodLink) ==true){
  ProdArray.push(prodObject)
localStorage.setItem('Products',JSON.stringify(ProdArray))
show()
clearprod()
}
else{
  alert(" Name must start with capital letter and maximum letters are 9 ,URL must start with 'https or http'")
}
}

///////////////////////////////////////////////////
function show(){
  var cartona=``;
    for(var i=0;i<ProdArray.length;i++)
    cartona+=`<tr>
       <td>${i+1}</td>
    <td>${ProdArray[i].prodname}</td>
    <td>
    <button class="btn btn-info"    onclick="visit(${i})" >Visit</button>
    <button class="btn btn-danger" onclick="Deleteprod(${i})" >Delete</button></td>
  </tr>
    `
document.getElementById('demo').innerHTML=cartona    
}
//////////////////////////////////////////////////////
function clearprod() {
  
   prodname=document.getElementById('prodName').value=""
   prodLink=document.getElementById('link').value=""
}
////////////////////////////////////////////////////////////////
function Deleteprod(index) {
ProdArray.splice(index,1)
localStorage.setItem('Products',JSON.stringify(ProdArray))
show()
}
////////////////////////////////////////////////////////////////
 

function search(search){
  var cartona=` `
  for(var i=0;i<ProdArray.length;i++){
    if(ProdArray[i].prodname.toLocaleLowerCase().includes(search.toLocaleLowerCase())){
      cartona+=`<tr>
      <td>${ProdArray[i].prodname}</td>
      <td>${ProdArray[i].prodPrice}</td>
      <td>${ProdArray[i].prodSN}</td>
      <td>${ProdArray[i].prodDesc}</td>
      <td>${ProdArray[i].prodlink}</td>
      <td>
      <button class="btn btn-info"    onclick="visit(${i})" >Visit</button>
      <button class="btn btn-warning"    onclick="Update(${i})" >Update</button>
      <button class="btn btn-danger" onclick="Deleteprod(${i})" >Delete</button></td>
    </tr>
      `
  document.getElementById('demo').innerHTML=cartona    
    }
  }
}
function visit(linkIndex){
  open(ProdArray[linkIndex].prodlink)
}

function checkName(str) {
  var regex= /^[A-Z][a-z]{3,10}$/
  return regex.test(str)
}
function checkURL(strUrl) {
  var regex= /^(http|https):\/\/.{3,}$/
  return regex.test(strUrl)
}
function check(str) {
  var regex= /^[A-Z][a-z]{3,10}$/
  return regex.test(str)
}
