import React, { useEffect, memo } from 'react';

export const Item = memo(({ user, handleDelete }) => {
	useEffect(() => {
		console.log('ItemRender', user.name);
	});
	return (
		<>
			<li>{user.name}</li>
			<button
				onClick={() => {
					handleDelete(user.id);
				}}>
				Delete
			</button>
		</>
	);
});
