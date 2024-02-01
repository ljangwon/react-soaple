import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function CreateStudy() {
	const [st_id, setSt_id] = useState('');
	const [book_name, setBook_name] = useState('');

	const navigate = useNavigate();

	function handleSubmit(event) {
		event.preventDefault();
		axios
			.post('http://localhost:8081/create', { st_id, book_name })
			.then((res) => {
				console.log(res);
				navigate('/');
			})
			.catch((err) => console.log(err));
	}
	return (
		<div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
			<div className='w-50 bg-white rounded p-3'>
				<form onSubmit={handleSubmit}>
					<h2> Add Study </h2>
					<div className='mb-2'>
						<label htmlFor=''>Student ID</label>
						<input
							type='text'
							placeholder='Enter Student ID'
							className='form-control'
							onChange={(e) => setSt_id(e.target.value)}
						/>
					</div>
					<div className='mb-2'>
						<label htmlFor=''>Book Name</label>
						<input
							type='text'
							placeholder='Enter Book Name'
							className='form-control'
							onChange={(e) => setBook_name(e.target.value)}
						/>
					</div>
					<button className='btn btn-success'>Submit</button>
				</form>
			</div>
		</div>
	);
}

export default CreateStudy;
