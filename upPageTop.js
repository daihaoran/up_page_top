    var sdelay=0;

    var iTime;

    

    function returnTop() {

          window.scrollBy(0,-100);

          if(document.body.scrollTop>0) { 

                sdelay= setTimeout('returnTop()',50);

           }

      }

$(document).ready(function(){

   $("body").append("<a href='javascript:returnTop();' class='up-img'></a>");

   $(".up-img").css({

                  "position":"fixed",

                  "right":"6px",

                   "bottom":"20px",

                   "width":"60px",

                   "height":"60px",

                   "z-index":"1000000000",

                   "background-image":"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAABHNCSVQICAgIfAhkiAAACu9JREFU aIHVm1usXFd5x39rrX2dOWfOOT4XH5ODMdgmtUm52IBbKG2BQkK4SNCHVlFbiUbQqg+VG2hF1SIu Eg9t1fLQlvBQUpdAK6VAUBC3JJYJDgmyRW4UUiV2jolvJzPnMvfZt7VWH/bMMAcTkMreTljS1uy5 7v9v/b/v22ut2Rueg2atDZ+L4wLI5+Kgd/39bzjPxXHhKgNba6W1VtJ78gP3f/YPX301jz1qVw3Y WiuHx3NqYfaR7uqXvjbqAGutuFo6rgrwENYBvAf/cenzO5Z2MV0Ri8f/6eDfDDWo4WdKb6X37BBE AcGjty7cE84sHdFRg7i7Tmbn6JprPv3bf/H9o0AmhNBl6ym1V4ehqgDvB/915G9nFuePVKoCT61T rYLvbDGtLv3p6f/8vSOAvBoul10tJaCazUfcmXD9r7zABTFAVkGnICXQ2ySqf/M+oAKYkvWU5/Bk kWp99de2gorAq0hcuYo/BUEIfghhCL7qcf8nRJ+r4HLZISSeOuZtVHcs44UKNxC4HrguOD54Lvge eE7G1MwOTny88lTJesoFfure915bnVvyXE+iXIFSGscFxwGlQMl88xxQepPqlLty5uv/7JapqVRg deHYY44jkJ5ASYlMziCGB1Uiz2FHgqNyaN9xuHj6zwdlaioN+InPXvsJv/YCHFfiOBLlgLAaaUFZ UCYv38Lmj0qCyDYJq7Piwdt+93fK0lUasJc98SHHA+kIpJAIIZAMKzMgBUibO6wkuCOXXUn09Bfv KUtXKcCve9eH3n+q+WYcJZBKIJx8fCMFSJPnr5A/zmMpc5elBNItjl/6dV60/zcPlKGtlJHW7bff blNC7jy5TmVqGj+oIkwPodcRpAgTo5OIOEqIBgmNtqTVB6EjkiTmj9/9clyZ2VtuuaVwQwofeKyu rganT59msTbFB25awPd9XNcljmOEeDHWWrTWZFlGlmUkSUKSJMRxTJZlpGmKMYZut1uKGYX34MmT Jx/xfR8p87wVQiClfNbno32lFEIIrLUYYwiCgFtvvfXDResrHFgIca1SagwxAnk28NH+5HdGz3u9 3seL1ld4SDuOMxY+6aIQeYRevHiR5tYW7Xabvfv24fs+SimyLLuiE6QsvqYW+ou33XbbHwRBMBY6 Eg6wtbXF+vo6SimmazX27ttHFEWcPXMG4IoOAvA8j6NHj+4pUmOhDiul/v2nOau1ptFoEIYhd933 LV60dy9RFEGvz8v37+fihQvsXF4G8k4yxmCtxXEclpaW/hV4e1Eai44ZZzInR21rc5OF+Xnu++EP 2HvwIJWZGjPzO5BzM9z1wHdYWFhgdXV1HBGO42CtRQiB53k3FimwUODJ/JvcKtUqn/7vO1CeR5wm DPoDojjGWMvc0iIzs7McOnToiu8973N40t1J4a1WCxkENNtt1je3aGxu0NjYZKPZpN3rc//DD1Gt Vrfl/E8+FtUKy+ETJ044a2tr43PpSLwxhlqtRpZl9AcD4jhGSoGxFmMsOstYrNXotNtjuMmqXjRw YQ6fPXu2NgpBa+34dSEE640G73jNa0mjiCSOiQYRSRSTxTHJYMDC7Bw/fPzx8ecnv1t0K8zhIAgq xhi01tsKlpSSZ+p1lJQ47Q4910EMOyZLEm566/VsbGwwOzt7xW+maQqAtdYTQiRF6CwMWEoZXewa nqy3+P1X1La9d/DgQU6dOsUbX/96fM/jBSsrKCk5d+4cza0t0jRlZWWFNE3H0ZFZ+I9LFd4WtigK FgoM6bvvvrv7hekbOB7toWUVduI913U5fPgwnucxiCIa9Tpra2s0m00qlQoHDhxASjmGNdZSFz6P xUt8Y+e7i5IIFOjwsWPH4pU3/ANdW2MzbbLgb8/nMAy57rrr6Pf7dDodAJaXl8fDyonwRSPoaEmq Qh5vFzv6Lczha/7uxDXWWhCQWUHLOhhrt31GKcX09DTLy8ssLi4ShuG4qo86xgItGTDQBqkUQim4 6VNzReksDHhhbuVpAIukG6dEbAcZtW1ww/1tG4KBcOjHKcrxUI7DnkOvva8onYUBv/XALmGtBakY RAOEV8H6lfH8dtQmYUdjZmC8H3khqXIYDPo4noejFG9+2e5fLUpnYQlysj6EkZLNZpvIWBLpMF/x sdaOBxMj0NGKx2A4GBmdyiLtEBu4EFdQU8Opoz9dlMziHK739DAsBd9vBTR7A7pJRmYM5lk2rfU4 lI0xaAsDDZHWtEyAcnPgRzYM3HGH+vkqfn4rxuE/+eInLaMchHqkEI5LgiTODMpk9Hq9cWiPHJ5c 28qyjNgKEuEQS0UThfJclFIkVnFj+uqVr8GPflGpxQAv7/mzyWK0mSoSK4gyjdXg+d62iYHWGq31 ePEuiqLcbZ0SG4+eho47T6jc8bLQ8XPpcWDfLyq1GGBrPWvzU4oFYuGz3KsznykGOgAdYoxBKbUt hydXLKMoQscx1yRNvASUs4jjOMOVEEEszN4ipBYCLJQyYOUO8fSnXnHqk39Um5mZ+u49Uxw+fJjd u3fT6XTo9/tjh0c5nKbpOJzTNCVNEs6vrnL+/AWObNyJkvEDj9/4L225vP8GKURSxJ/HhU5HrEV+ 6XOHd95173WXpqenqVarBEFAEAQYYwjD3OkkScbQoyHl2toavV6PKIpwXZfz589z4sS3PEALUdwf 5YWvWr7n+u91jj+4/zNx7N3suu54MaDRaGyb7k2G9mSI5wv2guuv1+8jP4sUet1H0Q4rICRmqd3z X/rXH77565VKBc/zuHz58hXAWuux0xPjafv5z3zlDaGXnaVKE0iKdLhoYIcceCeal2J4Dd/m5nua r3rhv315H/wE8MhlYw1HbzjNbx26eC8HuRPBo1ieos4We4oFLvuiFgHwllc9zJve+DAbD8H/fhCy zfzfw/l3wrV/CX4NeAKGc8of98qe4gWVAZyfnfIpscFgSIAURA9qWU5kAX8AYvgeGaDQjLAtlnMU Dl00sKEBTGPQaAQZipgYRApuArMOSAVWgSOGwDEQY3CIydEzwLIH+7MO9v9pxTu8iCFCo0ixxLj0 6GOpIlxgehpEBLggqyBTYEAOHNDDDv22GPhlAM7DOEMQY4kIabIJYgo8BXKZPIQDEPO583SBmJSQ NpIBhhQzDu9CocsCTpHESPrUaHAeLbo4ygH5QrAaRAWYn8hhQ5eAJpYBLglJDizE8xhY5OvrFoPG Y4CmwxxrpPRpUZMC2EV+gWEFmAIioAOE1AnYxNLDEDFHRgmXIpZxUYulRophgKRNlToel2mSl6IZ cuglwAd6QJuMOX6EYgtJF0NMwSOsUSsD2HCBDEOEoY3DMyxwhh4xXfKYmiZ3OAU2AUuTXZxBsIGm Q0YM5RSt4oE/BqygyYhRtFDU2c3/oHhm7J0l968L9EmY4UkWOYtgA4cuNRLyScPzH1h8FANoasRo ugjqLPIEO3mIjCYRmgRLhCUiQXGJl/BdfM6j2SSjT+594bBQ3pV4ljNkpPSQbBBwjl/hJDUexVAn oUNKC8EFdvEdXszDwCUULQYMYGLEVXArZSw9rNYZMKBLC/DYw6O0MDzGM7TYhSJlJ2d4JQ9Q4SyS BhEdWqQsYsoIZyjxngdrkXwPxW58KlQxzAI7uMxOLrGAS8pLWGOGBpItUtq06LNCIkQ5FRpKvsnD WkY3ePh0CHAIkQQIXBIsLgmaAQl9BiTsKq9YjdpVuKuF8a0ArOPi4iCHtSMjGw4w8rHWxzDDolda +z+FWWUmry1YxgAAAABJRU5ErkJggg== ')",

                   "background-size":"100% 100%",

                   "display":"none"

    });

    

var tag = false;

$(window).scroll(function() {

       var t = document.documentElement.scrollTop||document.body.scrollTop;

      if(t>=200){

      

           if(!tag){

           $(".up-img").css({"display":"block"});

             tag = true;

           }else{

              $(".up-img").fadeIn("slow");

              

            clearTimeout(iTime);

            iTime = setTimeout(function(){

             $(".up-img").fadeOut("slow");

             },6000);/*返回顶端图标显示的时间*/

           }

    

       }else{

           $(".up-img").css({"display":"none"});

           tag = false;

       }

  });

});
