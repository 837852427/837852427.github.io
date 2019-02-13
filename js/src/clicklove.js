var a_idx = 0;
jQuery(document).ready(function($) {
 $("body").click(function(e) {
 var a = new Array("真正重要的东西，就算失去自己珍贵的生命，也要用双手保护到底", "呐，你知道吗？听说樱花飘落的速度是秒速五厘米哦", "Why so serious?", "只要活着，不管多痛苦，都会有好事发生", "我的手里拿着刀，就无法抱着你。 我把刀放下，就无法保护你", "我做不到的由你来，你做不到的由我来！", "一个人不管有多么天才,也无法改变世界" ,"出生是死亡的开始，死是现实的延续，生是梦的结束", "我觉得，人活着一定是没意义的，但是，活下去的话说不定能找到有趣的事，如你见到那花，如我见到你", "我是要成为海贼王的男人", "Victory won’t e to me unless I go to it", "因为喜欢，所以才想让艾玛露出笑容");
 var $i = $("<span/>").text(a[a_idx]);
 a_idx = (a_idx + 1) % a.length;
 var x = e.pageX,
 y = e.pageY;
 $i.css({
 "z-index": 999,
 "top": y - 20,
 "left": x,
 "position": "absolute",
 "font-weight": "bold",
 "color": "#ff6651"
 });
 $("body").append($i);
 $i.animate({
 "top": y - 180,
 "opacity": 0
 },
 1500,
 function() {
 $i.remove();
 });
 });
});
