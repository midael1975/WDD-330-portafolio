const  options  =   {  weekday:   'long',  day:   'numeric',  month:   'long',  year:   'numeric',  hour:   'numeric',  minute:   'numeric',  second: 'numeric', timezone: 'long'  };
document.getElementById('currentdate').textContent  =  new  Date().toLocaleDateString('en-us',  options);

var d = new Date();
document.getElementById("fullYear").innerHTML = d.getFullYear();

function lastModified() {
    document.write("Last Modified:" + document.lastModified);
}
lastModified();