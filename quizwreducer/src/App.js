import { useEffect, useReducer } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Loader from './components/Loader';
import Error from './components/Error';
import StartScreen from './components/StartScreen';
import Question from './components/Question';

const initialState = { questions: [], status: 'loading' };

function reducer(state, action) {
    switch (action.type) {
        case 'dataReceived':
            return {
                ...state,
                questions: action.payload,
                status: 'ready',
            };
        case 'dataFailed':
            return {
                ...state,
                status: 'error',
            };

        default:
            throw new Error('Action unknown');
    }
}

function App() {
    // const [state, dispatch] = useReducer(reducer, initialState);

    //destructure state obj
    const [{ questions, status }, dispatch] = useReducer(reducer, initialState);

    const numQuestions = questions.length;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch('http://localhost:9000/questions');
                const data = await res.json();
                console.log(data);
                dispatch({ type: 'dataReceived', payload: data });
            } catch (err) {
                dispatch({ type: 'dataFailed' });
            }
        };
        fetchData();
    }, []);

    return (
        <div className='app'>
            <Header />
            <Main>
                {status === 'loading' && <Loader />}
                {status === 'error' && <Error />}
                {status === 'ready' && <StartScreen numQuestions={numQuestions} />}
                {status === 'active' && <Question />}
            </Main>
        </div>
    );
}

export default App;
