import styled from 'styled-components';

const H1 = styled.h1`
    font-size: 30px;
    font-weight: 600;
    background-color: yellow;
`;

const Button = styled.button`
    font-size: 1.4rem;
`;
export default function App() {
    return (
        <div className=''>
            <H1>The World Oasis</H1>
            <Button>Check in</Button>
        </div>
    );
}
