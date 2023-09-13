import styled from 'styled-components'

export default function Footer() {
  return (
    <StyledDiv>
    	<footer>
       <div className="container flex-between">
            <div className="foot-logo-holder">
                <div className="flex-center">
                    <img src="turborepo.svg" alt="logo"/>
                    <h2>Company Name</h2>
                </div>
                <div className="socials flex-center">
                    <span><img src="" alt="facebook"/></span>
                    <span><img src="" alt="instagram"/></span>
                    <span><img src="" alt="twitter"/></span>
                    <span><img src="" alt="whatsap"/></span>
                </div>
            </div>
            <div className="foot-links">
               <b>INFO</b> 
                <ul>
                    <li>About us</li>
                    <li>FAQs</li>
                    <li>Terms and Conditions</li>
                    <li>Privacy Policy</li>
                    <li>Help and Support</li>
                </ul>
            </div>
            <div className="foot-links">
               <b>Contact</b> 
                <ul>
                    <li>India, New Delhi, Noida, Appla inc</li>
                    <li>fakeemail@gamil.com</li>
                    <li>+23 343 459 954</li>
                </ul>
            </div>
            <div className="newsletter foot-links">
               <b>NEWS LETTER</b> 
                <input type="text" name="" id=""/>
                <button>SUBSCRIBE</button>
            </div>
       </div>
       <div className="copy-rights">
        © 2023 Copyright
       </div> 
    </footer> 
    </StyledDiv>
  )
}

const StyledDiv = styled.div`
background: -webkit-linear-gradient(150deg, #00DBDE 0%, #FC00FF 100%);
footer {
  padding: 30px;
  background-color: var(---primary);
}
footer .foot-logo-holder img {
  width: 3rem;
	margin-right: 15px;
}
footer .foot-links ul li {
  list-style-type: none;
  padding: 5px;
  padding-bottom: 0;
  padding-left: 0;
}
footer .foot-links b {
  padding-bottom: 10px;
}
footer .newsletter {
  display: flex;
  flex-direction: column;
}
footer .newsletter button {
  width: fit-content;
}
footer .newsletter input {
  padding: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
  border-radius: 10px;
  border: none;
  outline: none;
}

.About-main-cont {
  display: flex;
  align-items: center;
  justify-content: center;
}

/* start of about style  */
.About-content {
  display: flex;
  flex-direction: column;
  width: 50vw;
  margin-top: 60px;
  margin-bottom: 60px;
  padding: 30px;
  border-radius: 15px;
}

.About-watch{
   height: 50vh;
}

.About-content p{
    font-weight: bold;
    color: rgb(34, 34, 34);
    margin-top: 10px;
}
footer .socials img{
    width: 30px;
    margin: 10px;
    transition: 0.2s ease-in-out;
}
footer .socials img:hover{
    transform: translateY(-3px);
    filter: drop-shadow(0 5px 10px 2px black);
}

footer .copy-rights{
    display: flex;
    margin-top: 20px;
    justify-content: center;
    align-items: center;
    color: black;
}
h2{
    font-size :30px;
}
p{
    color: rgb(52, 52, 52);
    font-size: 17px;
    line-height: 23px;
}
button{
    padding: 10px;
    background-color: rgb(20, 20, 20);
    color: white;
    border: none;
    border-radius: 10px;
    font-weight: bold;
}
`
