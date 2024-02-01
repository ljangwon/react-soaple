const express = require('express');
const cors = require('cors');
const mysql = require('mysql');

const app = express();
app.use(express.json());

app.use(cors());

const db = mysql.createConnection({
	host: 'leanedu23.shop',
	port: '3309',
	user: 'leanmath',
	password: 'Happy1234!',
	database: 'leanmath',
});

app.get('/', (req, res) => {
	const sql = 'SELECT id, st_id, book_name, status from st_study where st_id="35"';
	db.query(sql, (err, data) => {
		if (err) return res.json('Error');
		return res.json(data);
	});
});

app.get('/:id', (req, res) => {
	const sql = 'SELECT st_id, book_name, status from st_study where id=?';
	const id = req.params.id;

	db.query(sql, [id], (err, data) => {
		if (err) return res.json('Error');
		return res.json(data);
	});
});

app.post('/create', (req, res) => {
	const sql = 'INSERT INTO st_study (`st_id`, `book_name`) VALUES (?)';
	const values = [req.body.st_id, req.body.book_name];
	db.query(sql, [values], (err, data) => {
		if (err) return res.json('Error');
		return res.json(data);
	});
});

app.put('/update/:id', (req, res) => {
	const sql = 'UPDATE st_study set `st_id`= ?, `book_name` =? where ID = ?';
	const values = [req.body.st_id, req.body.book_name];
	const id = req.params.id;

	db.query(sql, [...values, id], (err, data) => {
		if (err) return res.json('Error');
		return res.json(data);
	});
});

app.delete('/study/:id', (req, res) => {
	const sql = 'DELETE FROM st_study where ID = ?';
	const id = req.params.id;

	db.query(sql, [id], (err, data) => {
		if (err) return res.json('Error');
		return res.json(data);
	});
});

app.listen(8081, () => {
	console.log('listening 8081 port');
});
