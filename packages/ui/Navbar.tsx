import styled from 'styled-components';

export function Navbar() {
	return(
    <StyledDiv>
      <div className="logo"><h1>logo</h1></div>
      <ul>
        <li>About</li>
        <li>Team</li>
      </ul>
    </StyledDiv>
	)
}

const StyledDiv = styled.div`
  position: sticky; 
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: calc(100% - 60px);
  max-width: 1444px;
  padding: 30px;
  top: 0;
  z-index: 500;
  backdrop-filter: blur(10px);
  background-color: rgba(260, 260, 260, 0.9);

  h1{ font-size: 40px; }
  ul{
    display: flex;
    gap: 30px;
    
  li{
      font-size: 23px;
      color: grey;
      list-style: none;
      font-weight: bold;
    }
  }
`
