import { useActions } from '../../hooks/useActions'
import { useTypedSelector } from '../../hooks/useTypedSelector'

export default function User() {
	const { isLoading, error, user } = useTypedSelector(state => state.user)

	const {getUserById} = useActions()

	return (
		<div>
			<button onClick={() => getUserById(1)}>Get user</button>
			{isLoading ? ( 
				<div>Loading...</div>
			) : error ? (
				<div>{error}) </div>
			) : user?.name ? (
				<h1>User: {user.name}</h1>
			) : (
				<h1>USER NOT FOUND</h1>
			)}
		</div>
	)
}
