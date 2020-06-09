import React, {useMemo} from 'react';
import { Container, List, NavWrapper } from './Navigation.css'
import Button from '../Button/Button'
import PropTypes from 'prop-types';

const Navigation = ({ links, buttons }) => {

    const linkList = useMemo( () => links.map(link => (
        <li key={link.id}>
            <Button variant="navigation" exact={link.exact} to={link.path}>{link.name}</Button>
        </li>
    )), [links])
    
    const buttonList = useMemo( () => buttons.map(button => (
        <Button onClick={()=> console.log(button.name)} to={button.to} key={button.id}>{button.name}</Button>
    )), [buttons])

    return (
        <Container>
            <NavWrapper>
                <List>
                    {linkList}
                </List>
                <div>
                    {buttonList}
                </div>
            </NavWrapper>
        </Container>
    );
}

export default Navigation;

Navigation.propTypes= {
    links: PropTypes.array.isRequired,
    buttons: PropTypes.array.isRequired
}