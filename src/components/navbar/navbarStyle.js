import styled from 'styled-components';

const Div = styled.div`
    margin-top: 1rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: white;
    color: white;
    height: 6rem;
  
    img:nth-child(2){
        height: 6rem;
    }
    img:hover {
      
        cursor: pointer;
        transform: scale(1.1);
        transform: rotate(20deg);
        transition: all 0.5s ease-in-out;
       
    }



    a {
        color: black;
        text-decoration: none;
        font-size: 1.5rem;
        font-weight: bold;
        
    
    }
    a:hover{
      text-shadow:  0 0 10px rgba(0,0,0,0.5);
    }

    
    
    
    `
  
export default Div;
