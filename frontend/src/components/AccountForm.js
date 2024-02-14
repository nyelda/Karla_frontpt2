import { useState } from "react"

const AccountForm = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(null)
    const [emptyFields, setEmptyFields] = useState([])

    const handleOn = () => {
        window.location.href = '/login';
      };
    const handleSubmit = async (e) => {
        e.preventDefault()

        const accounts = {username, password}

        const response = await fetch('/api/signup', {
            method: 'POST',
            body: JSON.stringify(accounts),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const json = await response.json()

        if (!response.ok) {
            setError(json.error)
            setEmptyFields(json.emptyFields)
        }
        if (response.ok) {
            setUsername('')
            setPassword('')
            setError(null)
            setEmptyFields([])
            console.log('new user added', json)
        }
    }

    return (
        <form className="create" onSubmit={handleSubmit}>
            <h3>Add Username</h3>

            <label>Username:</label>
            <input
                type="text"
                onChange={(e) => setUsername(e.target.value)}
                value={username}
                className={emptyFields.includes('username') ? 'error' : ''}
            />

            <label>Password:</label>
            <input
                type="text"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                className={emptyFields.includes('password') ? 'error' : ''}
            />
            <button>Add User</button>
            <div style={styles.loginLink}>
        Already have an account? <button style={styles.link} onClick={() => handleOn()}>Login here</button>.
      </div>
            {error && <div className="error">{error}</div>}
        </form>
    )
}

export default AccountForm

const styles = {
    container: {
      maxWidth: '400px',
      margin: 'auto',
      padding: '20px',
      border: '1px solid #ccc',
      borderRadius: '5px',
      marginTop: '50px',
    },
    heading: {
      textAlign: 'center',
      marginBottom: '20px',
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
    },
    label: {
      marginBottom: '5px',
    },
    input: {
      padding: '10px',
      marginBottom: '10px',
      border: '1px solid #ccc',
      borderRadius: '5px',
    },
    button: {
      padding: '10px',
      backgroundColor: '#28a745',
      color: '#fff',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
    },
    loginLink: {
      marginTop: '10px',
      textAlign: 'center',
    },
    link: {
      color: '#007bff',
      textDecoration: 'none',
    },
  };