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

    let [isWrongCredentials, setIsWrongCredentials] = useState(false);

    return (
        <ModularFormRoot setDisplay={setDisplay} title={"Login"}>
            <ModularFormInputWrapper>
                <ModularFormInputElement validatorMethodIsValid={null} setIsWrongParentMethod={null}
                                         isWrongFromParent={false} errorMessage={""} type="text"
                                         id="emailAddressRegisterInput" name="emailAddress"
                                         placeholder="Email address"
                                         value={emailAddress}
                                         setOnChangeValueMethod={setEmailAddress}/>
                <ModularFormInputElement validatorMethodIsValid={null} isWrongFromParent={isWrongCredentials}
                                         setIsWrongParentMethod={null}
                                         errorMessage={"Email or password is not correct. Please try again."}
                                         type="password" id="passwordRegisterInput" name="password"
                                         placeholder="Password"
                                         value={password}
                                         setOnChangeValueMethod={setPassword}/>

                <ModularButton text={"Log in"} type="submit" id="login" name="login button"
                               value="login user" setOnClickValueMethod={() => {
                    if (emailAddress && password && emailAddress !== "" && password !== "") {
                        axios.post("/login",
                            {email: emailAddress, password: password}).then((res) => {
                            if (res.data) {
                                setUser(res.data);
                                setState("LOGGED");
                                additionalLoginOnClickMethod && additionalLoginOnClickMethod();
                            } else {
                                setIsWrongCredentials(true);
                            }
                        }).catch(() => {
                            setIsWrongCredentials(true);
                        })
                    } else {
                        setIsWrongCredentials(true);
                    }
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
