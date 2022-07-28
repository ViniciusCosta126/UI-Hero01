import Button from '../../atoms/Button'
import Logo from '../../molecules/Logo'
import Menu from '../Menu'
import * as C from './styles'

const Header = ()=>{
    return(
        <C.Box>
            <Logo/>
            <Menu/>
            <Button/>
        </C.Box>
    )
}

export default Header