let homTm = document.getElementById("HOM-TM")
let gusTm = document.getElementById("GUS-TM")
let homCount = 0
let gusCount = 0 
function hadd(xyz){
    if (xyz.parentNode.id == "home"){
        console.log("In Home ")
         if(xyz.innerText == "+1"){
            homCount += 1
            console.log(homCount)
            homTm.innerText = homCount
            console.log("text" + homCount)
         }
         else if(xyz.innerText == "+2"){
            homCount += 2
            console.log(homCount)
            homTm.innerText = homCount
            console.log("text1" + homCount)
         }
         else if(xyz.innerText = "+3"){
            homCount += 3
            console.log(homCount)
            homTm.innerText = homCount
            console.log(homCount)
         }
    }
    
    if (xyz.parentNode.id == "guest"){
        console.log("In Guest ")    
        console.log( xyz.parentNode)
        if(xyz.innerText == "+1"){
            gusCount += 1
            console.log(gusCount)
            gusTm.innerText = gusCount
            console.log("text" + gusCount)
        }
        else if(xyz.innerText == "+2"){
            gusCount += 2
            console.log(gusCount)
            gusTm.innerText = gusCount
            console.log("text1" + gusCount)
        }
        else if(xyz.innerText = "+3"){
            gusCount += 3
            console.log(gusCount)
            gusTm.innerText = gusCount
            console.log(gusCount)
         }
    }
   
    
}
