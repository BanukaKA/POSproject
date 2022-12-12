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
    formData["itemUpc"] = document.getElementById("itemUpc").value;
    var e = document.getElementById("itemQuantity");
    formData["itemQuantity"] = e.options[e.selectedIndex].text;
    formData["password"] = document.getElementById("password").value;
    formData["conpassword"] = document.getElementById("conpassword").value;
    return formData;
}

{
    var table = document.getElementById("supplierList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = "Banu";
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = "Manager";
    cell2 = newRow.insertCell(2);
    cell2.innerHTML = `<a onClick="onEdit(this)"><u><b>Edit</b></u></a>
    <a onClick="onDelete(this)"><u><b>Delete</b></u></a>`;
}

{
    var table = document.getElementById("supplierList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = "Ravi";
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = "Supervisor";
    cell2 = newRow.insertCell(2);
    cell2.innerHTML = `<a onClick="onEdit(this)"><u><b>Edit</b></u></a>
    <a onClick="onDelete(this)"><u><b>Delete</b></u></a>`;
}

{
    var table = document.getElementById("supplierList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = "Adam";
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = "Staff";
    cell2 = newRow.insertCell(2);
    cell2.innerHTML = `<a onClick="onEdit(this)"><u><b>Edit</b></u></a>
    <a onClick="onDelete(this)"><u><b>Delete</b></u></a>`;
}

{
    var table = document.getElementById("supplierList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = "Akash";
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = "Manager";
    cell2 = newRow.insertCell(2);
    cell2.innerHTML = `<a onClick="onEdit(this)"><u><b>Edit</b></u></a>
    <a onClick="onDelete(this)"><u><b>Delete</b></u></a>`;
}

{
    var table = document.getElementById("supplierList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = "Amrith";
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = "Staff";
    cell2 = newRow.insertCell(2);
    cell2.innerHTML = `<a onClick="onEdit(this)"><u><b>Edit</b></u></a>
    <a onClick="onDelete(this)"><u><b>Delete</b></u></a>`;
}

function insertNewRecord(data) {
    var table = document.getElementById("supplierList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.itemUpc;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.itemQuantity;
    cell2 = newRow.insertCell(2);
    cell2.innerHTML = `<a onClick="onEdit(this)"><u><b>Edit</b></u></a>
    <a onClick="onDelete(this)"><u><b>Delete</b></u></a>`;
}

function resetForm() {
    document.getElementById("itemUpc").value = "";
    document.getElementById("itemQuantity").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("itemUpc").value = selectedRow.cells[0].innerHTML;
    document.getElementById("itemQuantity").value = selectedRow.cells[1].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.itemUpc;
    selectedRow.cells[1].innerHTML = formData.itemQuantity;
}

function onDelete(td) {
    if (confirm('Are you sure to delete this inventory Item Record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("supplierList").deleteRow(row.rowIndex);
        resetForm();
    }
}

function validate() {
    isValid = true;
    if (document.getElementById("itemUpc").value == "") {
        isValid = false;
        document.getElementById("itemUpcValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("itemUpcValidationError").classList.contains("hide"))
            document.getElementById("itemUpcValidationError").classList.add("hide");
    }
    /*if (document.getElementById("itemName").value == "") {
        isValid = false;
        document.getElementById("itemNameValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("itemNameValidationError").classList.contains("hide"))
            document.getElementById("itemNameValidationError").classList.add("hide");
    }
    if (document.getElementById("itemDetails").value == "") {
        isValid = false;
        document.getElementById("itemDetailsValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("itemDetailsValidationError").classList.contains("hide"))
            document.getElementById("itemDetailsValidationError").classList.add("hide");
    }
    if (document.getElementById("itemPrice").value == "") {
        isValid = false;
        document.getElementById("itemPriceValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("itemPriceValidationError").classList.contains("hide"))
            document.getElementById("itemPriceValidationError").classList.add("hide");
    }
    if (document.getElementById("itemQuantity").value == "") {
        isValid = false;
        document.getElementById("itemQuantityValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("itemQuantityValidationError").classList.contains("hide"))
            document.getElementById("itemQuantityValidationError").classList.add("hide");
    }
    if (document.getElementById("itemsupplier").value == "") {
        isValid = false;
        document.getElementById("itemsupplierValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("itemsupplierValidationError").classList.contains("hide"))
            document.getElementById("itemsupplierValidationError").classList.add("hide");
    }*/
    return isValid;
}



