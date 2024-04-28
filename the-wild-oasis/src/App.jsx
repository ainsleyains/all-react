import GlobalStyles from './styles/GlobalStyles';
import Button from './ui/Button';
import Heading from './ui/Heading';
import Input from './ui/Input';
import Row from './ui/Row';

export default function App() {
    return (
        <>
            <GlobalStyles />
            <Row>
                <Row type='horizontal'>
                    <Heading as='h1'>The Wild Oasis</Heading>
                    <div>
                        <Heading as='h2'>Check in and out</Heading>
                        <Button
                            variation='primary'
                            size='medium'
                        >
                            Check in
                        </Button>
                        <Button
                            variation='secondary'
                            size='small'
                        >
                            Check out
                        </Button>
                    </div>
                </Row>
                <Row>
                    <Heading as='h3'>Form</Heading>
                    <form action=''>
                        <Input
                            type='number'
                            placeholder='Number'
                        />
                    </form>
                </Row>
            </Row>
        </>
    );
}
