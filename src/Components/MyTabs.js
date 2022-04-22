import React from "react";
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import MyMap from "./MyMap";

const MyTabs = () =>{

    return (
        <>
            <Tabs>
                <TabList>
                    <Tab>Zuhause</Tab>
                    <Tab>Studium</Tab>
                    <Tab>Schönster Strandurlaub</Tab>
                    <Tab>Lieblingsstad in Europa</Tab>
                </TabList>

                <TabPanel>
                    <h1>Mein Zuhause</h1>
                    <MyMap/>
                </TabPanel>
                <TabPanel>
                    <h1>Hier habe ich studiert</h1> 
                    <MyMap/>
                </TabPanel>
                <TabPanel>
                    <h1>Hier habe ich einen schönen Urlaub gehabt</h1>
                    <MyMap/>
                </TabPanel>
                <TabPanel>
                    <h1>Meine Lieblingsstadt in Europa</h1>
                    <MyMap/>
                </TabPanel>
            </Tabs>
        </>
    )

};

export default MyTabs;