var pic=[
  "https://i.loli.net/2019/02/23/5c70adea8f10d.jpg",
  "https://i.loli.net/2019/02/23/5c70adeab90a3.png",
  "https://i.loli.net/2019/02/23/5c70adeb32f1b.png",
  "https://i.loli.net/2019/02/23/5c70adeb596d2.png",
  "https://i.loli.net/2019/02/23/5c702f87a58b5.jpg"
];
var i=Math.random();
if(i<=0.2)
i=0;
else if(i<=0.4)
i=1;
else if(i<=0.6)
i=2;
else if(i<=0.8)
i=3;
else
i=4;
document.body.background=pic[i];
