import React, { useState } from 'react';
import './style.css';
import { addSuggestion, getSuggestions } from '../services/suggestionService';

const Main = () => {
	const [name, setname] = useState('');
	const [selected, setselected] = useState('');
	const [suggestions, setsuggestions] = useState([]);

	const submit = async () => {
		try {
			const data = {
				name: selected,
				text: name,
			};
			await addSuggestion(data);
		} catch (error) {
			alert('something has broken');
		}
	};

	const callApi = async () => {
		try {
			const data = await getSuggestions(name);
			setsuggestions(data);
		} catch (error) {
			alert('something has broken');
		}
	};

	console.log(selected);

	return (
		<div className="app-container">
			<div className="app-form">
				<form className="mb-5">
					<div className="form-group">
						<label htmlFor="">Enter Your Info</label>
						<input onChange={(e) => setname(e.currentTarget.value)} type="text" className="form-control" />
					</div>
					<div class="form-group ">
						<label htmlFor="">Choose Best Answer</label>
						<select
							onChange={(e) => setselected(e.target.value)}
							onClick={callApi}
							value={selected}
							class="form-control"
							id="sel1"
						>
							<optgroup label="Suggested">
								{suggestions?.Suggestions?.map((m) => (
									<option>{m.name}</option>
								))}
							</optgroup>
							<optgroup label="Other Options">
								{suggestions?.Other?.map((m) => (
									<option>{m}</option>
								))}
							</optgroup>
						</select>
					</div>
					<div onClick={() => submit()} className="btn btn-primary">
						Submit
					</div>
				</form>
			</div>
		</div>
	);
};

export default Main;
