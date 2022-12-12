/* Team Name : LambdaX - Group 1
PROG 1180-02
Banuka Kumara Ambegoda
Ravisanka Siriwardenage
Adam Augier
Akash Slatch
Amritpal Singh 
2022-10-24*/

var loader = document.querySelector(".loader")

window.addEventListener("load", vanish);

function vanish() {
  loader.classList.add("disppear");
}

var selectedRow = null



function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}

function readFormData() {
    var formData = {};
    formData["memberId"] = document.getElementById("memberId").value;
    formData["memberFirstName"] = document.getElementById("memberFirstName").value;
    formData["memberLastName"] = document.getElementById("memberLastName").value;
    formData["orderPermission"] = document.getElementById("orderPermission").value;
    return formData;
}

{
    var table = document.getElementById("staffList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = "2315";
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = "John";
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = "Cleark";
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = "Granted";
    cell4 = newRow.insertCell(4);
    cell4.innerHTML = `<a onClick="onEdit(this)"><u><b>Edit</b></u></a>
    <a onClick="onDelete(this)"><u><b>Delete</b></u></a>`;
}

{
    var table = document.getElementById("staffList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = "2345";
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = "James";
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = "Man";
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = "Granted";
    cell4 = newRow.insertCell(4);
    cell4.innerHTML = `<a onClick="onEdit(this)"><u><b>Edit</b></u></a>
    <a onClick="onDelete(this)"><u><b>Delete</b></u></a>`;
}

{
    var table = document.getElementById("staffList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = "3315";
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = "John";
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = "Gillian";
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = "Not Granted";
    cell4 = newRow.insertCell(4);
    cell4.innerHTML = `<a onClick="onEdit(this)"><u><b>Edit</b></u></a>
    <a onClick="onDelete(this)"><u><b>Delete</b></u></a>`;
}

{
    var table = document.getElementById("staffList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = "9958";
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = "Seth";
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = "Cool";
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = "Granted";
    cell4 = newRow.insertCell(4);
    cell4.innerHTML = `<a onClick="onEdit(this)"><u><b>Edit</b></u></a>
    <a onClick="onDelete(this)"><u><b>Delete</b></u></a>`;
}

{
    var table = document.getElementById("staffList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = "7778";
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = "Randy";
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = "Thompson";
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = "Not Granted";
    cell4 = newRow.insertCell(4);
    cell4.innerHTML = `<a onClick="onEdit(this)"><u><b>Edit</b></u></a>
    <a onClick="onDelete(this)"><u><b>Delete</b></u></a>`;
}

{
    var table = document.getElementById("staffList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = "1955";
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = "Tanya";
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = "Tate";
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = "Granted";
    cell4 = newRow.insertCell(4);
    cell4.innerHTML = `<a onClick="onEdit(this)"><u><b>Edit</b></u></a>
    <a onClick="onDelete(this)"><u><b>Delete</b></u></a>`;
}



function insertNewRecord(data) {
    var table = document.getElementById("staffList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.memberId;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.memberFirstName;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.memberLastName;
    cell3 = newRow.insertCell(3);
    cell3.innerHTML = data.orderPermission;
    cell3 = newRow.insertCell(4);
    cell3.innerHTML = `<a onClick="onEdit(this)"><u><b>Edit</b></u></a>
    <a onClick="onDelete(this)"><u><b>Delete</b></u></a>`;
}

function resetForm() {
    document.getElementById("memberId").value = "";
    document.getElementById("memberFirstName").value = "";
    document.getElementById("memberLastName").value = "";
    document.getElementById("orderPermission").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("memberId").value = selectedRow.cells[0].innerHTML;
    document.getElementById("memberFirstName").value = selectedRow.cells[1].innerHTML;
    document.getElementById("memberLastName").value = selectedRow.cells[2].innerHTML;
    document.getElementById("orderPermission").value = selectedRow.cells[3].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.memberId;
    selectedRow.cells[1].innerHTML = formData.memberFirstName;
    selectedRow.cells[2].innerHTML = formData.memberLastName;
    selectedRow.cells[3].innerHTML = formData.orderPermission;
}

function onDelete(td) {
    if (confirm('Are you sure to delete this staff Record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("staffList").deleteRow(row.rowIndex);
        resetForm();
    }
}

function validate() {
    isValid = true;
    if (document.getElementById("memberId").value == "") {
        isValid = false;
        document.getElementById("memberIdValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("supplierIdValidationError").classList.contains("hide"))
            document.getElementById("supplierIdValidationError").classList.add("hide");
    }
    if (document.getElementById("memberFirstName").value == "") {
        isValid = false;
        document.getElementById("memberFirstNameValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("memberFirstNameValidationError").classList.contains("hide"))
            document.getElementById("memberFirstNameValidationError").classList.add("hide");
    }
    if (document.getElementById("memberLastName").value == "") {
        isValid = false;
        document.getElementById("memberLastNameValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("memberLastNameValidationError").classList.contains("hide"))
            document.getElementById("memberLastNameValidationError").classList.add("hide");
    }
    if (document.getElementById("orderPermission").value == "") {
        isValid = false;
        document.getElementById("orderPermissionValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("orderPermissionValidationError").classList.contains("hide"))
            document.getElementById("orderPermissionValidationError").classList.add("hide");
    }
    return isValid;
}



