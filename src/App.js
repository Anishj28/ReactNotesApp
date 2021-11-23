import { useState,useEffect} from 'react';
import { nanoid } from 'nanoid';
import NotesList from './components/noteslist';
import Search from './components/search';
import Toggle from './components/toggle';
const App = () => {
	
	const [notes, setNotes] = useState([
		{
			id: nanoid(),
			text: 'This is my first note!',
			date: '15/04/2021'
		}
		
	]);

	const [searchData,setSearchData]=useState('');

	const [dark,setDark]=useState(false);

	useEffect(() => {
		const savedNotes = JSON.parse(
			localStorage.getItem('notesapp-data')
		);

		if (savedNotes) {
			setNotes(savedNotes);
		}
	}, []);

	useEffect(()=>{
		localStorage.setItem('notesapp-data',JSON.stringify(notes))
	},[notes]);

	const addNote=(text)=>{
		const date=new Date();
		const sample={
			id:nanoid(),
			text:text,
			date:date.toLocaleDateString()
		}   

		const newNotes=[...notes,sample]
		setNotes(newNotes);
	}

	const del=(id)=>{

		const deletednodes=notes.filter((note)=> note.id !== id);
		setNotes(deletednodes);
	}

  return (
	
			<div className={`${dark && 'dark'}`}>
				<div className='container'>
				<Toggle toggleDark={setDark}/>
				<Search
				  searchFun={setSearchData}
				/>
				<NotesList notes={notes.filter((note)=>
				note.text.toLowerCase().includes(searchData)
				)}
				 addNote={addNote}
				 delNode={del}
				 />

				</div>
			</div>
			
	);
};

export default App;