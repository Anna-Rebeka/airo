import React, {FunctionComponent} from "react";
import styled from '@emotion/styled';
import {css} from "@emotion/react";
import ReactDOM from "react-dom";

interface Props {}

let FormWrapper = styled.div`
    display: none;
    position: fixed;
    overflow: auto;
    width: 100vw;
    height: 100vh;
    /*left: 25vw;*/
    background-color: rgba(125, 125, 125, 0.5);
    text-align: center;
`;

let Reg = styled.form`
    text-align: center;
    border: 2px crimson solid;
    position: relative;
    width: 50%;
    height: 50%;
    background-color: rgba(0, 0, 0, 1);
    left: 22%;
`;

let MyInput = css`
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

    ::placeholder
    {
        color: orange;
        font-family: math;
        font-size: 18px;
        opacity: 1;
    }

    [type='submit']
    {
        border-radius: 25px;
        background-color: orange;
        color: black;
        font-size: 18px;
        font-family: math;
        cursor: pointer;
    }
`;

let Username = styled.input(MyInput);
let Password = styled.input(MyInput);
let Submit = styled.input(MyInput);

let Close = styled.button`
    position: relative;
    color: red;
    float: right;
    cursor: pointer;
    background-color: rgba(125, 125, 125, 0);
    border: 1px rgba(0, 0, 0, 0) solid;
    margin: 5px;

    :hover, :focus {
        border-color: rgba(125, 125, 125, 1);
    }
`;

function SetDisplay(d: string)
{
    /*
*
  <body>
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
    /*function Show = (event: any) =>
    try
    {
        // na normalny JS vyhadzuje chyby
        try { Reg.__emotion_styles.display='block'; }
        catch (err) { console.log(err); }
        let e = document.getElementById('reg');
        // @ts-ignore
        e.style['display'] = d;
    }
    catch (err) { console.log(err); }*/
}

function Show(event: any) { SetDisplay('block'); }
function Hide(event: any) { SetDisplay('none');  }

export const ResultItem: FunctionComponent<Props> = ({}) =>
{
    return (
        <>
        <FormWrapper>
            <Reg id='reg'>
                <Close id="hideBtn" onClick={ Hide }>X</Close>
                <h1> Registrácia </h1>
                <br />
                <Username type="text" id="username" name="username" placeholder="User name"></Username>
                <br />
                <Password type="password" id="pw" name="pw" placeholder="Password"></Password>
                <br />
                <Submit type="submit" id="submit" name="submit" value="submit"></Submit>
            </Reg>
        </FormWrapper>
        <button id="showBtn" onClick={ Show }> Registrácia </button>
        </>
    );
}

export default ResultItem;
