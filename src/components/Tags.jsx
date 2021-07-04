import React from 'react'
import { Tabs } from 'antd';
import Contact from '../components/TagsElements/Contact'
function Tags() {
    function callback(key) {
        console.log(key);
    }
    const { TabPane } = Tabs;
    return (
        <div>
        <Tabs defaultActiveKey="1" onChange={callback} style={{fontSize:'10px !important'}} >
            <TabPane tab="Contact" key="1"  >
                <Contact/>
            </TabPane>
            <TabPane tab="Stock"  key="2">
            Stock
            </TabPane>
            <TabPane tab=" History" key="3">
            History
            </TabPane>
            <TabPane tab="Recent Order" key="4">
            Recent Order
            </TabPane>
            <TabPane tab="Similar Order" key="5">
            Similar Order
            </TabPane>
        </Tabs>
        </div>
    )
}

export default Tags
