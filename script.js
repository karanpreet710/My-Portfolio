function validateForm() {
    let x = document.getElementById("name").value;
    let y = document.getElementById("email").value;
    let at = y.indexOf("@");
    if (x == "") {
        alert("Please fill in your name");
        return false;
    }
    if (y == "") {
        alert("Please mention your email");
        return false;
    }
    if (at < 1) {
        alert("Invalid email address");
        return false;
    }
    if((at+1) == "")
    {
        alert("Invalid email address");
    }
    alert("Thanks for contacting");
    return true;
}

function expand1()
{
    let x=document.createElement('iframe');
    x.setAttribute('height',"500");
    x.setAttribute('width',"600");
    x.setAttribute('frameborder',"0");
    x.setAttribute('src',"https://karanpreet710.github.io/Mario-Club-Website/");
    let y=document.getElementById("l1");
    let a=y.children[1];
    a.remove();
    let z=document.createElement("button");
    z.innerHTML="Click to close";
    let w=document.createElement("br");
    y.appendChild(z);
    y.appendChild(w);
    y.appendChild(x);
    z.onclick=function()
    {
        z.remove();
        w.remove();
        x.remove();
        y.appendChild(a);
    }
}

function expand2()
{
    let x=document.createElement('iframe');
    x.setAttribute('height',"500");
    x.setAttribute('width',"600");
    x.setAttribute('frameborder',"0");
    x.setAttribute('src',"https://karanpreet710.github.io/Registration_Form/");
    let y=document.getElementById("l2");
    let a=y.children[1];
    a.remove();
    let z=document.createElement("button");
    z.innerHTML="Click to close";
    let w=document.createElement("br");
    y.appendChild(z);
    y.appendChild(w);
    y.appendChild(x);
    z.onclick=function()
    {
        z.remove();
        w.remove();
        x.remove();
        y.appendChild(a);
    }
}