/*
Authors: Quinlan Bingham, Bennet Falkenberg, Matthew Lee
Date: May 7, 2017
Class: CPSC 326, Section 2
Assignment: Final Project
*/

function underWeight(var weight){
    if (weight < 20){
        return true
    }
    else {
        return false
    }
}

function underLength(var length){
    if (length < 3){
        return true
    }
    else {
        return false
    }
}

function convertToFeet(var num, var unit){
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

function convertToPounds(var num, var unit){
    if (unit == "kilograms"){
        return num * 2.205;
    } else {
        return num;
    }
}

function isCompostableMaterial(var material){
    if (material == "Organics" || material == "Wood" || material = "Yard Debris"){
        return true;
    } else {
        return false;
    }
}

function isRecyclableMaterial(var material){
    if (material == "Aluminium" || material == "Cardboard" || material = "Paper" 
        || material = "Plastic" || material = "Tin"){
        return true;
    } else {
        return false;
    }
}

function isCompostable(var material, var feet, var pounds){
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



function isRecyclable(var material, var feet, var pounds){
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

function destination(var material, var length, var weight){
    if isCompostable(material,convertToFeet(length),convertToPounds(weight)){
        return "compost";
    }
    if isRecyclable(material,convertToFeet(length),convertToPounds(weight)){
        return "recycle";
    } else {
        return "trash";
    }
}












