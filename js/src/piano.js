$('ul.piano').hide();
$('h1.piano_start').on('click',
  function()
  {
    $(this).fadeOut(700);
    $('ul.piano').show(700).fadeIn(700);
  }
);
$('#pone').on('click',
  function()
  {
    if($('#sound1')[0].currentTime==0)
    $('#sound1')[0].play();
    else
    {
      $('#sound1')[0].load();
      $('#sound1')[0].play();
    }
    var color=$(this).css('background-color');
    $(this).animate(
      {
        opacity: '0.2',
        backgroundColor: 'white'
      },300,
      function()
      {
        $(this).animate(
          {
            opacity: '1',
            backgroundColor: color
          },300
        )
      }
    )
  }
);
$('#ptwo').on('click',
  function()
  {
    if($('#sound2')[0].currentTime==0)
    $('#sound2')[0].play();
    else
    {
      $('#sound2')[0].load();
      $('#sound2')[0].play();
    }
    var color=$(this).css('background-color');
    $(this).animate(
      {
        opacity: '0.2',
        backgroundColor: 'white'
      },300,
      function()
      {
        $(this).animate(
          {
            opacity: '1',
            backgroundColor: color
          },300
        )
      }
    )
  }
);
$('#pthree').on('click',
  function()
  {
    if($('#sound3')[0].currentTime==0)
    $('#sound3')[0].play();
    else
    {
      $('#sound3')[0].load();
      $('#sound3')[0].play();
    }
    var color=$(this).css('background-color');
    $(this).animate(
      {
        opacity: '0.2',
        backgroundColor: 'white'
      },300,
      function()
      {
        $(this).animate(
          {
            opacity: '1',
            backgroundColor: color
          },300
        )
      }
    )
  }
);
$('#pfour').on('click',
  function()
  {
    if($('#sound4')[0].currentTime==0)
    $('#sound4')[0].play();
    else
    {
      $('#sound4')[0].load();
      $('#sound4')[0].play();
    }
    var color=$(this).css('background-color');
    $(this).animate(
      {
        opacity: '0.2',
        backgroundColor: 'white'
      },300,
      function()
      {
        $(this).animate(
          {
            opacity: '1',
            backgroundColor: color
          },300
        )
      }
    )
  }
);
$('#pfive').on('click',
  function()
  {
    if($('#sound5')[0].currentTime==0)
    $('#sound5')[0].play();
    else
    {
      $('#sound5')[0].load();
      $('#sound5')[0].play();
    }
    var color=$(this).css('background-color');
    $(this).animate(
      {
        opacity: '0.2',
        backgroundColor: 'white'
      },300,
      function()
      {
        $(this).animate(
          {
            opacity: '1',
            backgroundColor: color
          },300
        )
      }
    )
  }
);
$('#psix').on('click',
  function()
  {
    if($('#sound6')[0].currentTime==0)
    $('#sound6')[0].play();
    else
    {
      $('#sound6')[0].load();
      $('#sound6')[0].play();
    }
    var color=$(this).css('background-color');
    $(this).animate(
      {
        opacity: '0.2',
        backgroundColor: 'white'
      },300,
      function()
      {
        $(this).animate(
          {
            opacity: '1',
            backgroundColor: color
          },300
        )
      }
    )
  }
);
$('#pseven').on('click',
  function()
  {
    if($('#sound7')[0].currentTime==0)
    $('#sound7')[0].play();
    else
    {
      $('#sound7')[0].load();
      $('#sound7')[0].play();
    }
    var color=$(this).css('background-color');
    $(this).animate(
      {
        opacity: '0.2',
        backgroundColor: 'white'
      },300,
      function()
      {
        $(this).animate(
          {
            opacity: '1',
            backgroundColor: color
          },300
        )
      }
    )
  }
);
$('body').on('keydown',
  function(e)
  {
    if(e.which==49||e.which==97)
    {
    if($('#sound1')[0].currentTime==0)
    $('#sound1')[0].play();
    else
    {
      $('#sound1')[0].load();
      $('#sound1')[0].play();
    }
    var color=$('#pone').css('background-color');
    $('#pone').animate(
      {
        opacity: '0.2',
        backgroundColor: 'white'
      },300,
      function()
      {
        $('#pone').animate(
          {
            opacity: '1',
            backgroundColor: color
          },300
        )
      }
    )
  }
}
);
$('body').on('keydown',
  function(e)
  {
    if(e.which==50||e.which==98)
    {
    if($('#sound2')[0].currentTime==0)
    $('#sound2')[0].play();
    else
    {
      $('#sound2')[0].load();
      $('#sound2')[0].play();
    }
    var color=$('#ptwo').css('background-color');
    $('#ptwo').animate(
      {
        opacity: '0.2',
        backgroundColor: 'white'
      },300,
      function()
      {
        $('#ptwo').animate(
          {
            opacity: '1',
            backgroundColor: color
          },300
        )
      }
    )
  }
}
);
$('body').on('keydown',
  function(e)
  {
    if(e.which==51||e.which==99)
    {
    if($('#sound3')[0].currentTime==0)
    $('#sound3')[0].play();
    else
    {
      $('#sound3')[0].load();
      $('#sound3')[0].play();
    }
    var color=$('#pthree').css('background-color');
    $('#pthree').animate(
      {
        opacity: '0.2',
        backgroundColor: 'white'
      },300,
      function()
      {
        $('#pthree').animate(
          {
            opacity: '1',
            backgroundColor: color
          },300
        )
      }
    )
  }
}
);
$('body').on('keydown',
  function(e)
  {
    if(e.which==52||e.which==100)
    {
    if($('#sound4')[0].currentTime==0)
    $('#sound4')[0].play();
    else
    {
      $('#sound4')[0].load();
      $('#sound4')[0].play();
    }
    var color=$('#pfour').css('background-color');
    $('#pfour').animate(
      {
        opacity: '0.2',
        backgroundColor: 'white'
      },300,
      function()
      {
        $('#pfour').animate(
          {
            opacity: '1',
            backgroundColor: color
          },300
        )
      }
    )
  }
}
);
$('body').on('keydown',
  function(e)
  {
    if(e.which==53||e.which==101)
    {
    if($('#sound5')[0].currentTime==0)
    $('#sound5')[0].play();
    else
    {
      $('#sound5')[0].load();
      $('#sound5')[0].play();
    }
    var color=$('#pfive').css('background-color');
    $('#pfive').animate(
      {
        opacity: '0.2',
        backgroundColor: 'white'
      },300,
      function()
      {
        $('#pfive').animate(
          {
            opacity: '1',
            backgroundColor: color
          },300
        )
      }
    )
  }
}
);
$('body').on('keydown',
  function(e)
  {
    if(e.which==54||e.which==102)
    {
    if($('#sound6')[0].currentTime==0)
    $('#sound6')[0].play();
    else
    {
      $('#sound6')[0].load();
      $('#sound6')[0].play();
    }
    var color=$('#psix').css('background-color');
    $('#psix').animate(
      {
        opacity: '0.2',
        backgroundColor: 'white'
      },300,
      function()
      {
        $('#psix').animate(
          {
            opacity: '1',
            backgroundColor: color
          },300
        )
      }
    )
  }
}
);
$('body').on('keydown',
  function(e)
  {
    if(e.which==55||e.which==103)
    {
    if($('#sound7')[0].currentTime==0)
    $('#sound7')[0].play();
    else
    {
      $('#sound7')[0].load();
      $('#sound7')[0].play();
    }
    var color=$('#pseven').css('background-color');
    $('#pseven').animate(
      {
        opacity: '0.2',
        backgroundColor: 'white'
      },300,
      function()
      {
        $('#pseven').animate(
          {
            opacity: '1',
            backgroundColor: color
          },300
        )
      }
    )
  }
}
);
