import React from 'react';
import { useEffect, memo } from 'react';
import { Item } from './Item';

export const List = memo(({ users, handleDelete }) => {
	useEffect(() => {
		console.log('listRender');
	});
	return (
		<>
			<ul>
				{users.map(user => (
					<Item key={user.id} handleDelete={handleDelete} user={user} />
				))}
			</ul>
		</>
	);
});
