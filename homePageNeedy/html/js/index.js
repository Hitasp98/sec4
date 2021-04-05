const btnnew = document.querySelector('#new')
const btnEdit = document.querySelector('#edit')
const btnDelete = document.querySelector('#delete')
const btnSearch = document.querySelector('#btnSearch')

//connect selector
function getmsgs1() {
    $.ajax({
        type: "POST",
        url: "/tblcharityaccounts",
        contentType: "application/json",
        data: JSON.stringify({
            doc_id_msgs: $("#doct_id").val(),

        }),
        dataType: "json",
        success: function (data) {
            for (row of data) {
                $("#msg_q").append(
                    "<tr>" +
                    "<td>" +
                    row.IdNumber +
                    " </td>" +
                    "<td>" +
                    row.sex +
                    " </td>" + "<td>" +
                    row.Family+
                    " </td>" + "<td>" +
                    row.NAME +
                    " </td>" +

                    "</tr>"
                );
            }
        },
    });
}
getmsgs1();


btnnew.addEventListener('click', () => {
    const Name = document.getElementById("Name").value;
    const Family = document.getElementById("Family").value;
    const PersonType = document.getElementById("PersonType").value;
    const NationalCode = document.getElementById("NationalCode").value;
    const BirthDate = document.getElementById("BirthDate").value;
    const BirthPlace = document.getElementById("BirthPlace").value;
    const PersonPhoto = document.getElementById("PersonPhoto").value;
    // const SecretCode = document.getElementById("SecretCode").value;
    const IdNumber = document.getElementById("IdNumber").value;
    const SecretCode ="admin"
    var male=document.getElementById('male').checked;
    var female=document.getElementById('female').checked;
var checked;
if(male==true){
    checked=1
}else {
    checked=0
}
    var PersonId = '610422'
    for (let i = 0; i < 6; i++) {
        var rnadom = Math.floor(Math.random() * 0) + 9;

        PersonId += rnadom.toString()
    }
    PersonId += '5298'
    var rand = Math.floor(Math.random() * 10) + 100
    if (Name == "" || Family == "" && PersonType == "" && NationalCode == "" && BirthDate == "" && BirthPlace == ""&&  SecretCode == ""||PersonPhoto=="") {
        alert("epmty")
    } else {
        $.ajax({
            type: "POST",
            url: "/addUser",
            contentType: "application/json",
            data: JSON.stringify({
                PersonId: PersonId,
                Name: Name,
                Family: Family,
                PersonType: PersonType,
                NationalCode: NationalCode,
                BirthDate: BirthDate,
                BirthPlace: BirthPlace,
                SecretCode:SecretCode,
                checked:checked,
                PersonPhoto:PersonPhoto
            }),
            dataType: "json",
        });
        location.reload();

    }
})
btnEdit.addEventListener('click', () => {
    const namePlace = document.getElementById("bankId").value;
    const nameBank = document.getElementById("namebank").value;
    const nameNumberAccount = document.getElementById("nameNumberAccunt").value;
    const numberCart = document.getElementById("numberCart").value;
    const numberAccount = document.getElementById("numberAccount").value;
    if (namePlace == "" || nameBank == "" || nameNumberAccount == "" || numberCart == "" || numberAccount == "") {

        alert("epmty")
    } else {
        $.ajax({
            type: "POST",
            url: "/EditUser",
            contentType: "application/json",
            data: JSON.stringify({
                charityAccountId: charityAccountId,
                bankId: bankId,
                nameBank: nameBank,
                nameAccount: nameAccount,
                nameNumberAccount: nameNumberAccount,
                numberCart: numberCart,
                numberAccount: numberAccount
            }),
            dataType: "json",
        });
        location.reload();

    }
})
btnDelete.addEventListener('click', () => {
    const chNumber = document.getElementById("chnumber").value;

    if (chNumber == "") {

        alert("epmty")
    } else {
        $.ajax({
            type: "POST",
            url: "/DeleteUser",
            contentType: "application/json",
            data: JSON.stringify({
                charityAccountId: chNumber,

            }),
            dataType: "json",
        });
        location.reload();

    }
})
btnSearch.addEventListener('click', () => {
    const inputSearch = document.getElementById("inputSearch").value;
    console.log(inputSearch)

    if (inputSearch == "") {

        alert("epmty")
    } else {
        $.ajax({
            type: "POST",
            url: "/search",
            contentType: "application/json",
            data: JSON.stringify({
                inputSearch: inputSearch,
                doc_id_msgs: $("#doct_id").val(),
            }),
            dataType: "json",
            success: function (data) {
                for (row of data) {
                    // $('#setSearch').value(row.NAME)
                    document.getElementById('msg_q').textContent=row.NAME
                }
            }
        });
        // location.reload();

    }
})