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
    formData["customerId"] = document.getElementById("customerId").value;
    formData["customerFName"] = document.getElementById("customerFName").value;
    formData["customerLName"] = document.getElementById("customerLName").value;
    formData["cusEmail"] = document.getElementById("cusEmail").value;
    formData["cusPhoneNumber"] = document.getElementById("cusPhoneNumber").value;
    formData["customerPostalCode"] = document.getElementById("customerPostalCode").value;
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
    cell6.innerHTML = "L4B 1K3";
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
    cell6.innerHTML = "R4F 2U3";
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
    cell6.innerHTML = "Y4D 6Y3";
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
    cell6.innerHTML = "4E5 H5E";
    cell6 = newRow.insertCell(6);
    cell6.innerHTML = `<a onClick="onEdit(this)"><u><b>Edit</b></u></a>
    <a onClick="onDelete(this)"><u><b>Delete</b></u></a>`;
}

{
    var table = document.getElementById("supplierList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = "588";
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = "Amrith";
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = "Pal";
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = "pal@gmail.com";
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = "518-833-9999";
    cell6 = newRow.insertCell(5);
    cell6.innerHTML = "G5E 1E3";
    cell6 = newRow.insertCell(6);
    cell6.innerHTML = `<a onClick="onEdit(this)"><u><b>Edit</b></u></a>
    <a onClick="onDelete(this)"><u><b>Delete</b></u></a>`;
}

function insertNewRecord(data) {
    var table = document.getElementById("supplierList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.customerId;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.customerFName;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.customerLName;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.cusEmail;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.cusPhoneNumber;
    cell6 = newRow.insertCell(5);
    cell6.innerHTML = data.customerPostalCode;
    cell6 = newRow.insertCell(6);
    cell6.innerHTML = `<a onClick="onEdit(this)"><u><b>Edit</b></u></a>
    <a onClick="onDelete(this)"><u><b>Delete</b></u></a>`;
}

function resetForm() {
    document.getElementById("customerId").value = "";
    document.getElementById("customerFName").value = "";
    document.getElementById("customerLName").value = "";
    document.getElementById("cusEmail").value = "";
    document.getElementById("cusPhoneNumber").value = "";
    document.getElementById("customerPostalCode").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("customerId").value = selectedRow.cells[0].innerHTML;
    document.getElementById("customerFName").value = selectedRow.cells[1].innerHTML;
    document.getElementById("customerLName").value = selectedRow.cells[2].innerHTML;
    document.getElementById("cusEmail").value = selectedRow.cells[3].innerHTML;
    document.getElementById("cusPhoneNumber").value = selectedRow.cells[4].innerHTML;
    document.getElementById("customerPostalCode").value = selectedRow.cells[5].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.customerId;
    selectedRow.cells[1].innerHTML = formData.customerFName;
    selectedRow.cells[2].innerHTML = formData.customerLName;
    selectedRow.cells[3].innerHTML = formData.cusEmail;
    selectedRow.cells[4].innerHTML = formData.cusPhoneNumber;
    selectedRow.cells[5].innerHTML = formData.customerPostalCode;
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
    if (document.getElementById("customerId").value == "") {
        isValid = false;
        document.getElementById("customerIdValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("customerIdValidationError").classList.contains("hide"))
            document.getElementById("customerIdValidationError").classList.add("hide");
    }
    if (document.getElementById("customerFName").value == "") {
        isValid = false;
        document.getElementById("customerFNameValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("customerFNameValidationError").classList.contains("hide"))
            document.getElementById("customerFNameValidationError").classList.add("hide");
    }
    if (document.getElementById("customerLName").value == "") {
        isValid = false;
        document.getElementById("customerLNameValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("customerLNameValidationError").classList.contains("hide"))
            document.getElementById("customerLNameValidationError").classList.add("hide");
    }
    if (document.getElementById("cusEmail").value == "") {
        isValid = false;
        document.getElementById("cusEmailValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("cusEmailValidationError").classList.contains("hide"))
            document.getElementById("cusEmailValidationError").classList.add("hide");
    }
    if (document.getElementById("cusPhoneNumber").value == "") {
        isValid = false;
        document.getElementById("cusPhoneNumberValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("cusPhoneNumberValidationError").classList.contains("hide"))
            document.getElementById("cusPhoneNumberValidationError").classList.add("hide");
    }
    if (document.getElementById("customerPostalCode").value == "") {
        isValid = false;
        document.getElementById("customerPostalCodeValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("customerPostalCodeValidationError").classList.contains("hide"))
            document.getElementById("customerPostalCodeValidationError").classList.add("hide");
    }
    return isValid;
}




