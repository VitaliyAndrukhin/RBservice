let windows = document.getElementsByClassName('price-content')

function blockNone() {
  for (let i = 0; i<windows.length; i++) {
    windows[i].style.display = 'none'
  }
  window.scrollTo(0, 0)
}

function clear() {
  for (let i = 0; i<windows.length; i++) {
    windows[i].style.opacity = '0'
  }
}

clear()
blockNone()


//Скрипты окон

document.getElementById("bs1").onclick = function() {
  if (document.getElementById('s1').style.display === 'none') {
    clear()  
    setTimeout(blockNone, 1000)
    setTimeout(() => document.getElementById('s1').style.display = 'flex', 1001)
    setTimeout(() => document.getElementById('s1').style.opacity = '1', 1200)
    }
}

document.getElementById("bs2").onclick = function() {
  if (document.getElementById('s2').style.display === 'none') {
    clear()  
    setTimeout(blockNone, 1000)
    setTimeout(() => document.getElementById('s2').style.display = 'flex', 1001)
    setTimeout(() => document.getElementById('s2').style.opacity = '1', 1200)
    }
}

document.getElementById("bs3").onclick = function() {
  if (document.getElementById('s3').style.display === 'none') {
    clear()  
    setTimeout(blockNone, 1000)
    setTimeout(() => document.getElementById('s3').style.display = 'flex', 1001)
    setTimeout(() => document.getElementById('s3').style.opacity = '1', 1200)
    }
}

document.getElementById("bs4").onclick = function() {
  if (document.getElementById('s4').style.display === 'none') {
    clear()  
    setTimeout(blockNone, 1000)
    setTimeout(() => document.getElementById('s4').style.display = 'flex', 1001)
    setTimeout(() => document.getElementById('s4').style.opacity = '1', 1200)
    }
}

document.getElementById("bs5").onclick = function() {
  if (document.getElementById('s5').style.display === 'none') {
    clear()  
    setTimeout(blockNone, 1000)
    setTimeout(() => document.getElementById('s5').style.display = 'flex', 1001)
    setTimeout(() => document.getElementById('s5').style.opacity = '1', 1200)
    }
}

document.getElementById("bs6").onclick = function() {
  if (document.getElementById('s6').style.display === 'none') {
    clear()  
    setTimeout(blockNone, 1000)
    setTimeout(() => document.getElementById('s6').style.display = 'flex', 1001)
    setTimeout(() => document.getElementById('s6').style.opacity = '1', 1200)
    }
}