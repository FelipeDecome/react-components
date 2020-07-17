import React from 'react';
import styled from 'styled-components';

interface MenuLinks {
    title: string;
    href: string;
}

interface Navbar {
    MenuLinks: MenuLinks[];
}

const NavbarWrapper = styled.nav``

const NavbarList = styled.ul``;

const NavbarItem = styled.li``;

// ItemTitle e ItemLink

const Navbar: React.FC<Navbar> = (props) => {

    const { MenuLinks } = props

    return (
        <NavbarWrapper>
            <NavbarList>
                {MenuLinks.map(link => {
                    <>
                        <NavbarItem>{link.title}</NavbarItem>
                        <a href={link.href}></a>
                    </>
                })}
            </NavbarList>
        </NavbarWrapper>
    );
};

export default Navbar;
