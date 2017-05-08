/*
Authors: Quinlan Bingham, Bennet Falkenberg, Matthew Lee
Date: May 7, 2017
Class: CPSC 326, Section 2
Assignment: Final Project
*/

function underWeight(weight){
    return weight < 20;
}

function underLength(length){
    return length < 3;
}

function convertToFeet(num, unit){
    switch (unit.toLowerCase()) {
        case 'inches':
        case 'in':
            return num / 12;
        case 'centimeters':
        case 'cm':
            return num / 30.48;
        case 'meters':
        case 'm':
            return num * 3.28;
        default:
            return num;
    }
}

function convertToPounds(num, unit){
    unit = unit.toLowerCase();
    
    if (unit == "kilograms" || unit == "kg") {
        return num * 2.205;
    } else {
        return num;
    }
}

function isCompostableMaterial(material) {
    switch (material.toLowerCase()) {
        case "organics":
        case "wood":
        case "yard waste":
            return true;
        default:
            return false;
    }
}

function isRecyclableMaterial(material) {
    switch (material.toLowerCase()) {
        case "aluminium":
        case "cardboard":
        case "paper":
        case "plastic":
        case "tin":
            return true;
        default:
            return false;
    }
}

function isCompostable(material, feet, pounds){
    return isCompostableMaterial(material) && underLength(feet) && underWeight(pounds);
}

function isRecyclable(material, feet, pounds){
    return isRecyclableMaterial(material) && underLength(feet) && underWeight(pounds);
}


function destination(material, length, lengthUnit, weight, weightUnit){
    length = convertToFeet(length,lengthUnit);
    weight = convertToPounds(weight, weightUnit);
    
    if (isCompostable(material, length, weight)) {
        return "Compost";
    } else if (isRecyclable(material, length, weight)) {
        return "Recycle";
    } else {
        return "Trash";
    }
}

function show_error(error_text) {
    var error_el = document.getElementById('error');
    error_el.querySelector('.error-content').innerHTML = error_text;
    error_el.classList.add('error-shown');
    return false;
}

function hide_error() {
    var error_el = document.getElementById('error');
    error_el.classList.remove('error-shown');
}

document.addEventListener('DOMContentLoaded', function(event) {
    var error_el = document.getElementById('error');
    
    document.body.addEventListener('click', function(event) {
        if (event.target != error_el && event.target.parentNode != error_el) {
            hide_error();
        }
    });
    
    document.getElementById('submit_button').addEventListener('click', function(event) {
        event.stopPropagation();
        
        // gather input values
        var material    = document.getElementById('material_value').value;
        
        var weight      = document.getElementById('weight_value').value,
            weight_unit = document.getElementById('weight_unit').value;
            
        var dim         = document.getElementById('dim_value').value,
            dim_unit    = document.getElementById('dim_unit').value;
        
        // check for errors
        if (weight.length == 0) {
            return show_error('Please fill out the "weight" field.');
        }
        if (dim.length == 0) {
            return show_error('Please fill out the "longest dimension" field.');
        }
        
        weight = parseFloat(weight);
        dim = parseFloat(dim);
        
        if (isNaN(weight)) {
            return show_error('You must enter a number into the "weight" field.');
        }
        if (isNaN(dim)) {
            return show_error('You must enter a number into the "longest dimension" field.');
        }
        
        // evaluate
        var dest = destination(material, dim, dim_unit, weight, weight_unit);
        
        hide_error();
        document.querySelector('#results-panel .form-content').innerHTML = '<p>'+dest+'</p>';
        
        document.getElementById('form-panel').classList.add('out--right');
        document.getElementById('results-panel').classList.remove('out--left');
    });
    
    
    document.getElementById('BackToForm-button').addEventListener('click', function(event) {
        
        document.getElementById('results-panel').classList.add('out--left');
        document.getElementById('form-panel').classList.remove('out--right');
    });
    
    // focus first form field
    document.getElementById('dim_value').focus();
});
