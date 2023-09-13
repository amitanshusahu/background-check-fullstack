import styled from 'styled-components'

export default function SectionFeat(){
  return (
    <StyledDiv>
      <h2> <span className="grad-text">Powerful </span> features  for <br/> <span className="grad-text">Modren</span> business</h2>

      <div className="cards">

        <div className="card">
          <div className="img-holder"><img src="badge1.png" alt="icon" className='icon' /></div>
          <h4 className="title">some amazing feature</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, incidunt?</p>
        </div> 

        <div className="card card2">
          <div className="img-holder"><img src="badge3.png" alt="icon" className='icon' /></div>
          <h4 className="title">some amazing feature</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, incidunt?</p>
        </div> 

        <div className="card">
          <div className="img-holder"><img src="badge2.png" alt="icon" className='icon' /></div>
          <h4 className="title">some amazing feature</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, incidunt?</p>
        </div> 

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
  letter-spacing: 0.6px;
}

.cards{
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 60px;

  .card{
    margin: 60px 0;
    display: flex;
    /* justify-content: center; */
    align-items: center;
    flex-direction: column;
    gap: 15px;
    width:350px;
    height: 350px;
    background-color: #e8f5ff;
    border: 2px solid cyan;
    border-radius: 20px;
    box-shadow: 0px 10px 10px rgba(0,0,0,0.1);
    padding: 30px;

    }

    .card2{
      background-color: #ffedfa;
      border-color: hotpink;
    } 
    .icon{
      margin-top: 30px;
      width: 80px;
    }
  }
  p{
    font-size: 17px;
    text-align: center;
  }
`
