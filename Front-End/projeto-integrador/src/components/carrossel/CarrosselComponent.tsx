import React from 'react'
import Carousel from 'react-elastic-carousel'
import { useState } from 'react'

function CarrosselComponent() {
  const [items, setstate] = useState([
    {id: 1, title: 'item #1', img:"https://cdn.discordapp.com/attachments/888511226311766018/908076878932348976/agua_encanada.jpg"},
    {id: 2, title: 'item #2', img:"https://cdn.discordapp.com/attachments/888511226311766018/908076929045909544/Agua_encanada1.jpg"},
    {id: 3, title: 'item #3', img:"https://cdn.discordapp.com/attachments/888511226311766018/908076959513325608/tratamento_de_esgoto1.jpg"},
    {id: 4, title: 'item #4', img:"https://cdn.discordapp.com/attachments/888511226311766018/908076988693114880/tratamento_de_esgoto.jpg"}
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