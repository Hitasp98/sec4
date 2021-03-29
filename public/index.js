function getmsgs1() {
    $.ajax({
        type: 'POST',
        url: '/get_doc_msgs1',
        contentType: "application/json",
        data: JSON.stringify({
            doc_id_msgs: $('#doct_id').val()
        }),
        dataType: "json",
        success: function (data) {

            for (row of data) {
                $('#msg_q').append("<tr>"
                    + "<td>" + row.BaseTypeTitle + "</td>"
                    + "<td>" + row.CommonBaseTypeId + " </td>"
                    + "<tr>");
            }
        }
    })
}
getmsgs1();
const btnNew = document.querySelector("#new")
const btnClose = document.querySelector('#close')
const btnEdit = document.querySelector("#edit")
const btnClose1 = document.querySelector('#close')
const btnDelete = document.querySelector("#delet")
const btnClose2 = document.querySelector('#close')
const btnInsert = document.querySelector("#btnSave")
btnNew.addEventListener('click', () => {
    document.getElementById('vsave').style.visibility = "inherit"
})
btnClose.addEventListener('click', () => {
    document.getElementById('vsave').style.visibility = "hidden"

})
btnEdit.addEventListener('click', () => {
    document.getElementById('vsave1').style.visibility = "inherit"
})
btnClose1.addEventListener('click', () => {
    document.getElementById('vsave1').style.visibility = "hidden"

})
btnDelete.addEventListener('click', () => {
    document.getElementById('vsave2').style.visibility = "inherit"
})
btnClose2.addEventListener('click', () => {
    document.getElementById('vsave2').style.visibility = "hidden"

})

btnInsert.addEventListener('click',()=>{
    $.ajax({
        type: 'POST',
        url: '/addUser',
        contentType: "application/json",
        data: JSON.stringify({
            nameone:document.getElementById("nameone").value,
            codeone :document.getElementById("codeone").value  }),
        dataType: "json",
       
        
    })
})