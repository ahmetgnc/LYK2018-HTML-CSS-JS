
var currentText = document.getElementById("screen").innerHTML;



const state = {}
state['current'] = '0';



function increment(){
state.current++;

}

function reset(){
state.current = 0;

}

function render(){
var number=document.getElementById('screen');
number.innerText=state.current;
}

document.querySelector("#increment_button").addEventListener('click' ,
function(){
  increment();
  render();
});

document.querySelector("#reset_button").addEventListener('click' ,
function(){
  reset();
  render();
});
