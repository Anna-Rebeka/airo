import React, {FunctionComponent, useState} from "react";
import {ModularFormRoot} from "./ModularFormRoot";
import {ModularFormInputWrapper} from "./ModularFormInputWrapper";
import {ModularFormInputElement} from "./ModularFormInputElement";
import axios from "axios";
import {ModularButton} from "./ModularButton";

interface Props {
    setDisplay: any;
    setState: any;
    displayForm: boolean;
    bookingWithoutRegistration: boolean;
}

export const ModularFormRegisterImpl: FunctionComponent<Props> = ({
                                                                      setDisplay,
                                                                      setState,
                                                                      bookingWithoutRegistration
                                                                  }) => {

    let [firstName, setFirstName] = useState("");
    let [lastName, setLastName] = useState("");

    let [emailAddress, setEmailAddress] = useState("");
    let [password, setPassword] = useState("");
    let [registrationSuccessful, setRegistrationSuccessful] = useState(false);

    return (
        <ModularFormRoot setDisplay={setDisplay}
                         title={registrationSuccessful ? "Registration was successful. Please log in" : "Register"}>
            {!registrationSuccessful ?
                <ModularFormInputWrapper>
                    <ModularFormInputElement type="text" id="firstNameRegisterInput" name="firstName"
                                             placeholder="First name"
                                             value={firstName}
                                             setOnChangeValueMethod={setFirstName}/>
                    <ModularFormInputElement type="text" id="lastNameRegisterInput" name="lastName"
                                             placeholder="Last name"
                                             value={lastName}
                                             setOnChangeValueMethod={setLastName}/>
                    <ModularFormInputElement type="text" id="emailAddressRegisterInput" name="emailAddress"
                                             placeholder="Email address"
                                             value={emailAddress}
                                             setOnChangeValueMethod={setEmailAddress}/>
                    <ModularFormInputElement type="password" id="passwordRegisterInput" name="password"
                                             placeholder="Password"
                                             value={password}
                                             setOnChangeValueMethod={setPassword}/>

                    <ModularButton text={"Register"} type="submit" id="register user" name="register user button"
                                   value="register user" setOnClickValueMethod={() => {
                        axios.post("/register", {
                            first_name: firstName,
                            last_name: lastName,
                            password: password,
                            email: emailAddress
                        }).then((res) => {
                            if (res.data === 1) {
                                setRegistrationSuccessful(true);
                            }
                        })
                    }}/>
                </ModularFormInputWrapper> :
                null
            }
            <ModularButton type={"submit"} name={"backToLoginFromRegister"} value={"backToLoginFromRegister"}
                           text={"Go back to log in"} id="backToLoginThroughRegister"
                           setOnClickValueMethod={() => setState("LOGIN")}/>
            {bookingWithoutRegistration ?
                <ModularButton type={"submit"} name={"withoutRegister"} value={"withoutRegisterValue"}
                               text={"Book without registering"} id="withoutRegisterId"
                               setOnClickValueMethod={() => setState("CHECKOUT_NOT_REGISTERED")}/> : null
            }
        </ModularFormRoot>
    );
}
