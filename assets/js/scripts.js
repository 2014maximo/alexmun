function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
  }


  function mostrarComponente() {
    document.getElementById('description').style.display = 'block';
  }
  
  function ocultarComponente() {
    document.getElementById('description').style.display = 'none';
  }