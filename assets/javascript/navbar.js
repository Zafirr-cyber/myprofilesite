const hauteurScroll = document.querySelector("#scroller");
let estAuTop = true;

function navbaracceuil(acceuil){
    if (acceuil){
        document.addEventListener("scroll", (event) => {
            if (document.scrollingElement.scrollTop>=window.innerHeight){
                document.getElementById("navbar").classList.add("navbar-animation")
                estAuTop = false;
            }
            else {
                document.getElementById("navbar").classList.remove("navbar-animation")
                estAuTop = true;
            }
        });
        document.onmousemove = (event) => {
            const hauteurCurseur = event.clientY
            if (estAuTop){
                if(hauteurCurseur < 150){
                    document.getElementById("navbar").classList.add("navbar-animation")
                }else{
                    document.getElementById("navbar").classList.remove("navbar-animation")
                }
            }
        }

    }else {
        document.getElementById("navbar").classList.add("navbar-animation")
    }
}