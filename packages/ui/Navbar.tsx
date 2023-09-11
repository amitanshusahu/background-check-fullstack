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
  width: 100%;
  max-width: 1444px;
  margin: 30px 0;
  top: 0;

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
