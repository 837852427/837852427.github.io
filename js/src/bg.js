var pic=[
  "https://s2.ax1x.com/2019/02/25/k5mxOA.png",
  "https://s2.ax1x.com/2019/02/25/k5mvyd.png",
  "https://s2.ax1x.com/2019/02/25/k5mXSe.png",
  "https://s2.ax1x.com/2019/02/25/k5mLWD.jpg",
  "https://s2.ax1x.com/2019/02/25/k5mjQH.jpg"
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
$('body').css('background-image','url('+pic[i]+')');
$('body').css('-webkit-background-image','url('+pic[i]+')');
