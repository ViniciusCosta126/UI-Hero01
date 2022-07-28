import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 60px;
  > div {
    width: 50%;
  }
  h1 {
    font-weight: 700;
    font-size: 56px;
    color: #1e255e;
  }
  h6 {
    font-weight: 400;
    font-size: 16px;
    color: rgba(30, 37, 94, 0.7);
    padding-right: 90px;
    margin-top: 20px;
  }
`;
export const ColumnImage = styled.div`
  text-align: right;
  position: relative;
  img{
    margin-left: 94px;
  }

`
