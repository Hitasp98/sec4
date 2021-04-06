//button table one 
const btnNew = document.querySelector("#new");
const btnClose = document.querySelector("#close");
const btnEdit = document.querySelector("#edit");
const btnClose1 = document.querySelector("#close1");
const btnDelete = document.querySelector("#delet");
const btnClose2 = document.querySelector("#close2");
const btnInsert = document.querySelector("#btnSave");
const btnUpdate = document.querySelector("#btnupdate");
const btnDel = document.querySelector("#btnDelete")
//button table tow
const btnNewTwo = document.querySelector("#newTwo");
const btnCloseTwo = document.querySelector("#closeTwo");
const btnEditTwo1 = document.querySelector("#editTwo");
const btnCloseTwo1 = document.querySelector("#closeTwo1");
const btnDeleteTwo1 = document.querySelector("#deleteTwo");
const btnCloseTwo2 = document.querySelector("#closeTwo2");
const btnInsertTwo = document.querySelector("#btnSaveTwo");
const btnUpdateTwo = document.querySelector("#btnUpdateTwo");
const btnDeTow = document.querySelector("#btnDeleteTwo")
const btnSearch = document.querySelector('#btnSearch')

//!!:show data base on table
function getmsgs1() {
    $.ajax({
        type: "POST",
        url: "/productcommonbasetype/selecttblcommonbasetype",
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
//ajax db select
function tblcommonbasedata() {
    $.ajax({
        type: "POST",
        url: "/productcommonbasedata/selecttblcommonbasedata",
        contentType: "application/json",
        data: JSON.stringify({
            doc_id_msgs: $("#doct_id").val(),
        }),
        dataType: "json",
        success: function (data) {
            for (row of data) {
                $("#dbdataTwo").append(
                    "<tr>" +
                    "<td>" +
                    row.BaseCode     +
                    "</td>" +
                    "<td>" +
                    row.BaseValue +
                    " </td>" +
                    "<tr>"
                );
            }
        },
    });
}
tblcommonbasedata();
//!show insert input
btnNew.addEventListener("click", () => {
    document.getElementById("vsave").style.visibility = "inherit";
    document.getElementById("vsave1").style.visibility = "hidden";

    document.getElementById("vsave2").style.visibility = "hidden";

});
btnNewTwo.addEventListener("click", () => {
    document.getElementById("vsaveTwo").style.visibility = "inherit";
    document.getElementById("vsaveTwo1").style.visibility = "hidden";

    document.getElementById("vsaveTwo2").style.visibility = "hidden";

});
//!hidden insert input
btnClose.addEventListener("click", () => {
    document.getElementById("vsave").style.visibility = "hidden";
});
btnCloseTwo.addEventListener("click", () => {
    document.getElementById("vsaveTwo").style.visibility = "hidden";
});
//!show edit input

btnEdit.addEventListener("click", () => {
    document.getElementById("vsave1").style.visibility = "inherit";
    document.getElementById("vsave").style.visibility = "hidden";
    document.getElementById("vsave2").style.visibility = "hidden";


});
btnEditTwo1.addEventListener("click", () => {
    document.getElementById("vsaveTwo1").style.visibility = "inherit";
    document.getElementById("vsaveTwo").style.visibility = "hidden";
    document.getElementById("vsaveTwo2").style.visibility = "hidden";


});
//!hidden edit input

btnClose1.addEventListener("click", () => {
    document.getElementById("vsave1").style.visibility = "hidden";
});
btnCloseTwo1.addEventListener("click", () => {
    document.getElementById("vsaveTwo1").style.visibility = "hidden";
});
//!show delete input
btnDelete.addEventListener("click", () => {
    document.getElementById("vsave2").style.visibility = "inherit";
    document.getElementById("vsave1").style.visibility = "hidden";
    document.getElementById("vsave").style.visibility = "hidden";


});
btnDeleteTwo1.addEventListener("click", () => {
    document.getElementById("vsaveTwo2").style.visibility = "inherit";
    document.getElementById("vsaveTwo1").style.visibility = "hidden";
    document.getElementById("vsaveTwo").style.visibility = "hidden";


});
//!hidden delete input

btnCloseTwo2.addEventListener("click", () => {
    document.getElementById("vsaveTwo2").style.visibility = "hidden";
});
//!send value inset on server 
btnInsert.addEventListener("click", () => {
    const vname = document.getElementById("nameone").value;
    const vcode = document.getElementById("codeone").value;
    var s=[];
    if (vname == "" || vcode == "") {

        alert("epmty")
    } else {
        $.ajax({
            type: "POST",
            url: "/productcommonbasetype/searchBasetype",
            contentType: "application/json",
            data: JSON.stringify({
                BaseTypeTitle: vname,
                CommonBaseTypeId: vcode,           
                     doc_id_msgs: $("#doct_id").val(),
            }),
            dataType: "json",
            success: function (data) {
                for (row of data) {
                    // document.getElementById('msg_q').textContent=row.BaseTypeTitle
                    s.push(row)
                }
                // console.log(s.length)
                if(s.length>0){ 
                    alert("is here")
                }else{
                const BaseTypeCode =Math.floor(Math.random()*999)+100
                $.ajax({
                    type: "POST",
                    url: "/productcommonbasetype/addUserBasetype",
                    contentType: "application/json",
                    data: JSON.stringify({
                        nameone: vname,
                        codeone: vcode,
                        BaseTypeCode:BaseTypeCode
                    }),
                    dataType: "json",
                });
              
            }
            }
            
        });

       
    }
});
btnUpdate.addEventListener("click", () => {
    const vname = document.getElementById("nameone1").value;
    const vcode = document.getElementById("codeone1").value;
    if (vname == "" || vcode == "") {

        alert("epmty")
    } else {
        $.ajax({
            type: "POST",
            url: "/productcommonbasetype/UpdateBasetype",
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

btnDel.addEventListener("click", () => {
    const vcode = document.getElementById("codeone2").value;
    if (vcode == "") {

        alert("epmty")
    } else {
        $.ajax({
            type: "POST",
            url: "/productcommonbasetype/DeleteBasetype",
            contentType: "application/json",
            data: JSON.stringify({
                codeone: vcode,

            }),
            dataType: "json",
        });
        location.reload();

    }
})

// btnSearch.addEventListener('click', () => {
//     const CommonBaseTypeId = document.getElementById("inputSearch").value;
//     console.log(CommonBaseTypeId)

//     if (CommonBaseTypeId == "") {

//         $.ajax({
//             type: "POST",
//             url: "/productcommonbasetype/selecttblcommonbasetype",
//             contentType: "application/json",
//             data: JSON.stringify({
//                 doc_id_msgs: $("#doct_id").val(),
    
//             }),
//             dataType: "json",
//             success: function (data) {
//                 for (row of data) {
//                     $("#msg_q").append(
//                         "<tr>" +
//                         "<td>" +
//                         row.BaseTypeTitle +
//                         "</td>" +
//                         "<td>" +
//                         row.CommonBaseTypeId +
//                         " </td>" +
//                         "<tr>"
//                     );
//                 }
//             },
//         });

//     } else {
//         $.ajax({
//             type: "POST",
//             url: "/productcommonbasetype/searchBasetype",
//             contentType: "application/json",
//             data: JSON.stringify({
//                 CommonBaseTypeId: CommonBaseTypeId,
//                 doc_id_msgs: $("#doct_id").val(),
//             }),
//             dataType: "json",
//             success: function (data) {
//                 for (row of data) {
//                     document.getElementById('msg_q').textContent=row.BaseTypeTitle
//                 }
//             }
//         });
//         // location.reload();

//     }
// })

//table two
btnInsertTwo.addEventListener("click", () => {
    const vname = document.getElementById("nameoneTwo").value;
    const vcode = document.getElementById("codeoneTwo").value;
    sNumber = vcode.toString();
    randnumber = []
    insertnumber = []
    for (var i = 0, len = sNumber.length; i < len; i += 1) {
        randnumber.push(+sNumber.charAt(i))
    }
    
    var rand = Math.floor(Math.random() * 999) + 100
    var random = rand.toString()
    console.log(random)
    var ins='';
    for (let j = 0; j < 3; j++) {
        ins+=randnumber[j]
    }
    ins+=random
    if (vname == "" || vcode == "") {
        alert("epmty")
    } else {
        $.ajax({
            type: "POST",
            url: "/productcommonbasedata/addUserBasedata",
            contentType: "application/json",
            data: JSON.stringify({
                nameone: vname,
                codeone: vcode,
                idrandom:ins

            }),
            dataType: "json",
        });
        location.reload();

    }
});
btnUpdateTwo.addEventListener("click", () => {
    console.log('up')
    const vname = document.getElementById("nameoneTwo1").value;
    const vcode = document.getElementById("codeoneTwo1").value;

    if (vname == "" || vcode == "") {
        alert("epmty")
    } else {
        $.ajax({
            type: "POST",
            url: "/productcommonbasedata/UpdateBasedata",
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
btnDeTow.addEventListener("click", () => {
    const vcode = document.getElementById("codeoneTwo2").value;
    if (vcode == "") {

        alert("epmty")
    } else {
        $.ajax({
            type: "POST",
            url: "/productcommonbasedata/DeleteBasedata",
            contentType: "application/json",
            data: JSON.stringify({
                codeone: vcode,
            }),
            dataType: "json",
        });
        location.reload();

    }
})
