import React, {FunctionComponent, useEffect, useState} from "react";
import BasicImpl from "./BasicImpl";

interface Props {
    dataset: any;
}


export const ContactsImpl: FunctionComponent<Props> = ({
                                                           dataset,
                                                           children
                                                       }) => {
    const [user, setUser] = useState<any>();


    useEffect(() => {
        setUser(JSON.parse(dataset.user));
    }, [dataset])
    return (
        <BasicImpl user={user} setUser={setUser} id={"contacts"}>


        </BasicImpl>
    )
}
