$('#test1').css(
  {
    'background-color':'red',
    'color':'white',
    'width':'50%'
  }
);
$('#test1').on('click',
function()
  {
    $('#test1').after($('<h1>确认点击</h1>'));
    $('#test1').hide(800).sideDown(800);
  }
)
