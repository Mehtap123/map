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
                    <MyMap mapvalue={[50.94167, 6.95516]}/>
                </TabPanel>
                <TabPanel>
                    <h1>Hier habe ich studiert</h1> 
                    <MyMap mapvalue={[50.93632, 6.9892]}/>
                </TabPanel>
                <TabPanel>
                    <h1>Hier habe ich einen schönen Urlaub gehabt</h1>
                    <MyMap mapvalue={[36.8981299, 30.5780178]}/>
                </TabPanel>
                <TabPanel>
                    <h1>Meine Lieblingsstadt in Europa</h1>
                    <MyMap mapvalue={[41.3828939, 2.1774322]}/>
                </TabPanel>
            </Tabs>
        </>
    )

};

export default MyTabs;

// Uni:
//defaultCenter={[50.93632, 6.9892]} 
// anchor={[50.93632, 6.9892]} 

// Strandurlaub:
//defaultCenter={[36.8981299, 30.5780178]} 
// anchor={[36.8981299, 30.5780178]} 

// schönste Stadt in Europa
//defaultCenter={[41.3828939, 2.1774322]} 
// anchor={[41.3828939, 2.1774322]} 
