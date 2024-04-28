import GlobalStyles from './styles/GlobalStyles';
import Button from './ui/Button';
import Heading from './ui/Heading';
import Input from './ui/Input';

export default function App() {
    return (
        <>
            <GlobalStyles />
            <div className=''>
                <Heading as='h1'>The Wild Oasis</Heading>
                <Button>Check in</Button>
                <Input
                    type='number'
                    placeholder='Number'
                />
            </div>
        </>
    );
}
