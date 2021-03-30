const btnNew = document.querySelector("#new");
const btnClose = document.querySelector("#close");
const btnEdit = document.querySelector("#edit");
const btnClose1 = document.querySelector("#close");
const btnDelete = document.querySelector("#delet");
const btnClose2 = document.querySelector("#close");
const btnInsert = document.querySelector("#btnSave");
const btnUpdate=document.querySelector("#btnupdate");
const btnDel=document.querySelector("#btnDelete")
//!!:show data base on table
function getmsgs1() {
    $.ajax({
        type: "POST",
        url: "/get_doc_msgs1",
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
                    row.BaseTypeTitle +
                    "</td>" +
                    "<td>" +
                    row.CommonBaseTypeId +
                    " </td>" +
                    "<tr>"
                );
            }
        },
    });
}
getmsgs1();
//!show insert input
btnNew.addEventListener("click", () => {
    document.getElementById("vsave").style.visibility = "inherit";
    document.getElementById("vsave1").style.visibility = "hidden";

    document.getElementById("vsave2").style.visibility = "hidden";

});
//!hidden insert input

btnClose.addEventListener("click", () => {
    document.getElementById("vsave").style.visibility = "hidden";
});
//!show edit input

btnEdit.addEventListener("click", () => {
    document.getElementById("vsave1").style.visibility = "inherit";
    document.getElementById("vsave").style.visibility = "hidden";
    document.getElementById("vsave2").style.visibility = "hidden";


});
//!hidden edit input

btnClose1.addEventListener("click", () => {
    document.getElementById("vsave1").style.visibility = "hidden";
});
//!show delete input

btnDelete.addEventListener("click", () => {
    document.getElementById("vsave2").style.visibility = "inherit";
    document.getElementById("vsave1").style.visibility = "hidden";
    document.getElementById("vsave").style.visibility = "hidden";


});
//!hidden delete input

btnClose2.addEventListener("click", () => {
    document.getElementById("vsave2").style.visibility = "hidden";
});
//!send value inset on server 
btnInsert.addEventListener("click", () => {
    const vname = document.getElementById("nameone").value;
const vcode = document.getElementById("codeone").value;

    if (vname==""|| vcode=="") {
        
        alert("epmty")
    } else {
        $.ajax({
            type: "POST",
            url: "/addUser",
            contentType: "application/json",
            data: JSON.stringify({
                nameone: vname,
                codeone: vcode,
            }),
            dataType: "json",
        });
    }    
});
btnUpdate.addEventListener("click",()=>{
    const vname = document.getElementById("nameone1").value;
    const vcode = document.getElementById("codeone1").value;
    if (vname==""|| vcode=="") {
        
        alert("epmty")
    } else {
        $.ajax({
            type: "POST",
            url: "/EditUser",
            contentType: "application/json",
            data: JSON.stringify({
                nameone: vname,
                codeone: vcode,
            }),
            dataType: "json",
        });
        location.reload();

    }    
})

btnDel.addEventListener("click",()=>{
    const vcode = document.getElementById("codeone2").value;
    if ( vcode=="") {
        
        alert("epmty")
    } else {
        $.ajax({
            type: "POST",
            url: "/DeleteUser",
            contentType: "application/json",
            data: JSON.stringify({
                codeone: vcode,
            }),
            dataType: "json",
        });
        location.reload();

    }    
})