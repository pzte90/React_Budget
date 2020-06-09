import React, { useMemo } from 'react';
import { SimpleButton, NavButton } from './Button.css';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const Button = ({ variant, children, ...props}) => {
    const ChosedButton = useMemo(() => {
        switch(variant){
            case "navigation":
                return NavButton
            default:
                return SimpleButton
        }
    }, [variant])

    const component = useMemo (()=> (
    <ChosedButton {...props}>{children}</ChosedButton>
    ), [props, children])

    return props.to ?(
        <NavLink {...props}>
            {component}
        </NavLink>
    ) : (
        <>
            {component}
        </>
    )
}

export default Button;


Button.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ])
}