import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

function UpdateStudy(props) {
	const [st_id, setSt_id] = useState('');
	const [book_name, setBook_name] = useState('');
	const { id } = useParams();

	const navigate = useNavigate();

	function handleSubmit(event) {
		event.preventDefault();
		axios
			.put('http://localhost:8081/update/' + id, { st_id, book_name })
			.then((res) => {
				console.log(res);
				navigate('/');
			})
			.catch((err) => console.log(err));
	}
	return (
		<div className='w-50 bg-white rounded p-3'>
			<form onSubmit={handleSubmit}>
				<h2> Update Study </h2>
				<div className='mb-2'>
					<label htmlFor=''>Study ID</label>
					<input
						type='text'
						value={props.id}
						placeholder='Enter Study ID'
						className='form-control'
					/>
				</div>

				<div className='mb-2'>
					<label htmlFor=''>Student ID</label>
					<input
						type='text'
						value={props.st_id}
						placeholder='Enter Student ID'
						className='form-control'
						onChange={(e) => setSt_id(e.target.value)}
					/>
				</div>
				<div className='mb-2'>
					<label htmlFor=''>Book Name</label>
					<input
						type='text'
						value={props.book_name}
						placeholder='Enter Book Name'
						className='form-control'
						onChange={(e) => setBook_name(e.target.value)}
					/>
				</div>
				<button className='btn btn-success'>Update</button>
			</form>
		</div>
	);
}

export default UpdateStudy;
