/*
Authors: Quinlan Bingham, Bennet Falkenberg, Matthew Lee
Date: May 7, 2017
Class: CPSC 326, Section 2
Assignment: Final Project
*/

function underWeight(weight){
    if (weight < 20){
        return true
    }
    else {
        return false
    }
}

function underLength(length){
    if (length < 3){
        return true
    }
    else {
        return false
    }
}

function convertToFeet(num, unit){
    if (unit == "inches"){
        return num / 12;
    }
    if (unit == "centimeters"){
        return num / 30.48;
    }
    if (unit == "meters"){
        return num * 3.28;
    } else {
        return num;
    }
}

function convertToPounds(num, unit){
    if (unit == "kilograms"){
        return num * 2.205;
    } else {
        return num;
    }
}

function isCompostableMaterial(material){
    if (material == "Organics" || material == "Wood" || material == "Yard Debris"){
        return true;
    } else {
        return false;
    }
}

function isRecyclableMaterial(material){
    if (material == "Aluminium" || material == "Cardboard" || material == "Paper" 
        || material == "Plastic" || material == "Tin"){
        return true;
    } else {
        return false;
    }
}

function isCompostable(material, feet, pounds){
    if (isCompostableMaterial(material)){
        if (underLength(feet)){
            if(underWeight(pounds)){
                return true;
            }
        }
    } else {
        return false;
    }
}



function isRecyclable(material, feet, pounds){
    if (isRecyclableMaterial(material)){
        if (underLength(feet)){
            if(underWeight(pounds)){
                return true;
            }
        }
    } else {
        return false;
    }
}


function destination(material, length, lengthUnit, weight, weightUnit){
    if (isCompostable(material,convertToFeet(length,lengthUnit),convertToPounds(weight, weightUnit))){
        return "compost";
    }
    if (isRecyclable(material,convertToFeet(length,lengthUnit),convertToPounds(weight, weightUnit))){
        return "recycle";
    } else {
        return "trash";
    }
}
    
document.addEventListener('DOMContentLoaded', function(event) {
    document.getElementById('submit_button').addEventListener('click', function(event) {
        
        var material = document.getElementById('material_value').value;
        
        var weight      = document.getElementById('weight_value').value,
            weight_unit = document.getElementById('weight_unit').value;
            
        var dim         = document.getElementById('dim_value').value,
            dim_unit    = document.getElementById('dim_unit').value;
        
        var dest = destination(material, dim, dim_unit, weight, weight_unit);
        
        alert(dest);
    });
});