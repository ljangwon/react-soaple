import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Student() {
	const [student, setStudent] = useState([]);

	useEffect(() => {
		axios
			.get('http://localhost:8081')
			.then((res) => setStudent(res.data))
			.catch((err) => console.log(err));
	}, []);

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
							<th> Status </th>
							<th> Name </th>
							<th> Class Name </th>
							<th> Action </th>
						</tr>
					</thead>
					<tbody>
						{student.map((data, i) => (
							<tr>
								<td> {data.status} </td>
								<td> {data.name} </td>
								<td> {data.class_name} </td>
								<td>
									<button className='btn btn-primary'> Update </button>
									<button className='btn btn-danger'> Delete </button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
}

export default Student;
