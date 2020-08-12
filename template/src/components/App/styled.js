import styled from "styled-components";

const S = {};

S.App = styled.div`
  position: relative;
  font-size: 1rem;
  margin: 0;
  font-family: ${({ theme }) => theme.font};
  height: 100%;
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: row;
  background-color: ${({ theme }) => theme.canvas};
`;

S.NoApp = styled(S.App)`
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

S.Loader = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

S.Saving = styled.div`
  position: fixed;
  z-index: 99999999;
  /* //background: ${(props) => props.theme.background}; */
  opacity: 1;
  display: flex;
  align-items: start;
  justify-content: start;
  height: 100vh;
  width: 100vw;
  > span{
    opacity:0.1;
    margin-left:2.8rem;
    margin-top:7.5rem;
  }
`;

export default S;
