import { useState } from 'react';
import Bill from './components/Bill';
import Button from './components/Button';
import Output from './components/Output';
import Percentage from './components/Percentage';

function App() {
    const [bill, setBill] = useState('');
    const [percentage1, setPercentage1] = useState(0);
    const [percentage2, setPercentage2] = useState(0);

    const tips = bill * ((percentage1 + percentage2) / 2 / 100);

    function handleReset() {
        setBill('');
        setPercentage1(0);
        setPercentage2(0);
    }
    return (
        <>
            <h1>✖➗Calculation➕➖</h1>
            <Bill
                bill={bill}
                onSetBill={setBill}
            />
            <Percentage
                percentage={percentage1}
                onSetPercentage={setPercentage1}
            >
                How did you like the service ?
            </Percentage>
            <Percentage
                percentage={percentage2}
                onSetPercentage={setPercentage2}
            >
                How did your frinend like the service ?
            </Percentage>

            {bill > 0 && (
                <>
                    <Output
                        bill={bill}
                        tips={tips}
                    />

                    <Button
                        bgColor='#7046f3'
                        textColor='#fff'
                        onClick={handleReset}
                    >
                        Reset <span>💲</span>
                    </Button>
                </>
            )}
        </>
    );
}

export default App;
