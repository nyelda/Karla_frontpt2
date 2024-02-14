import { useEffect, useState} from 'react'
import '../index.css';

// components
import AccountDetails from './AccountDetails'
import AccountForm from './AccountForm'

const User = () => {
    const [accounts, setAccounts] = useState(null)

    useEffect(() => {
        const fetchAccounts = async () => {
            const response = await fetch('/api/signup')
            const json = await response.json()

            if (response.ok) {
                setAccounts(json)
            }
        }

        fetchAccounts()
    }, [])

    return (
        <div className="home">
            <div className="workouts">
                {accounts && accounts.map((accounts) => (
                    <AccountDetails key={accounts._id} accounts={accounts} />
                ))}
            </div>
            <AccountForm />
        </div>
    )
}

export default User