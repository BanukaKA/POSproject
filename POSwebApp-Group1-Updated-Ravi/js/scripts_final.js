/*!
    * Start Bootstrap - SB Admin v7.0.5 (https://startbootstrap.com/template/sb-admin)
    * Copyright 2013-2022 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-sb-admin/blob/master/LICENSE)
    */
    // 
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Toggle the side navigation
    const sidebarToggle = document.body.querySelector('#sidebarToggle');
    if (sidebarToggle) {
        // Uncomment Below to persist sidebar toggle between refreshes
        // if (localStorage.getItem('sb|sidebar-toggle') === 'true') {
        //     document.body.classList.toggle('sb-sidenav-toggled');
        // }
        sidebarToggle.addEventListener('click', event => {
            event.preventDefault();
            document.body.classList.toggle('sb-sidenav-toggled');
            localStorage.setItem('sb|sidebar-toggle', document.body.classList.contains('sb-sidenav-toggled'));
        });
    }

});

function onDelete(td) {
    if (confirm('Are you sure to delete this Record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("datatablesSimple").deleteRow(row.rowIndex);
        resetForm();
    }
}

function onEdit(td) {
    document.getElementById("login").value = "Arigatho";
}

function insertNewRecord() {
    var table = document.getElementById("datatablesSimple").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = document.getElementById("login").value;
    cell1.innerHTML = document.getElementById("datatablesSimple").getElementsByTagName('tbody')[0];;
    cell1 = newRow.insertCell(1);
    cell1.innerHTML = "";
    cell2 = newRow.insertCell(2);
    cell2.innerHTML = "";
    cell3 = newRow.insertCell(3);
    cell3.innerHTML = "";
    cell3 = newRow.insertCell(4);
    cell3.innerHTML = `<a href="#login_form" id="login_pop">Log In</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button class="btn btn-danger" onclick="onDelete(this)">Delete</button></button>`;
}