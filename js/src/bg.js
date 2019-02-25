var pic=[
  "/images/bg1.jpg",
  "/images/bg2.png",
  "/images/bg3.png",
  "/images/bg4.png",
  "/images/bg5.jpg"
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
