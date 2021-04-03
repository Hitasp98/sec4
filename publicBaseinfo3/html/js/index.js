const btnnew=document.querySelector('#new')
const btnEdit=document.querySelector('#edit')
const btnDelete=document.querySelector('#delete')
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
                    row.BranchName +
                    " </td>" +
                    "<td>" +
                    row.OwnerName +
                    " </td>" +  "<td>" +
                    row.CardNumber +
                    " </td>" +  "<td>" +
                    row.AccountNumber +
                    " </td>" +
                    "<td>" +
                    row.AccountName +
                    " </td>" +
                    "</tr>"
                );
            }
        },
    });
}
getmsgs1();


btnnew.addEventListener('click',()=>{
    const namePlace = document.getElementById("nameplace").value;
    const nameBank = document.getElementById("namebank").value;
    const nameNumberAccount = document.getElementById("nameNumberAccunt").value;
    const numberCart = document.getElementById("numberCart").value;
    const numberAccount = document.getElementById("numberAccount").value;

    if (namePlace == "" || nameBank == ""||nameNumberAccount == ""||numberCart == ""||numberAccount == "") {
        alert("epmty")
    } else {
        $.ajax({
            type: "POST",
            url: "/addUser",
            contentType: "application/json",
            data: JSON.stringify({
                namePlace: namePlace,
                nameBank: nameBank,
                nameNumberAccount:nameNumberAccount,
                numberCart:numberCart,
                numberAccount:numberAccount
            }),
            dataType: "json",
        });
        location.reload();

    }
})