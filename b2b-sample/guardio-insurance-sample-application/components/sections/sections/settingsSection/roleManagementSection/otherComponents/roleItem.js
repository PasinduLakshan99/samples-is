/**
 * Copyright (c) 2022, WSO2 LLC. (https://www.wso2.com). All Rights Reserved.
 *
 * WSO2 LLC. licenses this file to you under the Apache License,
 * Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import CodeIcon from "@rsuite/icons/Code";
import React, { useCallback, useEffect, useState } from "react";
import { Nav, Panel } from "rsuite";
import General from "./roleItemDetailsSection/general";
import decodeGetRole from "../../../../../../util/apiDecode/settings/role/decodeGetRole";
import AccordianItemHeader from "../../../../../common/accordianItemHeader";
import JsonDisplay from "../../../../../common/jsonDisplay";

/**
 * 
 * @param prop - `session`, `id`, `roleUri`
 * 
 * @returns role item componet
 */
export default function RoleItem(prop) {

    const { session, id, roleUri } = prop;

    const [ roleDetails, setRoleDetails ] = useState({});
    const [ activeKeyNav, setActiveKeyNav ] = useState("1");

    const fetchData = useCallback(async () => {
        const res = await decodeGetRole(session, roleUri);

        setRoleDetails(res);
    }, [ session, roleUri ]);

    useEffect(() => {
        fetchData();
    }, [ fetchData ]);

    const activeKeyNavSelect = (eventKey) => {
        setActiveKeyNav(eventKey);
    };

    const roleItemDetailsComponent = (activeKey) => {
        switch (activeKey) {
            case "1":

                return <General session={ session } roleDetails={ roleDetails } fetchData={ fetchData } />;
            case "4":

                return <JsonDisplay jsonObject={ roleDetails } />;
        }
    };


    return (

        roleDetails
            ? (<Panel
                header={
                    (<AccordianItemHeader
                        title={ roleDetails.displayName }
                        description={ `Organization role ${roleDetails.displayName} details` } />)
                }
                eventKey={ id }
                id={ id }>
                <div style={ { marginLeft: "25px", marginRight: "25px" } }>
                    <RoleItemNav
                        activeKeyNav={ activeKeyNav }
                        activeKeyNavSelect={ activeKeyNavSelect } />
                    <div>
                        { roleItemDetailsComponent(activeKeyNav) }
                    </div>
                </div>
            </Panel>)
            : null
    );
}

function RoleItemNav(prop) {

    const { activeKeyNav, activeKeyNavSelect } = prop;

    return (
        <Nav appearance="subtle" activeKey={ activeKeyNav } style={ { marginBottom: 10, marginTop: 15 } }>
            <div
                style={ {
                    alignItems: "stretch",
                    display: "flex"
                } }>
                <Nav.Item
                    eventKey="1"
                    onSelect={ (eventKey) => activeKeyNavSelect(eventKey) }>General</Nav.Item>

                { /* <Nav.Item
                    eventKey="2"
                    onSelect={(eventKey) => activeKeyNavSelect(eventKey)}>
                    Permissions
                </Nav.Item>

                <Nav.Item
                    eventKey="3"
                    onSelect={(eventKey) => activeKeyNavSelect(eventKey)}>
                    Users
                </Nav.Item> */ }

                <div style={ { flexGrow: "1" } }></div>

                <Nav.Item
                    eventKey="4"
                    onSelect={ (eventKey) => activeKeyNavSelect(eventKey) }
                    icon={ <CodeIcon /> }>
                    Developer Tools
                </Nav.Item>
            </div>
        </Nav>
    );
}