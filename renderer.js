// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

let rooms = document.querySelectorAll('.room td');



let mariadb = require('mysql');
let connection = mariadb.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'a981212',
    database: 'hotel'
});

connection.connect();

while(1) {
    connection.query('select state_transaction from room_information', [], function (err, rows) {
        if (err) {
            console.log(err);
        }

        for (let i = 0; i < rows.length; i++) {
            if (rows[i].state_transaction === 0) {
                rooms[i].style.backgroundColor = 'white';
            } else if (rows[i].state_transaction === 1) {
                rooms[i].style.backgroundColor = 'blue';
            } else if (rows[i].state_transaction === 2) {
                rooms[i].style.backgroundColor = 'red';
            }
        }
    });
    sleep(1000);
}

function sleep (delay) {
    var start = new Date().getTime();
    while (new Date().getTime() < start + delay);
}
