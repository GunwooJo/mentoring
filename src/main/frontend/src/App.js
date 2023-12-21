import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';
import Header from './components/Header';
function App() {
    const [hello, setHello] = useState('')

    useEffect(() => {
        axios.get('/hello')
        .then(response => setHello(response.data))
        .catch(error => console.log(error))
    }, []);

    return (
        <div>
            <Header/>
            <div>
                백엔드에서 가져온 데이터입니다 : {hello}
            </div>
            <Button variant="contained">Hello world</Button>
        </div>

    );
}

export default App;