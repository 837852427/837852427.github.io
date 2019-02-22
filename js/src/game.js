var click1_html;
var i=0;
var loop1;
var body;
var re1,re2,re3,re4,re5,re6,re7;
function click1()
{
  var dir=document.getElementById('one');
  click1_html=dir;
  var p=dir.parentNode;
  body=p;
  p.removeChild(dir);
  var n=document.createElement('h1');
  var n_text=document.createTextNode('点击选择按钮即可选择');
  re1=n;
  n.appendChild(n_text);
  p.appendChild(n);
  var eimg=document.createElement('img');
  re2=eimg;
  eimg.id='img1';
  eimg.width='800';
  eimg.height='600';
  p.appendChild(eimg);
  var ebut=document.createElement('button');
  ebut.type='button';
  ebut.id='two';
  var ebut_t=document.createTextNode('选择');
  re3=ebut;
  var nn=document.createElement('br');
  ebut.appendChild(ebut_t);
  p.appendChild(nn);
  p.appendChild(ebut);
  loop1=setInterval(changeImage,30);
  document.getElementById('two').addEventListener('click',click2,false);
}
function changeImage()
{
  var pic=[
    "https://i.loli.net/2019/02/22/5c6ff377c521d.jpg",
    "https://i.loli.net/2019/02/22/5c6ff377d0fc6.jpg",
    "https://i.loli.net/2019/02/22/5c6ff377d0d5f.png",
    "https://i.loli.net/2019/02/22/5c6ff377d1750.jpg",
    "https://i.loli.net/2019/02/22/5c6ff377d547f.jpg",
    "https://i.loli.net/2019/02/22/5c6ff377d563a.jpg",
    "https://i.loli.net/2019/02/22/5c6ff3780db68.jpg",
    "https://i.loli.net/2019/02/22/5c6ff3780f0f0.jpg",
    "https://i.loli.net/2019/02/22/5c6ff378167cb.jpeg",
    "https://i.loli.net/2019/02/22/5c6ff378178c8.jpeg",
    "https://i.loli.net/2019/02/22/5c6ff41dc472c.jpg",
    "https://i.loli.net/2019/02/22/5c6ff41dc6780.jpg",
    "https://i.loli.net/2019/02/22/5c6ff41dc87c9.jpg",
    "https://i.loli.net/2019/02/22/5c6ff41dc28c8.jpg",
    "https://i.loli.net/2019/02/22/5c6ff41dca549.jpg",
    "https://i.loli.net/2019/02/22/5c6ff41dcc4bb.jpg",
    "https://i.loli.net/2019/02/22/5c6ff41dd07c7.jpg",
    "https://i.loli.net/2019/02/22/5c6ff41dd2797.jpg",
    "https://i.loli.net/2019/02/22/5c6ff41dce646.jpg",
    "https://i.loli.net/2019/02/22/5c6ff41e61ebc.png",
    "https://i.loli.net/2019/02/23/5c702b57c3bbb.png",
    "https://i.loli.net/2019/02/23/5c702b5831271.jpg",
    "https://i.loli.net/2019/02/23/5c702b584bf33.png",
    "https://i.loli.net/2019/02/23/5c702b588ebcb.png"
  ];
  i++;
  if(i>=pic.length)
  i=0;
  document.getElementById('img1').src=pic[i];
}
function click2()
{
  clearInterval(loop1);
  body.removeChild(re3);
  var n1=document.createElement('button');
  var n2=document.createElement('button');
  var h1=document.createElement('h1');
  var n1_t=document.createTextNode('带回家！！！');
  var n2_t=document.createTextNode('我选择放弃');
  var h1_t=document.createTextNode('是否选择带回家？有一定的几率');
  re4=h1;
  n1.appendChild(n1_t);
  n2.appendChild(n2_t);
  n1.id='yes';
  n2.id='no';
  h1.appendChild(h1_t);
  body.appendChild(h1);
  body.appendChild(n1);
  body.appendChild(n2);
  n1.addEventListener('click',yes1,false);
  n2.addEventListener('click',no1,false);
}
var rand=Math.random();
function yes1()
{
  if(rand>=0.25)
  var now=alert('抱歉你并没有成功');
  else
  var now=alert('恭喜你成功了！！！');
  retry();
}
function no1()
{
  var now=alert('真是一个让人遗憾的选择啊！！！');
  retry();
}
function retry()
{
  body.removeChild(document.getElementById('yes'));
  body.removeChild(document.getElementById('no'));
  var h1=document.createElement('h1');
  var h1_t=document.createTextNode('是否要重新来过?');
  re5=h1;
  var n1=document.createElement('button');
  var n2=document.createElement('button');
  var n1_t=document.createTextNode('是');
  var n2_t=document.createTextNode('否');
  n1.appendChild(n1_t);
  n2.appendChild(n2_t);
  re6=n1;
  re7=n2;
  h1.appendChild(h1_t);
  body.appendChild(h1);
  body.appendChild(n1);
  body.appendChild(n2);
  n1.addEventListener('click',yes2,false);
  n2.addEventListener('click',no2,false);
}
function yes2()
{
  body.removeChild(re1);
  body.removeChild(re2);
  body.removeChild(re4);
  body.removeChild(re5);
  body.removeChild(re6);
  body.removeChild(re7);
  body.appendChild(click1_html);
}
function no2()
{
  alert('你仍然可以刷新进行重新选择');
  body.removeChild(re6);
  body.removeChild(re7);
}
document.getElementById('one').addEventListener('click',click1,false);
