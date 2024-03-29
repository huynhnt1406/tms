import React, { useState } from 'react'
import { ParentStyle, RemoveButton, SearchField} from '../../styles/CampaignElementStyle/Elements'
import { ItemFont, ListFont } from '../../styles/CampaignElementStyle/Fonts'
import {DeleteOutlined, PlusOutlined, MinusOutlined} from '@ant-design/icons'
import {Container,ContainerLeft,ContainerRight, Header} from '../../styles/CampaignElementStyle/MainElements'
import {SearchOutlined} from '@ant-design/icons'
import {List} from 'antd';

const callingList = [
    {
        id:1,
        title:'Calling List sản phẩm Lefery'
    },
    {
        id:2,
        title:'Calling List sản phẩm Garcinia'
    },
    {
        id:3,
        title:'Calling List sản phẩm Amulet2-vn'
    },
    {
        id:4,
        title:'Calling List sản phẩm vongdaibi-vn'
    },
    {
        id:5,
        title:'Calling List sản phẩm Penirum'
    },
]
function CallingLists() {
    const [selectedList,setSelectedList] = useState([
    ]);

    const RemoveCallingItem = (id) => {
        setSelectedList((selectedList.filter(item => item.id !== id)))
    }
    return (
        <ParentStyle>
            <Container>
                <ContainerLeft>
                    <Header>
                        <ListFont>Calling List</ListFont>
                        <SearchField prefix={<SearchOutlined/>} placeholder="Search calling list"/>
                    </Header>
                    <List>
                        {
                            callingList.map((item) => (
                                <List.Item key={item.id} style={{padding:'16px'}}><PlusOutlined onClick={() => setSelectedList([...selectedList , item])} style={{border:'1px solid gray', marginRight:'22.8px'}}/> <ItemFont>{item.title}</ItemFont></List.Item>
                            ))
                        }
                    </List>
                </ContainerLeft>
                <ContainerRight>
                    <Header>
                        <ListFont>Selected</ListFont>
                        <RemoveButton onClick={() => setSelectedList([])}><DeleteOutlined/> Remove All</RemoveButton>
                    </Header>
                    <List>
                        {
                            selectedList.length > 0 ? (selectedList.map((item) => (
                                <List.Item key={item.id} style={{padding:'16px'}}>< MinusOutlined onClick={ () => RemoveCallingItem(item.id)} style={{border:'1px solid gray', marginRight:'22.8px'}}/> <ItemFont>{item.title}</ItemFont></List.Item>
                            ))) : ("")
                        }
                    </List>
                </ContainerRight>
            </Container>
        </ParentStyle>
    )
}

export default CallingLists
