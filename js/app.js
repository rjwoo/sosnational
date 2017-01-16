$(document).ready(function(){
  setBindings();
});

function setBindings(){
  $("nav a").click(function(e){
    alert('button id' + e.currentTarget.id);
  });
}
