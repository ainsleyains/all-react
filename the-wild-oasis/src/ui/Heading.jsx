import styled, { css } from 'styled-components';

const Heading = styled.h1`
    ${(props) =>
        props.as === 'h1' &&
        css`
            font-size: 20px;
            font-weight: 600;
            background-color: yellow;
        `}
`;

export default Heading;
