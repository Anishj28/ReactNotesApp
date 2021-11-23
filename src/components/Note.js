import { MdDeleteForever } from 'react-icons/md';

const Note = ({ id, text, date, delNode }) => {
	return (
		<div className='note'>
			<span>{text}</span>
			<div className='footer'>
				<small>{date}</small>
				<MdDeleteForever
					
					className='delete'
					size='1.3em'
                    onClick={ ()=> delNode(id)}
				/>
			</div>
		</div>
	);
};

export default Note;