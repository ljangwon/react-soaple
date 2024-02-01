import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Study from './Study';
import CreateStudy from './CreateStudy';
import UpdateStudy from './UpdateStudy';

function Crud() {
	return (
		<div className='App'>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Study />}></Route>
					<Route path='/create' element={<CreateStudy />}></Route>
					<Route path='/update/:id' element={<UpdateStudy />}></Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default Crud;
