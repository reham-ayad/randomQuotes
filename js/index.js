var arrayOfQuotes=["Be yourself; everyone else is already taken","So many books, so little time","You only live once, but if you do it right, once is enough","Be the change that you wish to see in the world","If you tell the truth, you don't have to remember anything","A friend is someone who knows all about you and still loves you","To live is the rarest thing in the world. Most people exist, that is all"
];

var x=6;
var r=0;
function display(){
    
    var y=Math.random()*6;
   

    var z=Math.round(y);
    
   
    if (z==r){
        z++;
    document.getElementById("show").innerHTML=arrayOfQuotes[z];
    
    r=z;
    
    }
    else{
        document.getElementById("show").innerHTML=arrayOfQuotes[z];
       
        r=z;
        }
        console.log(arrayOfQuotes[z]);
        // console.log(arrayOfQuotes[r]);
    
  
}

