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
    "/images/1.jpg",
    "/images/2.jpg",
    "/images/3.jpg",
    "/images/4.jpg",
    "/images/5.jpg",
    "/images/6.jpg",
    "/images/7.jpg",
    "/images/8.jpg",
    "/images/9.jpg",
    "/images/11.jpg",
    "/images/12.jpg",
    "/images/13.jpg",
    "/images/14.jpg",
    "/images/15.jpg",
    "/images/16.jpg",
    "/images/17.jpg",
    "/images/18.jpg",
    "/images/19.jpg",
    "/images/21.jpg",
    "/images/22.jpg",
    "/images/23.jpg",
    "/images/24.jpg",
    "/images/25S.jpg",
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
