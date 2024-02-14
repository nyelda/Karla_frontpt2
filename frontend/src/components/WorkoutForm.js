import { useState, useEffect } from "react";

const WorkoutForm = () => {
    const [title, setTitle] = useState('');
    const [load, setLoad] = useState('');
    const [reps, setReps] = useState('');
    const [error, setError] = useState(null);
    const [emptyFields, setEmptyFields] = useState([]);
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        fetchUserData();
    }, []);

    const fetchUserData = async () => {
        try {
            const response = await fetch('/api/workouts');
            if (response.ok) {
                const userData = await response.json();
                setUserData(userData);
                setTitle(userData.title || '');
                setLoad(userData.load || '');
                setReps(userData.reps || '');
            } else {
                setError('Failed to fetch user data');
            }
        } catch (error) {
            console.error('Error fetching user data:', error);
            setError('Failed to fetch user data');
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const workout = { title, load, reps };

        const response = await fetch('/api/workouts', {
            method: 'PATCH', 
            body: JSON.stringify(workout),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const json = await response.json();

        if (!response.ok) {
            setError(json.error);
            setEmptyFields(json.emptyFields);
        } else {
            setError(null);
            console.log('Workout data updated', json);
            
            // Fetch user data again to display updated values
            fetchUserData();
        }
    };

    return (
        <div>
            <form className="create" onSubmit={handleSubmit}>
                <h3>User Profile</h3>

                <label>Name:</label>
                <input
                    type="text"
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                    className={emptyFields.includes('title') ? 'error' : ''}
                />

                <label>Weight (in kg):</label>
                <input
                    type="text"
                    onChange={(e) => setLoad(e.target.value)}
                    value={load}
                    className={emptyFields.includes('load') ? 'error' : ''}
                />

                <label>Height (in cm):</label>
                <input
                    type="number"
                    onChange={(e) => setReps(e.target.value)}
                    value={reps}
                    className={emptyFields.includes('reps') ? 'error' : ''}
                />

                <button>Update Data</button>
                {error && <div className="error">{error}</div>}
            </form>

            {userData && (
                <div>
                    <h3>Updated User Data</h3>
                    <p>Name: {userData.title}</p>
                    <p>Weight: {userData.load} kg</p>
                    <p>Height: {userData.reps} cm</p>
                </div>
            )}
        </div>
    );
};

export default WorkoutForm;
