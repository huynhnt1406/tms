import React, { useState } from 'react'
import {List, Table} from 'antd'
const strategy = [
    {
        id:1,
        title:'Call Strategy 1',
        data:{
            key:1,
            phone:12,
            status:43,
            attemp:51,
            duration:14,
            day:42
        }
    },
    {
        id:2,
        title:'Call Strategy 2',
        data:{
            key:2,
            phone:12,
            status:43,
            attemp:51,
            duration:14,
            day:42
        }
    },
    {
        id:3,
        title:'Call Strategy 3',
        data:{
            key:3,
            phone:12,
            status:43,
            attemp:51,
            duration:14,
            day:42
        }
    },
    {
        id:4,
        title:'Call Strategy 4',
        data:{
            key:4,
            phone:12,
            status:43,
            attemp:51,
            duration:14,
            day:42
        }
    },
    {
        id:5,
        title:'Call Strategy 5',
        data:{
            key:5,
            phone:12,
            status:43,
            attemp:51,
            duration:14,
            day:42
        }
    },
]
function CallStrategy() {
    const columns = [
        {
          title: <TableFont>PHONE</TableFont>,
          dataIndex: 'phone',
          key:'phone'
        },
        {
          title:<TableFont>CALL STATUS</TableFont>,
          dataIndex: 'status',
          key:'status'
        },
        {
          title: <TableFont>ATTEMP</TableFont>,
          dataIndex: 'attemp',
          key:'attemp'
        },
        {
            title: <TableFont>DURATION</TableFont>,
            dataIndex: 'duration',
            key:'duration'
        },
        {
            title: <TableFont>DAY</TableFont>,
            dataIndex: 'day',
            key:'day'
        },
      ];
    const [dataSource, setDataSource] = useState([])
    return (
        <CallStrategyStyle>
            <Container>
                <ContainerLeft>
                    <Header>
                        <ListFont>Select Call Strategy</ListFont>
                        <SearchField placeholder="Search calling list"/>
                    </Header>
                    <List>
                        {
                            strategy.map((item) => (
                                <List.Item key={item.id} style={{padding:'16px'}} onClick ={() => setDataSource([...dataSource,item.data])}><ItemFont>{item.title}</ItemFont></List.Item>
                            ))
                        }
                    </List>
                </ContainerLeft>
                <ContainerRight>
                    <Table dataSource={dataSource}  columns={columns} size="small" pagination={false} scroll={{ y: 500 }} />
                </ContainerRight>
            </Container>
        </CallStrategyStyle>
    )
}

export default CallStrategy
