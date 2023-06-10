function resetInput() {
    const x = document.getElementById("textInput").value = "Seattle";
    document.getElementById("output").innerHTML = x;
  }
      
    document.getElementById("textInput").addEventListener("input", function() {
    document.getElementById("output").innerHTML = this.value;
  
      });
    