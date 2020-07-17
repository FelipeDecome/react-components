import React from 'react';
import styled from 'styled-components';

import Navbar from './Navbar'

const HeaderWrapper = styled.header`

    display: flex;
    /* flex-direction:row; */
    justify-content: space-between;
    align-items: center;
`;

const Header: React.FC = () => {

    return (
        <HeaderWrapper>
            <Navbar MenuLinks={[{ title: "", href: "" }]} />
        </HeaderWrapper >
    );
};

export default Header;
