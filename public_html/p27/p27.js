i = 0;
var array = [];
var dates = 1;

function menu() {
    var dates = parseInt(prompt("1.To_settle \n\
2.Search for element by sequential method \n\
3.Apply_bubble_sorting_method \n\
4.Apply_bidirectional_bubble_ordering_method \n\
5.Apply_insertion_sort_method\n\
6.Apply_method_of_ordering_by_mixing\n\
7.Apply_method_of_ordering_by_selection\n\
8.Print_arrangement\n\
0.Exit_the_program"));
    return dates;
}

function sell() {
    var bus = parseInt(prompt("Ingrese el tamaño del arreglo"));
    for (i = 0; i < bus; i++) {
        array[i] = Math.round(Math.random() * 100);
    }
    return bus;
}


function sequential(){
var pos,encontro,vec1,txt1;
i=0;
encontro = false;
txt1 = parseInt(prompt("ingrese un nùmero"));    
    while (!encontro && i<=array.length ) {
        if(txt1 === array[i]){
            encontro = true;

        }
        i=i+1;
       
    
if(encontro)
    console.log("el dato se encuentra y esta en la posición" ,i, "\n");
else 
   console.log(); 
}
 return txt1;
}

var a;
function bubbleSort(){
    var bus=a;
    var a=false;
    while(!a){
        a=true;
        for(var i=0; i<array[i];i++){
            aux = array[i+1];
            array[i+1]=array[i];
            array[i]=aux;
            a=false;
        }
    }
    return a;
}



while (dates !== 0) {
    dates = menu();
    switch (dates) {
        case 1:
            bus = sell();
            break; 
        case 2:
            sequential();
            break;
        case 3:
            bubbleSort();
            break;
        case 8:
            console.log(array);
            break;
        case 0:
            alert("Good Bye");
    }
    }

        
