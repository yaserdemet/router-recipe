import styled from "styled-components";

const Div = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;
export default Div;

export const Main = styled.main`
  /* border: 2px solid black; */
  width: 25%;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 0.7rem;
  border: 2px #444 solid;
  img {
    width: 100%;
    height: auto;
    
  }
`;

export const Card = styled.article`
  display: flex;
  padding: 1rem;

  align-items: center;
  justify-content: center;
  height: 30rem;
  background-color: #011F26;
  height: 100vh;
`;
