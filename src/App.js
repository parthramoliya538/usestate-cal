import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
function App(){

  let [sign,setsign]=useState("");
  let [temp,settemp]=useState("");
  let [fval,setfval]=useState("");
  let [del,setdel]=useState("");
  
    let Ans=(a)=>{
	  settemp(temp+a);
    }

	let fdata=(s)=>{
		setsign(s);
		setfval(temp)
		settemp('')
	}

	let ldata=()=>{

		if(sign=='+')
		{
			 settemp(`${parseInt(fval)+parseInt(temp)}`);
		}
		if(sign=='-')
		{
			settemp(`${parseInt(fval)-parseInt(temp)}`);
		}
		if(sign=='*')
		{
			settemp(`${parseInt(fval)*parseInt(temp)}`);
		}
		if(sign=='/')
		{
			if(temp==0) {
				settemp("can not divided by 0")
			}
			else {
				settemp(`${parseInt(fval)/parseInt(temp)}`);
			}
		}
		if(sign=="%")
		{
			settemp(`${parseInt(fval)%parseInt(temp)}`);
		}
	}

	const clr=(s)=>{
		if(s=='c'){
					settemp("");
				}
				else{
					
					settemp(temp.slice(0, -1));
				}
	}
  return (
    <>
    <div className="main">
		<div className="ans">
			<input type="text" value={temp} id="ans2"></input>
		</div>
		<div class="first">
			<input type="button" name="" id="C" value="C"  onClick={()=>clr("c")}></input>
			<input type="button" name="" id="Del" value="Del"onClick={()=>clr("d")}></input>
			<input type="button" name="" id="%" value="%"  onClick={() => fdata('%')}></input>
			<input type="button" name="" id="/" value="/"  onClick={() => fdata("/")}></input>
		</div>
		<div class="first">
			<input type="button" name="" id="7" value="7" onClick={() => Ans(7)}></input>
			<input type="button" name="" id="8" value="8" onClick={() => Ans(8)}></input>
			<input type="button" name="" id="9" value="9" onClick={() => Ans(9)}></input>
			<input type="button" name="" id="X" value="X" onClick={() => fdata('*')}></input>
		</div>
		<div class="first">
			<input type="button" name="" id="4" value="4" onClick={() => Ans(4)}></input>
			<input type="button" name="" id="5" value="5" onClick={() => Ans(5)}></input>
			<input type="button" name="" id="6" value="6" onClick={() => Ans(6)}></input>
			<input type="button" name="" id="-" value="-"  onClick={() => fdata('-')}></input>
		</div>
		<div class="first">
			<input type="button" name="" id="1" value="1" onClick={() => Ans(1)}></input>
			<input type="button" name="" id="2" value="2" onClick={() => Ans(2)}></input>
			<input type="button" name="" id="3" value="3" onClick={() => Ans(3)}></input>
			<input type="button" name="" id="+" value="+"  onClick={() => fdata('+')}></input>
		</div>
		<div class="first">
			<input type="button" name="" id="0" value="0"  onClick={() => Ans(0)}></input>
			<input type="button" name="" id="." value="." onClick={() => Ans('.')}></input>
			<input type="button" name="" id="=" value="="  onClick={()=>ldata()}></input>
		</div>
	</div>
    </>
  );
}

export default App;
