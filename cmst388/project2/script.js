function submitform(){  
 var name = document.forms["rform"]["fname"].value;
 var last = document.forms["rform"]["lname"].value;
 var addr = document.forms["rform"]["address"].value;
 var cty =  document.forms["rform"]["city"].value;
 var st = document.forms["rform"]["state"].value;
 var zcod = document.forms["rform"]["zcode"].value;
 var ph = document.forms["rform"]["phone"].value;
 var ema = document.forms["rform"]["email"].value;
 var cem = document.forms["rform"]["cemail"].value;
 var meal = document.forms["rform"]["food"].value;
 var cont = document.forms["rform"]["contact"].value;
    if (name == "") {
      alert ("First Name cannot be blank.");
      document.rform.fname.focus();
      return false;} 
    else if (last == "") {
      alert ("Last Name cannot be blank.");
      document.rform.lname.focus();
      return false;}
    else if (addr == "") {
      alert ("Address cannot be blank.");
      document.rform.address.focus();
      return false;}
    else if (cty == "") {
      alert ("City cannot be blank.");
      document.rform.city.focus();
      return false;}
    else if (st == "") {
      alert ("State cannot be blank.");
      document.rform.state.focus();
      return false;}
    else if (zcod == "") {
      alert ("Zip Code cannot be blank.");
      document.rform.zcode.focus();
      return false;}
    else if (ph == "") {
      alert ("Phone cannot be blank.");
      document.rform.phone.focus();
      return false;}
    else if (ema == "") {
      alert ("Email cannot be blank.");
      document.rform.email.focus();
      return false;}
    else if (cem == "") {
      alert ("Confirm Email cannot be blank.");
      document.rform.cemail.focus();
      return false;}
    else if (meal == "") {
      alert ("Meal Preference cannot be blank.");
      document.rform.food.focus();
      return false;}
    else if (cont == "") {
      alert ("Contact Method cannot be blank.");
      document.rform.contact.focus();
      return false;}
}



