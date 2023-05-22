let result= document.querySelector('#screen-out');
function display(value) {result.value
    +=value;   
}
function remover() {result.value
    ='';}  
 
    function del()  {
        let tempArray = result.value.split('');
        tempArray.pop();
        result.value = tempArray.join('');
        ``
    } 
    function add() {result.value +=value
        ='+'; }  

        function minus() {result.value +=value
            ='-'; 
        } 
       
        function times() {result.value +=value
            ='*'; }        
        
            function dev() {result.value +=value
                ='/'; } 


function calculate(){
    result.value = eval(result.value)
}