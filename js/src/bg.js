<script type="text/javascript">
   //<!CDATA[
       var bodyBgs = [];
       bodyBgs[0] = "https://i.loli.net/2019/02/13/5c63aa4a239b2.jpg";
       bodyBgs[1] = "https://i.loli.net/2019/02/14/5c64462735e20.jpg";
       bodyBgs[2] = "https://i.loli.net/2019/02/14/5c6446276f5d7.jpg";
       bodyBgs[3] = "https://i.loli.net/2019/02/14/5c644627b8b6d.jpg";
       bodyBgs[4] = "https://i.loli.net/2019/02/14/5c6446280ddaf.jpg";

       var randomBgIndex = Math.round( Math.random() * 4 );

   //输出随机的背景图
       document.write('<style>body{background:url(' + bodyBgs[randomBgIndex] + ') no-repeat 50% 0}</style>');
   //]]>
   </script>
