import { useState } from 'react';

const AddNote = ({ addNote }) => {
	const [noteText, setNoteText] = useState('');
	const characterLimit = 250;

	const saveChange = (event) => {
		if (characterLimit - event.target.value.length >= 0) {
			setNoteText(event.target.value);
		}
	};

	const saveOnClick = () => {
		if (noteText.trim().length > 0) {
			addNote(noteText);
			setNoteText('');
		}
	};

	return (
		<div className='new-note'>
			<textarea
				rows='8'
				cols='10'
				placeholder='Type here...:))'
				value={noteText}
				onChange={saveChange}
			></textarea>
			<div className='footer'>
				<small>
					{characterLimit - noteText.length} Remaining
				</small>
                <small>New Note</small>
				<button className='savebutton' onClick={saveOnClick}>
					Save
				</button>
			</div>
		</div>
	);
};

export default AddNote;