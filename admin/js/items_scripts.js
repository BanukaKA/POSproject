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
    formData["itemName"] = document.getElementById("itemName").value;
    formData["itemDetails"] = document.getElementById("itemDetails").value;
    formData["itemPrice"] = document.getElementById("itemPrice").value;
    formData["itemQuantity"] = document.getElementById("itemQuantity").value;
    formData["itemSupplier"] = document.getElementById("itemSupplier").value;
    return formData;
}

{
    var table = document.getElementById("itemList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = "2255";
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = "Push Gas Lawn Mower";
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = "Fast cutting";
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = "$255.00";
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = "25";
    cell6 = newRow.insertCell(5);
    cell6.innerHTML = "John Shown";
    cell6 = newRow.insertCell(6);
    cell6.innerHTML = `<a onClick="onEdit(this)"><u><b>Edit</b></u></a>
    <a onClick="onDelete(this)"><u><b>Delete</b></u></a>`;
}

{
    var table = document.getElementById("itemList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = "2236";
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = "Battery Powerd Mower";
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = "Rechargeable Batteries";
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = "$123.00";
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = "15";
    cell6 = newRow.insertCell(5);
    cell6.innerHTML = "Lily Ferry";
    cell6 = newRow.insertCell(6);
    cell6.innerHTML = `<a onClick="onEdit(this)"><u><b>Edit</b></u></a>
    <a onClick="onDelete(this)"><u><b>Delete</b></u></a>`;
}

{
    var table = document.getElementById("itemList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = "3322";
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = "Corded Push Mower";
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = "Smooth Cutting";
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = "$169.00";
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = "08";
    cell6 = newRow.insertCell(5);
    cell6.innerHTML = "Brock Reigns";
    cell6 = newRow.insertCell(6);
    cell6.innerHTML = `<a onClick="onEdit(this)"><u><b>Edit</b></u></a>
    <a onClick="onDelete(this)"><u><b>Delete</b></u></a>`;
}

{
    var table = document.getElementById("itemList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = "7725";
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = "Riding Lawn Mower";
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = "Easy Cutting";
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = "$223.00";
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = "19";
    cell6 = newRow.insertCell(5);
    cell6.innerHTML = "Roman Lesner";
    cell6 = newRow.insertCell(6);
    cell6.innerHTML = `<a onClick="onEdit(this)"><u><b>Edit</b></u></a>
    <a onClick="onDelete(this)"><u><b>Delete</b></u></a>`;
}


function insertNewRecord(data) {
    var table = document.getElementById("itemList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.itemUpc;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.itemName;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.itemDetails;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = "$" + data.itemPrice;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.itemQuantity;
    cell6 = newRow.insertCell(5);
    cell6.innerHTML = data.itemSupplier;
    cell6 = newRow.insertCell(6);
    cell6.innerHTML = `<a onClick="onEdit(this)"><u><b>Edit</b></u></a>
    <a onClick="onDelete(this)"><u><b>Delete</b></u></a>`;
}

function resetForm() {
    document.getElementById("itemUpc").value = "";
    document.getElementById("itemName").value = "";
    document.getElementById("itemDetails").value = "";
    document.getElementById("itemPrice").value = "";
    document.getElementById("itemQuantity").value = "";
    document.getElementById("itemSupplier").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("itemUpc").value = selectedRow.cells[0].innerHTML;
    document.getElementById("itemName").value = selectedRow.cells[1].innerHTML;
    document.getElementById("itemDetails").value = selectedRow.cells[2].innerHTML;
    document.getElementById("itemPrice").value = selectedRow.cells[3].innerHTML;
    document.getElementById("itemQuantity").value = selectedRow.cells[4].innerHTML;
    document.getElementById("itemSupplier").value = selectedRow.cells[5].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.itemUpc;
    selectedRow.cells[1].innerHTML = formData.itemName;
    selectedRow.cells[2].innerHTML = formData.itemDetails;
    selectedRow.cells[3].innerHTML = formData.itemPrice;
    selectedRow.cells[4].innerHTML = formData.itemQuantity;
    selectedRow.cells[5].innerHTML = formData.itemSupplier;
}

function onDelete(td) {
    if (confirm('Are you sure to delete this Item Record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("itemList").deleteRow(row.rowIndex);
        resetForm();
    }
}



function validate() {
    isValid = true;
    if (document.getElementById("itemUpc").value == "") {
        isValid = false;
        document.getElementById("itemUpcValidationError").classList.remove("hide");
    } 
    else {
        isValid = true;
        if (!document.getElementById("itemUpcValidationError").classList.contains("hide"))
            document.getElementById("itemUpcValidationError").classList.add("hide");
    }
    if (document.getElementById("itemName").value == "") {
        isValid = false;
        document.getElementById("itemNameValidationError").classList.remove("hide");
    } 
    else {
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
    if (document.getElementById("itemSupplier").value == "") {
        isValid = false;
        document.getElementById("itemSupplierValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("itemSupplierValidationError").classList.contains("hide"))
            document.getElementById("itemSupplierValidationError").classList.add("hide");
    }

    return isValid;
}


