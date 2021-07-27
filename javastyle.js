

function gridcreation () {
    //handles form input using a sliding scale which triggers the next event that selects based on position. i.e. the event in question.
    //also triggers another function that removes class from spans with the id of x

    
let start = Number(document.getElementById("createboard").elements[0].value)

let newtile = document.querySelector('.boxbody')
let y = newtile.children


removeold(y)



    for (i = 1; i <= start; i++) {
    let y = document.createElement("div")
    newtile.appendChild(y);
    
   
   
}





    for (i = 0; i <= start - 1; i++) {
        console.log(y.item(i))
    y.item(i).style.columnCount = start
    y.item(i).classList.add('gridstyle')
    
    for (a = 1; a <= start; a++) {
    let z = document.createElement("div")
   
    
       
    y.item(i).appendChild(z);
    z.classList.add('cell')
     let gridrowheight = newtile.offsetHeight - 6;
     z.style.height = gridrowheight / start
     
   
    
       
    
    }
    
    }
   
    console.log(y)
   
    


  
   
    for (i = 0; i <= start -1; i++) {
       let cellitems = y.item(i).children
       console.log(cellitems)
  for (b =0; b <= cellitems.length - 1; b++) {
      let z = cellitems.item(b)
      z.addEventListener( "mouseover", function onmousehold(){ z.style.backgroundColor = "purple"
      
         
    } )
    
  }
  }


}


function removeold(y) {
    let x = document.getElementById('divcreator')

   console.log(x.firstChild)

   while(x.firstChild) {
       x.removeChild(x.firstChild)
   }
    console.log(x.firstChild)
    //applies a class of click down and triggers another function
}
