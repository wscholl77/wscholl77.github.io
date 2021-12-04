function validateform(){
var fname=document.myform.fname.value;
var lname=document.myform.lname.value;
var addr=document.myform.addr.value;
var city=document.myform.city.value;
var state=document.myform.state.value;
var zcod=document.myform.zcod.value;
var phone=document.myform.phone.value;
var email=document.myform.email.value;
var cemai=document.myform.cemai.value;

if (fname==null || fname==""){
  alert("First name can't be blank");
  return false;}

if (lname==null || lname==""){
    alert("Last name can't be blank");
    return false;}

if (addr==null || addr==""){
    alert("Address can't be blank");
    return false;}

if (city==null || city==""){
    alert("City can't be blank");
    return false;}

if (state==null || state==""){
    alert("State can't be blank");
    return false;}

if (zcod==null || zcod==""){
    alert("Zip code can't be blank");
    return false;}

if (phone==null || phone==""){
    alert("Phone can't be blank");
    return false;}

if (email==null || email==""){
    alert("Email can't be blank");
    return false;}

if (cemai==null || cemai==""){
    alert("Confirm email can't be blank");
    return false;}

}
