import { List } from './components/memo_usememo_usecallback/LISt';
import { useState } from 'react';
import { useEffect } from 'react';
import { useMemo } from 'react';
import { memo } from 'react';
import { useCallback } from 'react';

const initialUsers = [
	{ id: 1, name: 'Juan' },
	{ id: 2, name: 'Trini' },
];
function App() {
	const [users, setUsers] = useState(initialUsers);
	const [text, setText] = useState('');
	const [search, setSearch] = useState('');

	const handleAdd = () => {
		const newUser = { id: Date.now(), name: text };
		setUsers([...users, newUser]);
	};
	const handleSearch = () => {
		setSearch(text);
	};

	// Guardar declaraciones de funciones
	const handleDelete = useCallback(
		id => {
			setUsers(users.filter(user => user.id != id));
		},
		[users]
	);

	// Propiedades computadas que se memorizan
	const usersFilters = useMemo(() => {
		return users.filter(user => user.name.toLowerCase().includes(search.toLowerCase()));
	}, [search, users]);

	const printUsers = useCallback(() => {
		console.log('Changed User', users);
	}, [users]);

	useEffect(() => {
		console.log('APP Render');
	});
	useEffect(() => {
		printUsers();
	}, [users, printUsers]);

	return (
		<>
			<input type='text' value={text} onChange={e => setText(e.target.value)}></input>
			<button onClick={handleAdd}>Add</button>
			<button onClick={handleSearch}>Search</button>
			<List users={usersFilters} handleDelete={handleDelete} />
		</>
	);
}

export default App;
