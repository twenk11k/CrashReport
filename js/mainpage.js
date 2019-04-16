$(document).ready(function(){
$('input[name=checkbox]').change(function(){
  if($(this).is(':checked')) {
      console.log("checked");
  } else {
     console.log("not checked");
  }
});
});
