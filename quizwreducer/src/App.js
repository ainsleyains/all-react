import { useEffect, useReducer } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Loader from './components/Loader';
import Error from './components/Error';
import StartScreen from './components/StartScreen';
import Question from './components/Question';
import NextButton from './components/NextButton';
import Progress from './components/Progress';

const initialState = { questions: [], status: 'loading', index: 0, answer: null, points: 0 };

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
        case 'start':
            return {
                ...state,
                status: 'active',
            };
        case 'newAnswer':
            const question = state.questions.at(state.index);
            return {
                ...state,
                answer: action.payload,
                points:
                    action.payload === question.correctOption
                        ? state.points + question.points
                        : state.points,
            };

        case 'nextQuestion':
            return {
                ...state,
                index: state.index + 1,
                answer: null,
            };

        default:
            throw new Error('Action unknown');
    }
}

function App() {
    // const [state, dispatch] = useReducer(reducer, initialState);

    //destructure state obj
    const [{ questions, status, index, answer, points }, dispatch] = useReducer(
        reducer,
        initialState
    );

    const numQuestions = questions.length;
    const totalPoints = questions.reduce((acc, cur) => acc + cur.points, 0);

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
                {status === 'ready' && (
                    <StartScreen
                        numQuestions={numQuestions}
                        dispatch={dispatch}
                    />
                )}
                {status === 'active' && (
                    <>
                        <Progress
                            index={index}
                            numQuestions={numQuestions}
                            points={points}
                            totalPoints={totalPoints}
                            answer={answer}
                        />
                        <Question
                            question={questions.at(index)}
                            dispatch={dispatch}
                            answer={answer}
                        />
                        <NextButton dispatch={dispatch} />
                    </>
                )}
            </Main>
        </div>
    );
}

export default App;
