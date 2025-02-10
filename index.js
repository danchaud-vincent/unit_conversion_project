/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
let switchMode = true
const convertBtn = document.getElementById("convert-btn")
const switchBtn = document.getElementById("switch-btn")
const unitFeetEl = document.getElementById("unit-feet-el")
const unitGallonEl = document.getElementById("unit-gallon-el")
const unitPoundEl = document.getElementById("unit-pound-el")

convertBtn.addEventListener("click", function(){

    // get value from input
    let inputValue = document.getElementById("unit-value").value

    if (inputValue){

        const input_value_nb = Number(inputValue)

        if (input_value_nb){
            // convert the value
            const meterToFeetValue = input_value_nb * 3.281
            const feetToMeterValue = input_value_nb / 3.281
            const literToGallonValue = input_value_nb * 0.264
            const gallonToLiterValue = input_value_nb / 0.264
            const kilosToPoundsValue = input_value_nb * 2.204
            const poundsToKilosValue = input_value_nb / 2.204
            
            // create sentences for html
            const feet_sentence = `${input_value_nb} meters = ${meterToFeetValue.toFixed(3)} feet | ${input_value_nb} feet = ${feetToMeterValue.toFixed(3)} meters`
            const gallon_sentence = `${input_value_nb} liters = ${literToGallonValue.toFixed(3)} gallons | ${input_value_nb} feet = ${gallonToLiterValue.toFixed(3)} liters`
            const pound_sentence = `${input_value_nb} kilos = ${kilosToPoundsValue.toFixed(3)} pounds | ${input_value_nb} pounds = ${poundsToKilosValue.toFixed(3)} kilos`

            unitFeetEl.innerHTML = feet_sentence
            unitGallonEl.innerHTML = gallon_sentence
            unitPoundEl.innerHTML = pound_sentence
        }
        else{
            console.log("Please type a number")
        } 
    } 
})

switchBtn.addEventListener("click",function(){
    const mainContainerNode = document.querySelector(".groups-container")
    const unitContainersNodes = document.querySelectorAll(".unit-container")

    if (switchMode === true){

        // change color button
        switchBtn.style.color = "black"
        switchBtn.style.backgroundColor = "white"
        switchBtn.innerHTML = "light-mode"

        // change background color
        mainContainerNode.style["background-color"] = "#1F2937"

        for (let i=0; i<unitContainersNodes.length; i++){
            // change color
            unitContainersNodes[i].style["background-color"] = "#273549"
            unitContainersNodes[i].style["border-color"] = "black"

            // select h2 and p
            const titleNode = unitContainersNodes[i].querySelector("h2")
            const paragraphNode = unitContainersNodes[i].querySelector("p")
            
            titleNode.style.color = "#CCC1FF"
            paragraphNode.style.color = "white"
        }

        // change the value of darkmode
        switchMode = false
    }
    else{
        // change color button
        switchBtn.style.color = "white"
        switchBtn.style.backgroundColor = "black"
        switchBtn.innerHTML = "dark-mode"

        // change background color
        mainContainerNode.style["background-color"] = "#F4F4F4"

        for (let i=0; i<unitContainersNodes.length; i++){
            // change color
            unitContainersNodes[i].style["background-color"] = "white"
            unitContainersNodes[i].style["border-color"] = "#6943FF";

            // select h2 and p
            const titleNode = unitContainersNodes[i].querySelector("h2")
            const paragraphNode = unitContainersNodes[i].querySelector("p")
            
            titleNode.style.color = "#5A537B"
            paragraphNode.style.color = "#353535"
        }

        // change the value of darkmode
        switchMode = true
    }
    
    

})