(function(){
var v='eng';
try{var s=localStorage.getItem('view');if(s==='ana'||s==='eng')v=s}catch(e){}
function set(x){document.body.dataset.view=x;document.querySelectorAll('.switch button').forEach(function(b){b.setAttribute('aria-pressed',String(b.dataset.v===x))});try{localStorage.setItem('view',x)}catch(e){}}
document.querySelectorAll('.switch button').forEach(function(b){b.addEventListener('click',function(){set(b.dataset.v)})});
set(v);
})();
