import { useReducer } from 'react';

const initialState = {
    balance: 0,
    loan: 0,
    isActive: false,
};

function reduce(state, action) {
    if (!state.isActive && action.type !== 'openAcc') return state;
    switch (action.type) {
        case 'openAcc':
            return {
                ...state,
                balance: 500,
                isActive: true,
            };
        case 'deposit':
            return {
                ...state,
                balance: state.balance + action.payload,
            };
        case 'withdraw':
            return {
                ...state,
                balance: state.balance > 50 ? state.balance - action.payload : 0,
            };

        case 'requestLoan':
            if (state.loan > 0) return state;
            return {
                ...state,
                balance: state.balance + action.payload,
                loan: action.payload,
            };

        case 'payLoan':
            return {
                ...state,
                loan: 0,
                balance: state.balance - state.loan,
            };
        case 'close':
            if (state.loan > 0 || state.balance !== 0) return state;
            return {
                ...initialState,
            };
        default:
            throw new Error('unknown action');
    }
}

function App() {
    // const [state, dispatch] = useReducer(reduce, initialState);
    const [{ balance, loan, isActive }, dispatch] = useReducer(reduce, initialState);
    return (
        <div className='App'>
            <h1>useReducer Bank Account</h1>
            <p>Balance: {balance}</p>
            <p>Loan: {loan}</p>
            <p>
                <button
                    disabled={isActive}
                    onClick={() => dispatch({ type: 'openAcc' })}
                >
                    Open Account
                </button>
            </p>
            <p>
                <button
                    disabled={!isActive}
                    onClick={() => dispatch({ type: 'deposit', payload: 150 })}
                >
                    Deposit 150
                </button>
            </p>
            <p>
                <button
                    disabled={!isActive}
                    onClick={() => dispatch({ type: 'withdraw', payload: 50 })}
                >
                    Withdraw 50
                </button>
            </p>
            <p>
                <button
                    disabled={!isActive}
                    onClick={() => dispatch({ type: 'requestLoan', payload: 5000 })}
                >
                    Request a loan of 5000
                </button>
            </p>
            <p>
                <button
                    disabled={!isActive}
                    onClick={() =>
                        dispatch({
                            type: 'payLoan',
                        })
                    }
                >
                    Pay loan
                </button>
            </p>
            <p>
                <button
                    disabled={!isActive}
                    onClick={() => dispatch({ type: 'close' })}
                >
                    Close Account
                </button>
            </p>
        </div>
    );
}

export default App;
