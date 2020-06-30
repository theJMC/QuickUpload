var url = "//" + window.location.href.split("/")[2] + ":216" ;

$(() => {
    var form = document.getElementById("formUpload");
    form.setAttribute("action", url + "/upload");
    document.getElementById("loopbackURL").setAttribute("value", "http://" + window.location.href.split("/")[2] + "/upload/success")
});

