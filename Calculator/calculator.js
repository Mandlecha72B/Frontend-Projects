let buttons=document.querySelectorAll("button");
let btn=document.querySelectorAll(".bt");
let string="";
let error=false;
function count(string){
    for(let i=0;i<string.length;i++){
        if(i<string.length && (string[i]==='*' || string[i]==='+' || string[i]==='-' || string[i]==='/') && (string[i+1]==='*' || string[i+1]==='+' || string[i+1]==='-' || string[i+1]==='/' || i==string.length-1 )){
            error=true;
        }
    }
}
const disablButton=()=>{
    btn.forEach((bt)=>{
        bt.disabled=true;
    });

}
const enablButton=()=>{
    btn.forEach((bt)=>{
        bt.disabled=false;
    });

}
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click',(e)=>{
        if(e.target.innerHTML==='='){
            count(string);
            if(error){
                document.querySelector("input").value="Error!! Incorrect entry..";
                disablButton();
                error=false;
            }
            else{
                string=eval(string);
                document.querySelector("input").value=string;  
            }
            
        }
        else if(e.target.innerHTML=='C'){
            string="";
            document.querySelector("input").value=string;
            enablButton();
        }
        else{
            string=string+e.target.innerHTML;
            document.querySelector("input").value=string;

        }
    })
})