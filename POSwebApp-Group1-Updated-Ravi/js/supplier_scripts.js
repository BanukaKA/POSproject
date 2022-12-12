/* Team Name : LambdaX - Group 1
PROG 1180-02
Banuka Kumara Ambegoda
Ravisanka Siriwardenage
Adam Augier
Akash Slatch
Amritpal Singh 
2022-10-24*/

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
    formData["supplierId"] = document.getElementById("supplierId").value;
    formData["supplierFName"] = document.getElementById("supplierFName").value;
    formData["supplierLName"] = document.getElementById("supplierLName").value;
    formData["email"] = document.getElementById("email").value;
    formData["phoneNumber"] = document.getElementById("phoneNumber").value;
    formData["supplierAddress"] = document.getElementById("supplierAddress").value;
    return formData;
}

{
    var table = document.getElementById("supplierList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = "159";
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = "John";
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = "Shown";
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = "john@gmail.com";
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = "528-255-3655";
    cell6 = newRow.insertCell(5);
    cell6.innerHTML = "325 ave, ON canada";
    cell6 = newRow.insertCell(6);
    cell6.innerHTML = `<a onClick="onEdit(this)"><u><b>Edit</b></u></a>
    <a onClick="onDelete(this)"><u><b>Delete</b></u></a>`;
}

{
    var table = document.getElementById("supplierList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = "157";
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = "Roman";
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = "Lesner";
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = "lesner@gmail.com";
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = "524-358-3655";
    cell6 = newRow.insertCell(5);
    cell6.innerHTML = "785 ave, ON canada";
    cell6 = newRow.insertCell(6);
    cell6.innerHTML = `<a onClick="onEdit(this)"><u><b>Edit</b></u></a>
                       <a onClick="onDelete(this)"><u><b>Delete</b></u></a>`;
}

{
    var table = document.getElementById("supplierList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = "125";
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = "Brock";
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = "Reigns";
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = "brock@gmail.com";
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = "588-888-5555";
    cell6 = newRow.insertCell(5);
    cell6.innerHTML = "555 ave, ON canada";
    cell6 = newRow.insertCell(6);
    cell6.innerHTML = `<a onClick="onEdit(this)"><u><b>Edit</b></u></a>
    <a onClick="onDelete(this)"><u><b>Delete</b></u></a>`;
}

{
    var table = document.getElementById("supplierList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = "559";
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = "Lily";
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = "Fery";
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = "feryl@gmail.com";
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = "518-833-5225";
    cell6 = newRow.insertCell(5);
    cell6.innerHTML = "258 ave, ON canada";
    cell6 = newRow.insertCell(6);
    cell6.innerHTML = `<a onClick="onEdit(this)"><u><b>Edit</b></u></a>
    <a onClick="onDelete(this)"><u><b>Delete</b></u></a>`;
}

function insertNewRecord(data) {
    var table = document.getElementById("supplierList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.supplierId;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.supplierFName;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.supplierLName;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.email;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.phoneNumber;
    cell6 = newRow.insertCell(5);
    cell6.innerHTML = data.supplierAddress;
    cell6 = newRow.insertCell(6);
    cell6.innerHTML = `<a onClick="onEdit(this)"><u><b>Edit</b></u></a>
    <a onClick="onDelete(this)"><u><b>Delete</b></u></a>`;
}

function resetForm() {
    document.getElementById("supplierId").value = "";
    document.getElementById("supplierFName").value = "";
    document.getElementById("supplierLName").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phoneNumber").value = "";
    document.getElementById("supplierAddress").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("supplierId").value = selectedRow.cells[0].innerHTML;
    document.getElementById("supplierFName").value = selectedRow.cells[1].innerHTML;
    document.getElementById("supplierLName").value = selectedRow.cells[2].innerHTML;
    document.getElementById("email").value = selectedRow.cells[3].innerHTML;
    document.getElementById("phoneNumber").value = selectedRow.cells[4].innerHTML;
    document.getElementById("supplierAddress").value = selectedRow.cells[5].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.supplierId;
    selectedRow.cells[1].innerHTML = formData.supplierFName;
    selectedRow.cells[2].innerHTML = formData.supplierLName;
    selectedRow.cells[3].innerHTML = formData.email;
    selectedRow.cells[4].innerHTML = formData.phoneNumber;
    selectedRow.cells[5].innerHTML = formData.supplierAddress;
}

function onDelete(td) {
    if (confirm('Are you sure to delete this Supplier Record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("supplierList").deleteRow(row.rowIndex);
        resetForm();
    }
}

function validate() {
    isValid = true;
    if (document.getElementById("supplierId").value == "") {
        isValid = false;
        document.getElementById("supplierIdValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("supplierIdValidationError").classList.contains("hide"))
            document.getElementById("supplierIdValidationError").classList.add("hide");
    }
    if (document.getElementById("supplierFName").value == "") {
        isValid = false;
        document.getElementById("supplierFNameValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("supplierFNameValidationError").classList.contains("hide"))
            document.getElementById("supplierFNameValidationError").classList.add("hide");
    }
    if (document.getElementById("supplierLName").value == "") {
        isValid = false;
        document.getElementById("supplierLNameValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("supplierLNameValidationError").classList.contains("hide"))
            document.getElementById("supplierLNameValidationError").classList.add("hide");
    }
    if (document.getElementById("email").value == "") {
        isValid = false;
        document.getElementById("emailValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("emailValidationError").classList.contains("hide"))
            document.getElementById("emailValidationError").classList.add("hide");
    }
    if (document.getElementById("phoneNumber").value == "") {
        isValid = false;
        document.getElementById("phoneNumberValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("phoneNumberValidationError").classList.contains("hide"))
            document.getElementById("phoneNumberValidationError").classList.add("hide");
    }
    if (document.getElementById("supplierAddress").value == "") {
        isValid = false;
        document.getElementById("supplierAddressValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("supplierAddressValidationError").classList.contains("hide"))
            document.getElementById("supplierAddressValidationError").classList.add("hide");
    }
    return isValid;
}





