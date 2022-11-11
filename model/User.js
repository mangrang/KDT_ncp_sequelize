// TODO: DB(mysql) 연결
// TODO: 모델 코드

const mysql = require('mysql');

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'user',
    password: '1234',
    database: 'kdt',
  });
  
  exports.overlap = (data, callback) => {
    // data: 사용자가 폼에 입력한 정보

    conn.query(
        `SELECT * FROM user WHERE userid = '${data.userid}'`,
      (err, rows) => {
        if (err) {
          throw err;
        }
        console.log('signinBtn.js', rows);
        callback(rows[0]);
        // callback();
      }
    );
  };



exports.signupBtn = (data, callback) => {
    // data: 사용자가 폼에 입력한 정보

    conn.query(
      `INSERT INTO user (userid, name, pw) VALUES('${data.userid}','${data.name}', '${data.pw}')`,
      (err, rows) => {
        if (err) {
          throw err;
        }
        console.log('signinBtn.js', rows);
        callback(rows.insertId);
        // callback();
      }
    );
  };



exports.signinBtn = (data, callback) => {
    console.log(data)
    conn.query(`SELECT * FROM user WHERE userid = '${data.userid}' AND pw = '${data.pw}'`,
    (err, rows) => {
        if (err) {
            throw err
        }
        console.log('signinBtn.js:', rows);
        console.log('signinBtn.js:', rows.length);
        console.log('signinBtn.js:', rows[0]);
        callback(rows[0]);
    })    
}

exports.profile = (data, callback) => {
    console.log(data)
    conn.query(`SELECT * FROM user WHERE userid = '${data.userid}'`,
    (err, rows) => {
        if (err) {
            throw err
        }
        callback(rows[0]);
    })    
}

exports.allProfile = (data, callback) => {
    console.log(data)
    conn.query(`SELECT * FROM user`,
    (err, rows) => {
        if (err) {
            throw err
        }
        callback(rows);
    })    
}



exports.editProfile = (data, callback) => {
    conn.query(`UPDATE user SET userid = '${data.userid}', pw = '${data.pw}' WHERE id = '${data.id}'`,
    (err, rows) => { 
        if (err) {
            throw err
        }
        console.log(rows);
        callback();
})
}

exports.deleteProfile = (data, callback) => {
    conn.query(`DELETE user SET WHERE id = '${data.id}'`,
    (err, rows) => { 
        if (err) {
            throw err
        }
        console.log(rows);
        callback();
})
}

