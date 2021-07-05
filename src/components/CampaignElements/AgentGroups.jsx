import React, {useState} from 'react'
import { AgentGroupsStyle } from '../../styles/CampaignElementStyle/Elements'
import { RemoveButton, SearchField} from '../../styles/CampaignElementStyle/Elements'
import { ItemFont, ListFont } from '../../styles/CampaignElementStyle/Fonts'
import {DeleteOutlined,  PlusOutlined, MinusOutlined} from '@ant-design/icons'
import {Container,ContainerLeft,ContainerRight, Header} from '../../styles/CampaignElementStyle/MainElements'
import {List} from 'antd';
function AgentGroups() {
    const [groups] = useState([
        {
            id:1,
            title:'Group 1'
        },
        {
            id:2,
            title:'Group 2'
        },
        {
            id:3,
            title:'Group 3'
        },
        {
            id:4,
            title:'Group 4'
        },
        {
            id:5,
            title:'Group 5'
        },
    ]);
    const [selectedGroups,setSelectedGroups] = useState([
    ]);

    const RemoveCallingItem = (id) => {
        setSelectedGroups((selectedGroups.filter(item => item.id !== id)))
    }
    return (
        <AgentGroupsStyle>
            <Container>
                <ContainerLeft>
                    <Header>
                        <ListFont>Calling List</ListFont>
                        <SearchField placeholder="Search calling list"/>
                    </Header>
                    <List>
                        {
                            groups.map((item) => (
                                <List.Item key={item.id} style={{padding:'16px'}}><PlusOutlined onClick={() => setSelectedGroups([...selectedGroups , item])} style={{border:'1px solid gray', marginRight:'22.8px'}}/> <ItemFont>{item.title}</ItemFont></List.Item>
                            ))
                        }
                    </List>
                </ContainerLeft>
                <ContainerRight>
                    <Header>
                        <ListFont>Selected</ListFont>
                        <RemoveButton><DeleteOutlined/> Remove All</RemoveButton>
                    </Header>
                    <List>
                        {
                            selectedGroups.map((item) => (
                                <List.Item key={item.id} style={{padding:'16px'}}>< MinusOutlined onClick={ () => RemoveCallingItem(item.id)} style={{border:'1px solid gray', marginRight:'22.8px'}}/> <ItemFont>{item.title}</ItemFont></List.Item>
                            ))
                        }
                    </List>
                </ContainerRight>
            </Container>
        </AgentGroupsStyle>
    )
}

export default AgentGroups
