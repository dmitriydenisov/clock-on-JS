setInterval (function clock(){       
    document.querySelector('.clock').innerHTML = getTimeNormalize(new Date())
  }, 1000)
  
  function getTimeNormalize (time) {
          const hour = time.getHours().toString().padStart(2, '0')
          const minute = time.getMinutes().toString().padStart(2, '0')
          const second = time.getSeconds().toString().padStart(2, '0')
  
          return hour + ' : '  + minute + ' : ' + second
      }