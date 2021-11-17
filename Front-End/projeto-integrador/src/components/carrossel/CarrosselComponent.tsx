import React from 'react';
import Carousel from 'react-elastic-carousel';
import { useState } from 'react';

function CarrosselComponent() {
  const [items, setstate] = useState([
    {id: 1, title: 'item #1', img:"https://cdn.discordapp.com/attachments/888511226311766018/910209782143668234/2.png"},
    {id: 2, title: 'item #2', img:"https://cdn.discordapp.com/attachments/888511226311766018/910209779329282088/1.png"},
    {id: 3, title: 'item #3', img:"https://cdn.discordapp.com/attachments/888511226311766018/910209788565127258/4.png"},
    {id: 4, title: 'item #4', img:"https://cdn.discordapp.com/attachments/888511226311766018/910209785796902952/3.png"}
  ])
  return (
<Carousel isRTL={false} enableAutoPlay autoPlaySpeed={3500}>
{items.map(item => <div key={item.id}>
<img src={item.img} alt="" width="1000px" height="550px"/>

      </div>)}
    </Carousel>
  )
}

export default CarrosselComponent;