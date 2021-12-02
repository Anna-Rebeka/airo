import React, {FunctionComponent} from "react";
import styled from "@emotion/styled";
import {ButtonHref} from "../../button/ButtonHref";

interface Props {}
/*
* <body>
	<div id='reg' class='FormWrapper'>
		<form class='reg'>
		<button class='Close' onclick="document.getElementById('reg').style.display='none';">X</button>
			<h1>Registracia</h1>
			<br>
			<input type='text' id='username' name='username' placeholder='User name' class='MyInput' />
			<br />
			<input type='password' id='pw' name='pw' placeholder='Password' class='MyInput'/>
			<br />
			<input type='submit' id='register' name='register' value='Register' class='MyInput'>
		</form>
	</div>
	<button id='ShowBtn' onclick="document.getElementById('reg').style.display='block'"> Formular </button>
  </body>
* */

let FormWrapper = styled.div`
    .FormWrapper {
        display: none;
        position: fixed;
        overflow: auto;
        width: 100vw;
        height: 100vh;
        /*left: 25vw;*/
        background-color: rgba(125, 125, 125, 0.5);
        text-align: center;
    }

    .reg {
        text-align: center;
        border: 2px crimson solid;
        position: relative;
        width: 50%;
        height: 50%;
        background-color: rgba(0, 0, 0, 1);
        left: 22%;
    }

    .MyInput {
        text-align: center;
        border: white 1px solid;
        padding: 0;
        width: 200px;
        height: 50px;
        opacity: 1;
        background-color: gray;
        color: orange;
        margin: 10px;
        display: inline-block;
        box-sizing: border-box;
    }

    .MyInput::placeholder {
        color: orange;
        font-family: math;
        font-size: 18px;
        opacity: 1;
    }

    .Close {
        position: relative;
        color: red;
        float: right;
        cursor: pointer;
        background-color: rgba(125, 125, 125, 0);
        border: 1px rgba(0, 0, 0, 0) solid;
        margin: 5px;
    }

    .Close:hover,
    .Close:focus {
        border-color: rgba(125, 125, 125, 1);
    }

    .MyInput[type='submit'] {
        border-radius: 25px;
        background-color: orange;
        color: black;
        font-size: 18px;
        font-family: math;
        cursor: pointer;
    }
`;

export const ResultItem: FunctionComponent<Props> = ({}) =>
{
    return (
        <FormWrapper>
            <div className="FormWrapper" id="reg">
                <button onClick={ e =>
                {
                    try
                    {
                        //@ts-ignore
                        document.getElementById('reg').style.display='block';
                    } catch(err)
                    {
                        console.log(err);
                    }
                    return true;
                }}>Demo button - klikni sem pre zobrazenie formulara</button>
                <form className='reg'>
                    <button type={"button"} onClick={ (e) =>
                    {
                        try
                        {
                            // @ts-ignore
                            document.getElementById('reg').style.display='none';
                        } catch(err)
                        {
                            console.log(err);
                        }
                        return true;
                    }}>X</button>
                    <h1>Registracia</h1>
                    <br />
                    <input type='text' id='username' name='username' placeholder='User name' className='MyInput'/>
                    <br/>
                    <input type='password' id='pw' name='pw' placeholder='Password' className='MyInput'/>
                    <br/>
                    <input type='submit' id='register' name='register' value='Register' className='MyInput' />
                </form>
            </div>
        </FormWrapper>
    );
}

export default ResultItem;
