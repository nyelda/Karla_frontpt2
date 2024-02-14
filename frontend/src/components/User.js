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
            {showCamera && (
            <div className="camera-popup">
              <button onClick={handleCloseCamera}>Go Back</button>
              <Webcam 
              height={800} 
              width={1300}
              />
            </div>
            )}
            <AccountForm />
            <button onClick={cameraClick} style={styles.button}>Open Camera</button>
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
      textAlign: 'center',
    }
    
  };