import Note from './Note';
import AddNote from './AddNote';

const NotesList = ({
	notes,
	addNote,
	delNode
}) => {
	return (
		<div className='notes-list'>
			{notes.map((note) => (
				<Note
					id={note.id}
					text={note.text}
					date={note.date}
					delNode={delNode}
				/>
			))}
			<AddNote addNote={addNote}/>
			
		</div>
	);
};

export default NotesList;