import Header from "../../organisms/Header";
import * as C from "./styles";

type FrontEndProps = {
  children: React.ReactNode;
};

const FrontEnd = ({ children }: FrontEndProps) => {
  return (
    <C.Container>
      <Header></Header>
      <main>{children}</main>
      
    </C.Container>
  );
};

export default FrontEnd;
