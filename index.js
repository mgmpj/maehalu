function checkanswer() {
    const radios=document.getElementsByName("myradio");
    let selected="";

    for (let i=0; i < radios.length; i++) {
        if (radios[i].checked) {
            selected=radios[i].value;
            break;
        }
    }

    if (selected = "") {
        document.getElementById("result").textContent="選んでね";
    } else if (selected = "keirin") {
        document.getElementById("result").textContent="正解";
    } else {
        document.getElementById("result").textContent="不正解";
    }
}

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("link").addEventListener("click", function(event) {
        window.location.href = "https://www.hiroshima-ff.com/";
    });
});
document.getElementById("text").addEventListener("mouseover", function() {
    this.style.fontSize = "24px"; 
});

document.getElementById("text").addEventListener("mouseout", function() {
    this.style.fontSize = "16px"; 
});

