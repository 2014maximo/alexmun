function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.getElementById('main').style.display = 'none';
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.getElementById('main').style.display = 'block';
}

function myFunction(x) {
    x.classList.toggle("change");
    openNav();
  }

function openComponent(component){
    const  components = ['description', 'aboutMe', 'study','skills','works', 'contactMe','projects'];
    for(let i=0; i<components.length;i++){
        if(component === components[i]){
            document.getElementById(component).style.display = 'block';
            closeNav();
        } else {
            console.log(components[i]);
            document.getElementById(components[i]).style.display = 'none';
        }
    }

}
