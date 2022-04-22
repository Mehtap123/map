import React from "react";
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

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
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit expedita sint beatae voluptatem doloremque odio rem, ipsa, alias voluptatibus, debitis dignissimos a. Dolore illum voluptatem explicabo aperiam hic molestiae assumenda.
                    </p>
                </TabPanel>
                <TabPanel>
                    <h1>Hier habe ich studiert</h1>
                    <p>Hier kommt die Karte rein</p>  
                </TabPanel>
                <TabPanel>
                    <h1>Hier habe ich einen schönen Urlaub gehabt</h1>
                    <p>Hier kommt eine weitere Karte rein</p> 
                </TabPanel>
                <TabPanel>
                    <h1>Meine Lieblingsstadt in Europa</h1>
                    <p>und noch eine Karte</p> 
                </TabPanel>
            </Tabs>
        </>
    )

};

export default MyTabs;