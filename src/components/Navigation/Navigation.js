import React from 'react';
import { Container, List, NavWrapper } from './Navigation.css'
import { NavLink } from 'react-router-dom';



const Navigation = ({ links }) => {

    const linkList = links.map(link => (
        <NavLink key={link.id} exact={link.exact} to={link.path}>{link.name}</NavLink>
    )) 

    return (
        <Container>
            <NavWrapper>
                <List>
                    {linkList}
                </List>
                <div>
                    <button>Black</button>
                    <button>White</button>
                </div>
            </NavWrapper>
        </Container>
    );
}

export default Navigation;
