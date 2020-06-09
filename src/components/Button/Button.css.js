import styled from 'styled-components'

const ButtonBase = styled.button`
    background-color: ${ ({ theme }) => theme.colors.main };
    cursor: ${ props => props.onClick || props.to ? 'pointer' : 'default'};
    &:focus{
        outline: ${ ({ theme }) => theme.colors.main };
    }
`

export const SimpleButton = styled(ButtonBase)`
    color: ${ ({ theme }) => theme.colors.secondary };
    padding: 0 10px 0 10px;
    height: 40px;
    margin: 5px;
    &:hover{
        color: ${ ({ theme }) => theme.colors.text};
    }
`

export const NavButton = styled(ButtonBase)`
    color: grey;
    padding:10px;
    border: none;
    &:focus{
        outline: none;
    }
`