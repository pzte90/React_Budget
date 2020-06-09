import styled from 'styled-components'
import { Wrapper } from '../Wrapper/Wrapper'

export const Container = styled.div`
background-color: ${({ theme }) => theme.colors.main};
color: ${({ theme }) => theme.colors.text};
line-height: 50px;
height: 50px;
`;

export const List = styled.ul`
    display:flex;
`

export const NavWrapper = styled(Wrapper)`
    display:flex;
    justify-content: space-between
`