import React from 'react';

import { List, Card } from 'antd';


const { Meta } = Card;

const Travel = (props) => {
    return ( <List
        grid={{ gutter: 16, column: 4 }}
        dataSource={props.data}
        renderItem={item => (
          <List.Item>
            <a href={`/travel/${item.id}`}><Card
    style={{ width: 450, marginLeft: 20 }}
    cover={
      <img
        alt="example"
        src={item.image}
      />
    }
  >
    <Meta
      title={item.title}
      description={item.description}
    />
  </Card></a>,
          </List.Item>
        )}
      /> );
}
 
export default Travel;
  
 