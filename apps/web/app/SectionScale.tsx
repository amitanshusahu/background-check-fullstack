import styled from 'styled-components'

export default function SectionScale() {
  return (
    <StyledDiv>
      <h2> Built to <span className='grad-text'>Scale</span></h2>
      <p className='sub'>
        all those powerful features to scale accordingly 
      </p>
      <div className="illu">
        <img src="ui.svg" />
      </div>
    </StyledDiv>
  )
}

const StyledDiv = styled.div`
 margin: 30px;
 margin-top: 120px;
 display: flex;
 flex-direction: column;
 justifi-content: center;
 align-items: center;
 gap: 30px;
 
 h2{
   text-align: center;
 }

 p{
   text-align: center;
   max-width: 900px;
 }

 img{
   height: 60vh;
   /* width: 100%; */
   /* object-fit: cover; */
 }
`
