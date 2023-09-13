import styled from 'styled-components'

export default function Section() {
  return (
    <StyledDiv>
      <h2> <span className='grad-text'>Supercharge</span> your Business</h2>
      <p className='sub'>
        you hire faster, you ship faster, you launch faster and make an impact faster supercharge and outperform your competition
      </p>
      <div className="illu">
        <img src="work.png" />
      </div>
    </StyledDiv>
  )
}

const StyledDiv = styled.div`
 margin: 30px;
 margin-top: 60px;
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
   max-height: 80vh;
   max-width: 100%;
   /* object-fit: cover; */
 }
`
