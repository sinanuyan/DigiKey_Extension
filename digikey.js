var res_default_url = "https://www.digikey.ch/products/de/resistors/chip-resistor-surface-mount/52?k=Automotive+Resistors&k=&pkeyword=Automotive+Resistors&sv=0&sf=1&FV=7%7C2%2C1989%7C0%2C-8%7C52&quantity=&ColumnSort=0&page=1&stock=1&pageSize=25";
var res_footprint_key = "&pv16=";
var res_footprint_0201 = "39078";
var res_footprint_0402 = "39158";
var res_footprint_0603 = "39246";
var res_footprint_0805 = "39329";

var res_value_key = "&pv2085=u";
var res_footprint = "";
var res_Ohm = "";
var res_value_str = "";


var resistors = res_default_url;
document.addEventListener("click", function(e) {
  var footprint = document.getElementById("component_footprint").value;
  var res_value = document.getElementById("component_value").value;
  
  if(footprint=="0402"){
    resistors = resistors+res_footprint_key+res_footprint_0402;
  }else{
    //resistors = resistors+res_footprint_key+res_footprint_0603;
  }

  if(footprint == "0201"){
    res_footprint = res_footprint_0201;
  }else if(footprint == "0402"){
    res_footprint = res_footprint_0402;
  }else if(footprint == "0603"){
    res_footprint = res_footprint_0603;
  }else if(footprint == "0805"){
    res_footprint = res_footprint_0805;
  }else{
    res_footprint = "";
  }

  

  var counter = 0;
  var exp_detected = 0;
  for(counter = 0; counter < res_value.length; counter++){
    if(res_value[counter] == "m"){
      res_Ohm = "+mOhms";
      exp_detected = 1;
    }else if(res_value[counter] == "R"){
      res_Ohm = "+Ohms";  
      exp_detected = 1;
    }else if(res_value[counter] == "k"){
      res_Ohm = "+kOhms";
      exp_detected = 1;
    }else if(res_value[counter] == "M"){
      res_Ohm = "+MOhms";
      exp_detected = 1;
    }else{
      if(exp_detected == 0){
        res_value_str = res_value_str.concat(res_value[counter]);
      }else{
        res_value_str = res_value_str.concat(".", res_value[counter]);
        exp_detected = 0;
      }
    }
  }

  resistors = res_default_url + res_footprint_key + res_footprint + res_value_key + res_value_str + res_Ohm;
  res_value_str = "";
  res_Ohm = "";

  if (!e.target.classList.contains("page-choice")) {
    return;
  }

  var chosenPage = resistors;
  browser.tabs.create({
    url: chosenPage
  });

});