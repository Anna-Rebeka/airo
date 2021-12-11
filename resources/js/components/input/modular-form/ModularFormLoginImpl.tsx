import React, {FunctionComponent, useState} from "react";
import {ModularFormRoot} from "./ModularFormRoot";
import {ModularFormInputWrapper} from "./ModularFormInputWrapper";
import {ModularFormInputElement} from "./ModularFormInputElement";
import axios from "axios";
import {ModularButton} from "./ModularButton";

interface Props {
    setState: any;
    setUser: any;
    setDisplay: any;
    additionalLoginOnClickMethod?: any;
    bookingWithoutRegistration: boolean;
}

export const ModularFormLoginImpl: FunctionComponent<Props> = ({
                                                                   setUser,
                                                                   setDisplay,
                                                                   setState,
                                                                   additionalLoginOnClickMethod,
                                                                   bookingWithoutRegistration
                                                               }) => {

    let [emailAddress, setEmailAddress] = useState("");
    let [password, setPassword] = useState("");

    return (
        <ModularFormRoot setDisplay={setDisplay} title={"Login"}>
            <ModularFormInputWrapper>
                <ModularFormInputElement type="text" id="emailAddressRegisterInput" name="emailAddress"
                                         placeholder="Email address"
                                         value={emailAddress}
                                         setOnChangeValueMethod={setEmailAddress}/>
                <ModularFormInputElement type="password" id="passwordRegisterInput" name="password"
                                         placeholder="Password"
                                         value={password}
                                         setOnChangeValueMethod={setPassword}/>

                <ModularButton text={"Log in"} type="submit" id="login" name="login button"
                               value="login user" setOnClickValueMethod={() => {
                    axios.post("/login",
                        {email: emailAddress, password: password}).then((res) => {
                        setUser(res.data);
                        setState("LOGGED");
                        additionalLoginOnClickMethod && additionalLoginOnClickMethod();
                    })
                }}/>
                <ModularButton type={"submit"} name={"register"} value={"register"}
                               text={"Don't have an account? Create one!"} id="registerThroughLoginUser"
                               setOnClickValueMethod={() => setState("REGISTER")}/>
                {bookingWithoutRegistration ?
                    <ModularButton type={"submit"} name={"withoutRegisterLogin"} value={"withoutRegisterLoginValue"}
                                   text={"Book without login"} id="withoutRegisterLoginId"
                                   setOnClickValueMethod={() => setState("CHECKOUT_NOT_REGISTERED")}/> : null
                }
            </ModularFormInputWrapper>
        </ModularFormRoot>
    );
}
