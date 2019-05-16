import React, { Component } from 'react';
import './App.css'
import puce from './images/puce.png'
import flech from './images/flech.png'
import masterCard from './images/MasterCard.png'
class App extends Component {
  constructor(props) {
    super(props);

this.state = {

  CardNumber:'',
  CardCode:'',
  Name: '',
  Month: '',
  Year: '',
}
}



FnUpdateInfo= (e)=>{

  if(e.id==='CardNumber'){
     if(Number(e.value)){
         if(e.value.length<=16){
          this.setState({CardNumber:e.value})}
          else{alert("just 16 numbers!!");}
  }else{alert("opss letters!! Please enter the Card's number ");}
  }

  if(e.id==='CardCode'){
      if(Number(e.value)){
          if(e.value.length<5){
            this.setState({CardCode:e.value})}
           else{alert("just 4 numbers!!");}
      }else{alert("opss letters!! Please enter the Card's code ");}
   }

   if(e.id==='Name'){
    let letters =/[a-zA-Z éà]/;
        if(e.value.split('').every(x=>letters.test(x))){
          if(e.value.length<=20){
            this.setState({ Name:e.value})}
            else{alert("opss more then 20 characters !!");}
        }else{alert("opss number or symbol!! Please enter your FirstName and your LastName ");}
     }

   if(e.id==='Month'){
      if(Number(e.value)){
        if((e.value.length<=2)&&(e.value<=12)){
         this.setState({Month:e.value})}
         else if(e.value.length>=3){alert("just 2 numbers!!");}
           else{alert("we have 12 months!!");}
      }else{alert("opss letters!! Please enter the Card's expiration month ");}
   }

   if(e.id==='Year'){
      if(Number(e.value)){
          if(e.value.length<=2){
           this.setState({Year:e.value})}
           else{alert("just the last 2 numbers of the year --yy,!!");}
      }else{alert("opss letters!! Please enter the Card's expiration year ");}
   }
  

  }



  render() { 
    return ( 
      <div className="crediCard">
       <div className="App">
          <h1>CREDIT CARD</h1>
          <div className="main">
           <img className="puce" src={puce} alt="puce"/>
           <div className="info">
           <span id="numCart">{this.state.CardNumber.padEnd(16,"*").split("").map((x,i)=> (i===0 || i%4===0)? ' '+x:x )}</span>
            
            <div className="codeVal">
            <h3 id="code">{this.state.CardCode.padEnd(4,"*").split("").map((x,i)=> (i===0 || i%4===0)? " "+x:x )}</h3>
              
              <div className="DatVal">
               <h5>VALID <br/>THRU</h5>
               <img className="flech" src={flech} alt="flech"/>
               <span className="date">MONTH/YEAR <br/>
               <h3> {this.state.Month.padEnd(2,'-')}/{this.state.Year.padEnd(2,'-')}</h3>
               </span>
              
              </div>
            </div>
            <h3 id="cardName">{this.state.Name.padEnd(6,'-')}</h3>
           </div>
         <div>
        <img className="MasterCard" src={masterCard} alt="masterCard"/>
       </div>
      </div>
      </div>
      <form id="Form">
        <div class="information-perso">
          <input  id="CardNumber" placeholder="Card Number" onChange={(e)=>this.FnUpdateInfo(e.target)} value={this.state.CardNumber} type='text' /><br/>
          
          <input  id="CardCode" placeholder="Card Code..."  onChange={(e)=>this.FnUpdateInfo(e.target)} value={this.state.CardCode} type='text' /><br/>

          <input id="Name" placeholder="Your Name..." onChange={(e)=>this.FnUpdateInfo(e.target)} value={this.state.Name} type='text' /><br/><br/>
          
          <label><b><em>Validation Date:</em></b></label><br/>
            <input  id="Month" placeholder="Expiration Month (mm/)..." onChange={(e)=>this.FnUpdateInfo(e.target)} value={this.state.Month} type='text' /><br/>
            <input   id="Year" placeholder="Expiration Year (/yy)..." onChange={(e)=>this.FnUpdateInfo(e.target)} value={this.state.Year} type='text' />
                        
          </div>
        
      </form>

      </div>
     );
  }
}
 
export default App;