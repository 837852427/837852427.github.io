$('#one').on('click',
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
)
$('#two').on('click',
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
)
$('#three').on('click',
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
)
$('#four').on('click',
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
)
$('#five').on('click',
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
)
$('#six').on('click',
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
)
$('#seven').on('click',
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
)
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
    var color=$('#one').css('background-color');
    $('#one').animate(
      {
        opacity: '0.2',
        backgroundColor: 'white'
      },300,
      function()
      {
        $('#one').animate(
          {
            opacity: '1',
            backgroundColor: color
          },300
        )
      }
    )
  }
}
)
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
    var color=$('#two').css('background-color');
    $('#two').animate(
      {
        opacity: '0.2',
        backgroundColor: 'white'
      },300,
      function()
      {
        $('#two').animate(
          {
            opacity: '1',
            backgroundColor: color
          },300
        )
      }
    )
  }
}
)
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
    var color=$('#three').css('background-color');
    $('#three').animate(
      {
        opacity: '0.2',
        backgroundColor: 'white'
      },300,
      function()
      {
        $('#three').animate(
          {
            opacity: '1',
            backgroundColor: color
          },300
        )
      }
    )
  }
}
)
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
    var color=$('#four').css('background-color');
    $('#four').animate(
      {
        opacity: '0.2',
        backgroundColor: 'white'
      },300,
      function()
      {
        $('#four').animate(
          {
            opacity: '1',
            backgroundColor: color
          },300
        )
      }
    )
  }
}
)
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
    var color=$('#five').css('background-color');
    $('#five').animate(
      {
        opacity: '0.2',
        backgroundColor: 'white'
      },300,
      function()
      {
        $('#five').animate(
          {
            opacity: '1',
            backgroundColor: color
          },300
        )
      }
    )
  }
}
)
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
    var color=$('#six').css('background-color');
    $('#six').animate(
      {
        opacity: '0.2',
        backgroundColor: 'white'
      },300,
      function()
      {
        $('#six').animate(
          {
            opacity: '1',
            backgroundColor: color
          },300
        )
      }
    )
  }
}
)
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
    var color=$('#seven').css('background-color');
    $('#seven').animate(
      {
        opacity: '0.2',
        backgroundColor: 'white'
      },300,
      function()
      {
        $('#seven').animate(
          {
            opacity: '1',
            backgroundColor: color
          },300
        )
      }
    )
  }
}
)
