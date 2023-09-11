"use client"

// import Image from "next/image";
import styled from "styled-components"
import { Navbar } from "ui"; 

export default function Page(): JSX.Element {
  return (
    <StyledDiv className="root-wrapper">
      <Navbar />
      <header>
        <div className="grad">
          <h1> Hire People <span className="grad-text">Faster</span> </h1>
          <div className="action">
            <button className="call-to-action">Let's Start</button>
            <button className="fallback-action">Talk To Sales</button>
          </div>
        </div>
      </header>
    </StyledDiv> 
  );
}

const StyledDiv = styled.div`
  header{
    background: url('grad.png');
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
  }
  .action{
    display: flex;
    gap: 30px;
  } 
  .grad{
    margin: auto;
    height: calc(100vh - 200px);
    width: 1000px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

    .call-to-action{
      all: unset;
      padding: 20px 60px;
      color: white;
      background: rgb(60,114,255);
      background: linear-gradient(79deg, rgba(60,114,255,1) 0%, rgba(0,212,255,1) 100%);
      font-weight: 700;
      font-size: 30px;
      border-radius: 20px;
      /* animation: grad 3s linear infinite alternate; */
      cursor: pointer;
      box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.1);
      border: 2px solid white;
    }

    .fallback-action{
      all: unset;
      opacity: 0.8;
      background-color: white;
      border: 2px solid rgba(60,144,255,1);
      color: rgba(60,144,255,1);
      padding: 20px 60px;
      font-weight: 600;
      font-size: 30px;
      border-radius: 20px;
      cursor: pointer;
      box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.1);
    }

  h1{
    font-size: 100px;
    margin:  60px 30px;
    text-align: center; 
  }

  }
`
