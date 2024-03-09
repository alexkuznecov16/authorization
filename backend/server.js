const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());
const db = mysql.createConnection({
	host: 'localhost',
	user: 'admin',
	password: 'sho0O-a+z1#Lpd(./y%f',
	database: 'authorization',
});

app.post('/login', (req, res) => {
	const sql = 'SELECT * FROM userData WHERE email = ? AND password = ?';
	db.query(sql, [req.body.email, req.body.password], (error, data) => {
		if (error) return res.json('Error');
		if (data.length > 0) {
			return res.json('Login successfully!');
		} else {
			res.status(400);
			return res.json('Not found profile!');
		}
	});
});

app.listen(8081, () => {
	console.log('Listening...');
});
