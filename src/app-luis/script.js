window.addEventListener("load", (event) => {


    var modal = document.getElementById("myModal");
    var span = document.getElementsByClassName("close")[0];
  
    document.querySelector(".toggle-code").addEventListener("click",() => {
            modal.style.display = "block";
            document.querySelectorAll("section > div input").forEach((input) => {
  
                 const newP = document.createElement("p");
  
                 const newContent = document.createTextNode(input.value);
  
                 newP.appendChild(newContent);
  
                document.querySelector(".card-body").appendChild(newP)
  
            });
    });
  
  
  
    span.onclick = function() {
      modal.style.display = "none";
    }
  
    window.onclick = function(event) {
     if (event.target == modal) {
       modal.style.display = "none";
    }
    }
  
  
  });
  