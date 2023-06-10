function resetInput() {
    document.getElementById("textInput").value = "Seattle";
  }
  
  document.getElementById("textInput").addEventListener("input", function() {
    document.getElementById("output").innerHTML = this.value;
  });
  