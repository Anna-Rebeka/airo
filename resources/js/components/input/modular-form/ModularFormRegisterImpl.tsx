import React, {FunctionComponent, useState} from "react";
import {ModularFormRoot} from "./ModularFormRoot";
import {ModularFormInputWrapper} from "./ModularFormInputWrapper";
import {ModularFormInputElement} from "./ModularFormInputElement";
import axios from "axios";
import {ModularButton} from "./ModularButton";
import {ValidateEmail, ValidateFName, ValidatePW} from "../../../hooks/useValidators";
import {Error} from "../auto-complete/Error";

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

    let [isWrongEmail, setIsWrongEmail] = useState(false);
    let [isWrongPassword, setIsWrongPassword] = useState(false);

    let [isWrongFirstName, setIsWrongFirstName] = useState(false);
    let [isWrongLastName, setIsWrongLastName] = useState(false);

    let [alreadyExists, setAlreadyExists] = useState(false);

    let checkInputsWrong = () => {
        let isWrongEmailLet: any = !ValidateEmail(emailAddress);
        let isWrongPassword: any = !ValidatePW(password);
        let isWrongFirstName: any = !ValidateFName(firstName);
        let isWrongLastName: any = !ValidateFName(lastName);

        setIsWrongEmail(isWrongEmailLet);
        setIsWrongFirstName(isWrongFirstName);
        setIsWrongPassword(isWrongPassword);
        setIsWrongLastName(isWrongLastName);

        return isWrongPassword || isWrongEmailLet || isWrongFirstName || isWrongLastName;
    }

    return (
        <ModularFormRoot setDisplay={setDisplay}
                         title={registrationSuccessful ? "Registration was successful. Please log in" : "Register"}>
            {!registrationSuccessful ?
                <ModularFormInputWrapper>
                    <ModularFormInputElement validatorMethodIsValid={ValidateFName} isWrongFromParent={isWrongFirstName}
                                             setIsWrongParentMethod={setIsWrongFirstName}
                                             errorMessage={"The first name is wrong. It cannot contain special characters."}
                                             type="text" id="firstNameRegisterInput" name="firstName"
                                             placeholder="First name"
                                             value={firstName}
                                             setOnChangeValueMethod={setFirstName}/>
                    <ModularFormInputElement validatorMethodIsValid={ValidateFName} isWrongFromParent={isWrongLastName}
                                             setIsWrongParentMethod={setIsWrongLastName}
                                             errorMessage={"The last name is wrong. It cannot contain special characters."}
                                             type="text" id="lastNameRegisterInput" name="lastName"
                                             placeholder="Last name"
                                             value={lastName}
                                             setOnChangeValueMethod={setLastName}/>
                    <ModularFormInputElement validatorMethodIsValid={ValidateEmail}
                                             setIsWrongParentMethod={setIsWrongEmail} isWrongFromParent={isWrongEmail}
                                             errorMessage={"Email address is not in a correct format."} type="text"
                                             id="emailAddressRegisterInput" name="emailAddress"
                                             placeholder="Email address"
                                             value={emailAddress}
                                             setOnChangeValueMethod={setEmailAddress}/>
                    <ModularFormInputElement validatorMethodIsValid={ValidatePW} isWrongFromParent={isWrongPassword}
                                             setIsWrongParentMethod={setIsWrongPassword}
                                             errorMessage={"Password is wrong. It must contains at least one number, one capital letter and at least 8 characters."}
                                             type="password" id="passwordRegisterInput" name="password"
                                             placeholder="Password"
                                             value={password}
                                             setOnChangeValueMethod={setPassword}/>

                    <ModularButton text={"Register"} type="submit" id="register user" name="register user button"
                                   value="register user" setOnClickValueMethod={() => {
                        setAlreadyExists(false);
                        if (!checkInputsWrong()) {
                            axios.post("/register", {
                                first_name: firstName,
                                last_name: lastName,
                                password: password,
                                email: emailAddress
                            }).then((res) => {
                                if (res.data === 1) {
                                    setRegistrationSuccessful(true);
                                }
                            }).catch(() => {
                                setAlreadyExists(true);
                            })
                        }
                    }
                    }/>
                </ModularFormInputWrapper> :
                null
            }
            {
                alreadyExists ?
                    <Error>User with given email address already exists. Please use another email
                        address.</Error> : null
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
