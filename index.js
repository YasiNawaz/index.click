document.addEventListener('DOMContentLoaded', function() {
    var count = 0;
    
    function showAlert() {
      alert(count);
      count++;
    }
    
    document.addEventListener('keydown', showAlert);
    
    window.addEventListener('load', function() {
      count = 0; 
    });
  });