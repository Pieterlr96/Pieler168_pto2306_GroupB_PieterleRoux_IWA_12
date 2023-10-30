const STATUS_MAP = {
    shelf: {
        color: 'green',
        canReserve: true,
        canCheckout: true,
        canCheckIn: false,
    },
    reserved: {
        color: 'blue',
        canReserve: false,
        canCheckout: true,
        canCheckIn: false,
    },
    overdue: {
        color: 'red',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    },
    checkedOut: {
        color: 'orange',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    }
}

// Edit below line 


let bookStatus = {
    0:{
status0: document.querySelector('[id = "book1"] [class = "status"]'),
reserve: document.querySelector('[id = "book1"] [class = "reserve"]'),
checkout: document.querySelector('[id = "book1"] [class = "checkout"]'),
checkin: document.querySelector('[id = "book1"] [class = "checkin"]'),
    },
   1:{ 
status1: document.querySelector('[id = "book2"] [class = "status"]'),
reserve: document.querySelector('[id = "book2"] [class = "reserve"]'),
checkout: document.querySelector('[id = "book2"] [class = "checkout"]'),
checkin: document.querySelector('[id = "book2"] [class = "checkin"]'),
   },
2:{
status2: document.querySelector('[id = "book3"] [class = "status"]'),
reserve: document.querySelector('[id = "book3"] [class = "reserve"]'),
checkout: document.querySelector('[id = "book3"] [class = "checkout"]'),
checkin: document.querySelector('[id = "book3"] [class = "checkin"]'),
}
}

bookStatus[0].status0.color =''
bookStatus[0].status0.style.color = STATUS_MAP.overdue.color
bookStatus[0].reserve = STATUS_MAP.overdue.canReserve ? enabled = true : disabled = false
bookStatus[0].checkout = STATUS_MAP.overdue.canCheckout ? enabled = true : disabled = false
bookStatus[0].checkin = STATUS_MAP.overdue.canCheckIn ? enabled = true : disabled = false

//reserve button
if (bookStatus[0].reserve === true){
    document.querySelector('[id = "book1"] [class = "reserve"]').style.color = `rgb(0,0,0)`;
} else {
    document.querySelector('[id = "book1"] [class = "reserve"]').style.color = `rgb(128, 128, 128)`;
}
//checkout button
if (bookStatus[0].checkout === true){
    document.querySelector('[id = "book1"] [class = "checkout"]').style.color = `rgb(0,0,0)`;
} else {
    document.querySelector('[id = "book1"] [class = "checkout"]').style.color = `rgb(128, 128, 128)`;
}
//checkin button
if (bookStatus[0].checkin === true){
    document.querySelector('[id = "book1"] [class = "checkin"]').style.color = `rgb(0,0,0)`;
} else {
    document.querySelector('[id = "book1"] [class = "checkin"]').style.color = `rgb(128, 128, 128)`;
}

bookStatus[1].checkin.color = ''
bookStatus[1].status1.style.color = STATUS_MAP.reserved.color
bookStatus[1].reserve = STATUS_MAP.reserved.canReserve ? enabled = true : disabled = false
bookStatus[1].checkout = STATUS_MAP.reserved.canCheckout ? enabled = true : disabled = false
bookStatus[1].checkin = STATUS_MAP.reserved.canCheckIn ? enabled = true : disabled = false
//reserve button
if (bookStatus[1].reserve === true){
    document.querySelector('[id = "book2"] [class = "reserve"]').style.color = `rgb(0,0,0)`;
} else {
    document.querySelector('[id = "book2"] [class = "reserve"]').style.color = `rgb(128, 128, 128)`;
}
//checkout button
if (bookStatus[1].checkout === true){
    document.querySelector('[id = "book2"] [class = "checkout"]').style.color = `rgb(0,0,0)`;
} else {
    document.querySelector('[id = "book2"] [class = "checkout"]').style.color = `rgb(128, 128, 128)`;
}
//checkin button
if (bookStatus[1].checkin === true){
    document.querySelector('[id = "book2"] [class = "checkin"]').style.color = `rgb(0,0,0)`;
} else {
    document.querySelector('[id = "book2"] [class = "checkin"]').style.color = `rgb(128, 128, 128)`;
}

bookStatus[2].checkin.color =''
bookStatus[2].status2.style.color = STATUS_MAP.shelf.color
bookStatus[2].reserve = STATUS_MAP.shelf.canReserve ? enabled = true : disabled = false
bookStatus[2].checkout = STATUS_MAP.shelf.canCheckout ? enabled = true : disabled = false
bookStatus[2].checkin = STATUS_MAP.shelf.canCheckIn ? enabled = true : disabled = false
//reserve button
if (bookStatus[2].reserve === true){
    document.querySelector('[id = "book3"] [class = "reserve"]').style.color = `rgb(0,0,0)`;
} else {
    document.querySelector('[id = "book3"] [class = "reserve"]').style.color = `rgb(128, 128, 128)`;
}
//checkout button
if (bookStatus[2].checkout === true){
    document.querySelector('[id = "book3"] [class = "checkout"]').style.color = `rgb(0,0,0)`;
} else {
    document.querySelector('[id = "book3"] [class = "checkout"]').style.color = `rgb(128, 128, 128)`;
}
//checkin button
if (bookStatus[2].checkin === true){
    document.querySelector('[id = "book3"] [class = "checkin"]').style.color = `rgb(0,0,0)`;
} else {
    document.querySelector('[id = "book3"] [class = "checkin"]').style.color = `rgb(128, 128, 128)`;
}
