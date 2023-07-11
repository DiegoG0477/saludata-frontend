import React from "react";
import "../App.css";

function Card(props) {
  let modal;
  if(props.num==1){
    modal="#staticBackdrop";
  }else if(props.num==2){
    modal="#modalPaciente"
  }
  return (
    <>
      <div class="card" style={{ width: "19vw", paddingTop:"17px",paddingBottom:"17px", borderWidth:"0px", background:"white"}}>
        <div class="card-body" style={{ textAlign: "center" }}>
          <div>
            <img src={props.img} alt="" style={{ width: "65px" }} />
          </div>
          <h5 class="card-title" style={{marginTop:"18px",marginBottom:"18px", fontWeight:"700", fontSize:"1.5rem"}}>{props.title}</h5>

          <a href="#" class="btn btn-primary" style={{borderRadius: "10px",background: "#268D78", boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",width:"12vw", height:"40px", borderWidth:"0px"}}>
            <div data-bs-toggle="modal" data-bs-target={modal} href="#exampleModalToggle" role="button" style={{fontSize:"18px", fontWeight:"700", paddingTop:"0.25vh"}}> {props.icon} {props.buttonText}</div>
          </a>
        </div>

      </div>
    </>
  );
}

export default Card;
