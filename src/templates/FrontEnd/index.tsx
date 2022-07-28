import * as C from './styles'

type FrontEndProps ={
    children: React.ReactNode
}

const FrontEnd = ({children}:FrontEndProps)=>{
    return(
        <C.Container>Teste {children}</C.Container>
    )
}

export default FrontEnd