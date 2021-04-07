//button table one
const btnNew = document.querySelector('#new')
const btnClose = document.querySelector('#close')
const btnEdit = document.querySelector('#edit')
const btnClose1 = document.querySelector('#close1')
const btnDelete = document.querySelector('#delet')
const btnClose2 = document.querySelector('#close2')
const btnInsert = document.querySelector('#btnSave')
const btnUpdate = document.querySelector('#btnupdate')
const btnDel = document.querySelector('#btnDelete')
//button table tow
const btnNewTwo = document.querySelector('#newTwo')
const btnCloseTwo = document.querySelector('#closeTwo')
const btnEditTwo1 = document.querySelector('#editTwo')
const btnCloseTwo1 = document.querySelector('#closeTwo1')
const btnDeleteTwo1 = document.querySelector('#deleteTwo')
const btnCloseTwo2 = document.querySelector('#closeTwo2')
const btnInsertTwo = document.querySelector('#btnSaveTwo')
const btnUpdateTwo = document.querySelector('#btnUpdateTwo')
const btnDeTow = document.querySelector('#btnDeleteTwo')
const btnSearch = document.querySelector('#btnSearch')

//!!:show data base on table
function ws_loadBaseType (vname = 1, vid = 1, vcode = 1) {
  if (vname === 1 && vid === 1 && vcode === 1) {
    $.ajax({
      type: 'POST',
      url: '/productcommonbasetype/selectTbBasetypeone',
      contentType: 'application/json',
      data: JSON.stringify({
        doc_id_msgs: $('#doct_id').val(),
        CommonBaseTypeId: vname,
        BaseTypeTitle: vid,
        BaseTypeCode: vcode
      }),
      dataType: 'json',
      success: function (data) {
        for (row of data) {
          $('#msg_q').append(
            '<tr>' +
              '<td>' +
              row.BaseTypeTitle +
              '</td>' +
              '<td>' +
              row.CommonBaseTypeId +
              ' </td>' +
              '<tr>'
          )
        }
      }
    })
  } else if (vname !== 1 && vId === 1 && vcode === 1) {
    $.ajax({
      type: 'POST',
      url: '/productcommonbasetype/searchTbBaseTypeTitle',
      contentType: 'application/json',
      data: JSON.stringify({
        doc_id_msgs: $('#doct_id').val(),
        BaseTypeTitle: vname
      }),
      dataType: 'json',
      success: function (data) {
        for (row of data) {
          $('#msg_q').append(
            '<tr>' +
              '<td>' +
              row.BaseTypeTitle +
              '</td>' +
              '<td>' +
              row.CommonBaseTypeId +
              ' </td>' +
              '<tr>'
          )
        }
      }
    })
  } else if (vname === 1 && vId !== 1 && vcode === 1) {
    $.ajax({
      type: 'POST',
      url: '/productcommonbasetype/searchBasetype',
      contentType: 'application/json',
      data: JSON.stringify({
        doc_id_msgs: $('#doct_id').val(),
        CommonBaseTypeId: vid
      }),
      dataType: 'json',
      success: function (data) {
        for (row of data) {
          $('#msg_q').append(
            '<tr>' +
              '<td>' +
              row.BaseTypeTitle +
              '</td>' +
              '<td>' +
              row.CommonBaseTypeId +
              ' </td>' +
              '<tr>'
          )
        }
      }
    })
  } else {
    $.ajax({
      type: 'POST',
      url: '/productcommonbasetype/selecttblcommonbasetype',
      contentType: 'application/json',
      data: JSON.stringify({
        doc_id_msgs: $('#doct_id').val(),
        CommonBaseTypeId: vid,
        BaseTypeTitle: vname,
        BaseTypeCode: vcode
      }),
      dataType: 'json',
      success: function (data) {
        for (row of data) {
          $('#msg_q').append(
            '<tr>' +
              '<td>' +
              row.BaseTypeTitle +
              '</td>' +
              '<td>' +
              row.CommonBaseTypeId +
              ' </td>' +
              '<tr>'
          )
        }
      }
    })
  }
}
ws_loadBaseType()
//ajax db select
function ws_loadCharityAccounts (
  CommonBaseDataId = 1,
  BaseCode = 1,
  BaseValue = 1,
  CommonBaseTypeID = 1
) {
  if (
    CommonBaseDataId === 1 &&
    BaseCode === 1 &&
    BaseValue === 1 &&
    CommonBaseTypeID === 1
  ) {
    $.ajax({
      type: 'POST',
      url: '/productcommonbasedata/selecttblcommonbasedata',
      contentType: 'application/json',
      data: JSON.stringify({
        doc_id_msgs: $('#doct_id').val()
      }),
      dataType: 'json',
      success: function (data) {
        for (row of data) {
          $('#dbdataTwo').append(
            '<tr>' +
              '<td>' +
              row.BaseCode +
              '</td>' +
              '<td>' +
              row.BaseValue +
              ' </td>' +
              '<tr>'
          )
        }
      }
    })
  } else if (
    CommonBaseDataId !== 1 &&
    BaseCode === 1 &&
    BaseValue === 1 &&
    CommonBaseTypeID === 1
  ) {
    $.ajax({
      type: 'POST',
      url: '/productcommonbasedata/selectTbSearch',
      contentType: 'application/json',
      data: JSON.stringify({
        doc_id_msgs: $('#doct_id').val(),
        filter: 'CommonBaseDataId',
        value: CommonBaseDataId
      }),
      dataType: 'json',
      success: function (data) {
        for (row of data) {
          $('#dbdataTwo').append(
            '<tr>' +
              '<td>' +
              row.BaseValue +
              '</td>' +
              '<td>' +
              row.BaseCode +
              ' </td>' +
              '<tr>'
          )
        }
      }
    })
  } else if (
    CommonBaseDataId === 1 &&
    BaseCode !== 1 &&
    BaseValue === 1 &&
    CommonBaseTypeID === 1
  ) {
    $.ajax({
      type: 'POST',
      url: '/productcommonbasedata/selectTbSearch',
      contentType: 'application/json',
      data: JSON.stringify({
        doc_id_msgs: $('#doct_id').val(),
        filter: 'BaseCode',
        value: BaseCode
      }),
      dataType: 'json',
      success: function (data) {
        for (row of data) {
          $('#dbdataTwo').append(
            '<tr>' +
              '<td>' +
              row.CommonBaseDataId +
              '</td>' +
              '<td>' +
              row.BaseValue +
              ' </td>' +
              '<tr>'
          )
        }
      }
    })
  } else if (
    CommonBaseDataId === 1 &&
    BaseCode === 1 &&
    BaseValue !== 1 &&
    CommonBaseTypeID === 1
  ) {
    $.ajax({
      type: 'POST',
      url: '/productcommonbasedata/selectTbSearch',
      contentType: 'application/json',
      data: JSON.stringify({
        doc_id_msgs: $('#doct_id').val(),
        filter: 'BaseValue',
        value: BaseValue
      }),
      dataType: 'json',
      success: function (data) {
        for (row of data) {
          $('#dbdataTwo').append(
            '<tr>' +
              '<td>' +
              row.BaseCode +
              '</td>' +
              '<td>' +
              row.CommonBaseDataId +
              ' </td>' +
              '<tr>'
          )
        }
      }
    })
  } else if (
    CommonBaseDataId === 1 &&
    BaseCode === 1 &&
    BaseValue === 1 &&
    CommonBaseTypeID !== 1
  ) {
    $.ajax({
      type: 'POST',
      url: '/productcommonbasedata/selectTbSearch',
      contentType: 'application/json',
      data: JSON.stringify({
        doc_id_msgs: $('#doct_id').val(),
        filter: 'CommonBaseTypeID',
        value: CommonBaseTypeID
      }),
      dataType: 'json',
      success: function (data) {
        for (row of data) {
          $('#dbdataTwo').append(
            '<tr>' +
              '<td>' +
              row.BaseValue +
              '</td>' +
              '<td>' +
              row.CommonBaseDataId +
              ' </td>' +
              '<tr>'
          )
        }
      }
    })
  }
}
ws_loadCharityAccounts()
//!show insert input
btnNew.addEventListener('click', () => {
  document.getElementById('vsave').style.visibility = 'inherit'
  document.getElementById('vsave1').style.visibility = 'hidden'

  document.getElementById('vsave2').style.visibility = 'hidden'
})
btnNewTwo.addEventListener('click', () => {
  document.getElementById('vsaveTwo').style.visibility = 'inherit'
  document.getElementById('vsaveTwo1').style.visibility = 'hidden'

  document.getElementById('vsaveTwo2').style.visibility = 'hidden'
})
//!hidden insert input
btnClose.addEventListener('click', () => {
  document.getElementById('vsave').style.visibility = 'hidden'
})
btnCloseTwo.addEventListener('click', () => {
  document.getElementById('vsaveTwo').style.visibility = 'hidden'
})
//!show edit input

btnEdit.addEventListener('click', () => {
  document.getElementById('vsave1').style.visibility = 'inherit'
  document.getElementById('vsave').style.visibility = 'hidden'
  document.getElementById('vsave2').style.visibility = 'hidden'
})
btnEditTwo1.addEventListener('click', () => {
  document.getElementById('vsaveTwo1').style.visibility = 'inherit'
  document.getElementById('vsaveTwo').style.visibility = 'hidden'
  document.getElementById('vsaveTwo2').style.visibility = 'hidden'
})
//!hidden edit input

btnClose1.addEventListener('click', () => {
  document.getElementById('vsave1').style.visibility = 'hidden'
})
btnCloseTwo1.addEventListener('click', () => {
  document.getElementById('vsaveTwo1').style.visibility = 'hidden'
})
//!show delete input
btnDelete.addEventListener('click', () => {
  document.getElementById('vsave2').style.visibility = 'inherit'
  document.getElementById('vsave1').style.visibility = 'hidden'
  document.getElementById('vsave').style.visibility = 'hidden'
})
btnDeleteTwo1.addEventListener('click', () => {
  document.getElementById('vsaveTwo2').style.visibility = 'inherit'
  document.getElementById('vsaveTwo1').style.visibility = 'hidden'
  document.getElementById('vsaveTwo').style.visibility = 'hidden'
})
//!hidden delete input

btnCloseTwo2.addEventListener('click', () => {
  document.getElementById('vsaveTwo2').style.visibility = 'hidden'
})
//!send value inset on server

function ws_CreateBaseType (BaseTypeCode, BaseTypeTitle) {
  var s = []
  if (BaseTypeTitle == '' || BaseTypeCode == '') {
    alert('epmty')
  } else {
      //Todo: give data for chack 
    $.ajax({
      type: 'POST',
      url: '/productcommonbasetype/searchBasetype',
      contentType: 'application/json',
      data: JSON.stringify({
        //   BaseTypeTitle: BaseTypeTitle,
        BaseTypeCode: BaseTypeCode,
        doc_id_msgs: $('#doct_id').val()
      }),

      dataType: 'json',
      success: function (data) {
        for (row of data) {
          // document.getElementById('msg_q').textContent=row.BaseTypeTitle
          s.push(row)
        }
        // console.log(s.length)

        $.ajax({
          type: 'POST',
          url: '/productcommonbasetype/searchTbBaseTypeTitle',
          contentType: 'application/json',
          data: JSON.stringify({
            BaseTypeTitle: BaseTypeTitle
          }),
          dataType: 'json',
          success: function (data) {
            for (row of data) {
              // document.getElementById('msg_q').textContent=row.BaseTypeTitle
              s.push(row)
            }
          }
        })

        if (s.length > 0) {
          alert('is here')
        } else {
          const vcode = Math.floor(Math.random() * 999) + 100
          $.ajax({
            type: 'POST',
            url: '/productcommonbasetype/addUserBasetype',
            contentType: 'application/json',
            data: JSON.stringify({
              nameone: BaseTypeTitle,
              codeone: vcode,
              BaseTypeCode: BaseTypeCode
            }),
            dataType: 'json'
          })
        }
      }
    })
  }
}
function ws_UpdateBaseType (BaseTypeCode, BaseTypeTitle, CommonBaseTypeId) {
    if (BaseTypeTitle == '' || BaseTypeCode == '') {
      alert('epmty')
    } else {
      $.ajax({
        type: 'POST',
        url: '/productcommonbasetype/UpdateBasetype',
        contentType: 'application/json',
        data: JSON.stringify({
          BaseTypeTitle: BaseTypeTitle,
          BaseTypeCode: BaseTypeCode,
          CommonBaseTypeId: CommonBaseTypeId
        }),
        dataType: 'json'
      })
      location.reload()
    }
  }
function ws_DeleteBaseType (CommonBaseTypeId) {
  if (vcode == '') {
    alert('epmty')
  } else {
    $.ajax({
      type: 'POST',
      url: '/productcommonbasetype/DeleteBasetype',
      contentType: 'application/json',
      data: JSON.stringify({
        CommonBaseTypeId: CommonBaseTypeId
      }),
      dataType: 'json'
    })
    location.reload()
  }
}

btnInsert.addEventListener('click', () => {
  const vname = document.getElementById('nameone').value
  const vcode = document.getElementById('codeone').value
  ws_CreateBaseType(vcode, vname)
})

btnUpdate.addEventListener('click', () => {
  const vname = document.getElementById('nameone1').value
  const vcode = document.getElementById('codeone1').value
  var code;
  var sumBaseTypeTitle=[]
//TODO:Give a BaseTypeCode
  $.ajax({
    type: 'POST',
    url: '/productcommonbasetype/searchTbBasetype',
    contentType: 'application/json',
    data: JSON.stringify({
      doc_id_msgs: $('#doct_id').val(),

      BaseTypeCode: vcode
    }),
    dataType: 'json',
    success: function (data) {
      for (row of data) {
        code = row.CommonBaseTypeId
      }
    }
  })
//Todo : check data for uqiun
 $.ajax({
    type: 'POST',
    url: '/productcommonbasetype/searchTbBaseTypeTitle',
    contentType: 'application/json',
    data: JSON.stringify({
      doc_id_msgs: $('#doct_id').val(),
//Todo : send BaseTypeTitle
      BaseTypeTitle: vname
    }),
    dataType: 'json',
    success: function (data) {
      for (row of data) {
        sumBaseTypeTitle+=row
      }
    }
  })
  if(sumBaseTypeTitle===0){
  ws_UpdateBaseType(vcode, vname, code)}
  else { 
      alert('was insert ')
  }
})

btnDel.addEventListener('click', () => {
  const vcode = document.getElementById('codeone1').value
  var code

  $.ajax({
    type: 'POST',
    url: '/productcommonbasetype/searchTbBasetype',
    contentType: 'application/json',
    data: JSON.stringify({
      doc_id_msgs: $('#doct_id').val(),

      BaseTypeCode: vcode
    }),
    dataType: 'json',
    success: function (data) {
      for (row of data) {
        code = row.CommonBaseTypeId
      }
    }
  })
  ws_DeleteBaseType(code)
})

btnSearch.addEventListener('click', () => {
  const CommonBaseTypeId = document.getElementById('inputSearch').value
  console.log(CommonBaseTypeId)

  if (CommonBaseTypeId == '') {
    $.ajax({
      type: 'POST',
      url: '/productcommonbasetype/selecttblcommonbasetype',
      contentType: 'application/json',
      data: JSON.stringify({
        doc_id_msgs: $('#doct_id').val()
      }),
      dataType: 'json',
      success: function (data) {
        for (row of data) {
          $('#msg_q').append(
            '<tr>' +
              '<td>' +
              row.BaseTypeTitle +
              '</td>' +
              '<td>' +
              row.CommonBaseTypeId +
              ' </td>' +
              '<tr>'
          )
        }
      }
    })
  } else {
    $.ajax({
      type: 'POST',
      url: '/productcommonbasetype/searchBasetype',
      contentType: 'application/json',
      data: JSON.stringify({
        CommonBaseTypeId: CommonBaseTypeId,
        doc_id_msgs: $('#doct_id').val()
      }),
      dataType: 'json',
      success: function (data) {
        for (row of data) {
          document.getElementById('msg_q').textContent = row.BaseTypeTitle
        }
      }
    })
    // location.reload();
  }
})

//table two
btnInsertTwo.addEventListener('click', () => {
  const vname = document.getElementById('nameoneTwo').value
  const vcode = document.getElementById('codeoneTwo').value
  sNumber = vcode.toString()
  randnumber = []
  insertnumber = []
  for (var i = 0, len = sNumber.length; i < len; i += 1) {
    randnumber.push(+sNumber.charAt(i))
  }

  var rand = Math.floor(Math.random() * 999) + 100
  var random = rand.toString()
  console.log(random)
  var ins = ''
  for (let j = 0; j < 3; j++) {
    ins += randnumber[j]
  }
  ins += random
  if (vname == '' || vcode == '') {
    alert('epmty')
  } else {
    $.ajax({
      type: 'POST',
      url: '/productcommonbasedata/addUserBasedata',
      contentType: 'application/json',
      data: JSON.stringify({
        nameone: vname,
        codeone: vcode,
        idrandom: ins
      }),
      dataType: 'json'
    })
    location.reload()
  }
})
btnUpdateTwo.addEventListener('click', () => {
  console.log('up')
  const vname = document.getElementById('nameoneTwo1').value
  const vcode = document.getElementById('codeoneTwo1').value

  if (vname == '' || vcode == '') {
    alert('epmty')
  } else {
    $.ajax({
      type: 'POST',
      url: '/productcommonbasedata/UpdateBasedata',
      contentType: 'application/json',
      data: JSON.stringify({
        nameone: vname,
        codeone: vcode
      }),
      dataType: 'json'
    })
    location.reload()
  }
})
btnDeTow.addEventListener('click', () => {
  const vcode = document.getElementById('codeoneTwo2').value
  if (vcode == '') {
    alert('epmty')
  } else {
    $.ajax({
      type: 'POST',
      url: '/productcommonbasedata/DeleteBasedata',
      contentType: 'application/json',
      data: JSON.stringify({
        codeone: vcode
      }),
      dataType: 'json'
    })
    location.reload()
  }
})
