import styled from 'styled-components';

const Main = styled.main`
   .foto {
    display: flex;
    gap: 3rem;
    justify-content: center;
    align-items: center;
    margin-top: 3rem;
    margin-bottom: 3rem;
   }
   .card {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
   }

  .iframe{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5rem;
   
  }

    img{
        width: 100%;
        height: 300px;
    }

    .card {
        width: 20rem;
    }

    .iframe {

    }
    .cardx{
        width: 30%;
        display: flex;
        flex-direction: column;
        justify-content: center;
     
    }
   

`;

export default Main;
