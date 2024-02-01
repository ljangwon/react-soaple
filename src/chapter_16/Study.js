import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import UpdateStudy from './UpdateStudy';

function Study() {
	const [study, setStudy] = useState([]);
	const [id, setId] = useState('');
	const [st_id, setSt_id] = useState('');
	const [book_name, setBook_name] = useState('');

	useEffect(() => {
		axios
			.get('http://localhost:8081')
			.then((res) => setStudy(res.data))
			.catch((err) => console.log(err));
	}, []);

	const handleDelete = async (id) => {
		try {
			await axios.delete('http://localhost:8081/study/' + id);
			window.location.reload();
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<div className='d-flex vh-100 bg-primary justify-content-start align-items-start'>
			<div className='w-100 bg-white rounded p-3'>
				<div className='d-flex justify-content-start'>
					<Link to='/create' className='btn btn-success'>
						Add +
					</Link>
					<button className='btn bg-secondary'>count</button>
				</div>
				<table className='table'>
					<thead>
						<tr>
							<th> ID </th>
							<th> Student ID </th>
							<th> Book Name </th>
							<th> Status </th>
							<th> Action </th>
						</tr>
					</thead>
					<tbody>
						{study.map((data, i) => (
							<tr key={i}>
								<td> {data.id} </td>
								<td> {data.st_id} </td>
								<td> {data.book_name} </td>
								<td> {data.status} </td>
								<td>
									{/* <Link to={`update/${data.id}`} className='btn btn-primary'>
										Update
									</Link> */}
									<button
										className='btn btn-primary'
										onClick={(e) => {
											setId(data.id);
											setSt_id(data.st_id);
											setBook_name(data.book_name);
										}}
									>
										Update
									</button>
									<button className='btn btn-danger' onClick={(e) => handleDelete(data.id)}>
										Delete
									</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
				<div className='d-flex justify-content-center'>
					<UpdateStudy id={id} st_id={st_id} book_name={book_name} />
				</div>
			</div>
		</div>
	);
}

export default Study;
