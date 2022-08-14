import React, { useState } from 'react';
import Counter from './components/Counter';
import Input from './components/Input';

console.log('here i am right..? ');
function App() {
    const [initialCount, setInitialCount] = useState(5);
    const handleChangeInitialCount = () => {
        setInitialCount(12);
    };
    return (
        <>
            <Counter initialCount={initialCount} />
            <button type="button" onClick={handleChangeInitialCount}>
                Change Initial Count
            </button>
            <Input initialValue="Test Initiative" />
        </>
    );
}

export default App;

// import firebase from './firebase';

// import ResultsContainer from './ResultsContainer';

// import './App.css';
// import { GoogleLogin } from 'react-google-login';
// const [results, setResults] = useState([]);
// const [loading, setLoading] = useState(false);
// const ref = firebase.firestore().collection('patients');
// const getResults = () => {
// 	setLoading(true);
// 	ref.onSnapshot((querySnapshot) => {
// 		const results = [];
// 		querySnapshot.forEach((doc) => {
// 			results.push(doc.data());
// 		});
// 		setResults(results);
// 		setLoading(false);
// 	});
// };
// useEffect(() => {
// 	getResults();
// }, []);
// 927984506084-gi7tojpue9l5fnlfj3qj3g6bs5ndr1uj.apps.googleusercontent.com (CLIENT ID)
// Ac2pUbMgGXRIDrH5vmNXttmz (CLIENT SECRET)
/* 
        axios.get('http://localhost:3000/api/auth/login/oauth/google', {
            headers: {
                Authorization: `Bearer ${idToken}`
            }
        })
    
    */
// const handleSuccess = (response) => {
// 	console.log(response);
// };
// const handleFailure = () => {};
// return (
// 	<div className='App'>
// 		{/* {loading ? <h1>Loading....</h1> : <ResultsContainer results={results} />} */}
// 		<GoogleLogin
// 			clientId='7751709943-jf6qisb7dh788olfmi5v92g2civ7u4dv.apps.googleusercontent.com'
// 			buttonText='Login with Google'
// 			onSuccess={handleSuccess}
// 			onFailure={handleFailure}
// 			cookiePolicy={'single_host_origin'}
// 		/>
// 	</div>
// );
