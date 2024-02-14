import { useEffect, useState} from 'react'
import '../index.css';
import '../App.css';

// components
import AccountForm from './AccountForm'
import Webcam from 'react-webcam';

const User = () => {
    const [showCamera, setShowCamera] = useState(false);

    // Handle input changes
    const cameraClick = () => {
      setShowCamera(true);
    };

    const handleCloseCamera = () => {
        setShowCamera(false);
      };

    const [ accounts, setAccounts ] = useState(null);

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
            <div className="user-profile-container">
            {showCamera && (
                <Webcam />
            )}
                <div className="button-container">
                    <button onClick={cameraClick} style={styles.button}>Open Camera</button>
                    <button onClick={handleCloseCamera} style={styles.button}>Close Camera</button>
                </div>
            </div>
            <AccountForm />
        </div>
    )
}

export default User

const styles = {
    button: {
      padding: '50px',
      backgroundColor: '#007bff',
      color: '#fff',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      margin: '20px',
    },
    
  };