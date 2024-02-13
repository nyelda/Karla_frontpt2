const AccountDetails = ({ accounts }) => {

    return (
        <div className="workout-details">
            <h2>{accounts.title}</h2>
            <p><strong>Username: </strong>{accounts.load}</p>
            <p><strong>Password: </strong>{accounts.reps}</p>
            <p>{accounts.createdAt}</p>
        </div>

    )
}

export default AccountDetails