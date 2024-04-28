import GlobalStyles from './styles/GlobalStyles';
import Button from './ui/Button';
import Input from './ui/Input';

export default function App() {
    return (
        <>
            <GlobalStyles />
            <div className=''>
                <Button>Check in</Button>
                <Input
                    type='number'
                    placeholder='Number'
                />
            </div>
        </>
    );
}
