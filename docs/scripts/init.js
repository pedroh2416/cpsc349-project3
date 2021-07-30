import * as mockroblog from './mockroblog.js'
window.mockroblog = mockroblog

// login get and set functions to save session user
//setter
const setUser = function () {
  sessionStorage.setItem('saveUser', JSON.stringify(document.getElementById('loginUsername').value))
}
//getter
const getUser = function () {
  const saved = sessionStorage.getItem('saveUser')
  if (saved) {
    return JSON.parse(saved)
  }
  return {}
}

// login button
if (document.getElementById('login') != null) {
  const loginBtn = document.getElementById('login')
  loginBtn.addEventListener('click', function () {
    console.log(document.getElementById('loginUsername').value)
    if (!document.getElementById('loginUsername').value || !document.getElementById('loginPassword').value) {
      alert('Failed Login. Make sure to fill out all fields')
      return
    }

    if (mockroblog.authenticateUser(document.getElementById('loginUsername').value, document.getElementById('loginPassword').value) != null) {
      // save user logged in
      setUser()
      window.location.href = window.location.href + 'hometimeline.html'
    } else {
      // display unsuccesful message
      alert('Failed Login')
    }
  })
}
// register site
if (document.getElementById('register') != null) {
  const registerBtn = document.getElementById('register')
  registerBtn.addEventListener('click', function () {
    if (!document.getElementById('registerUsername').value || !document.getElementById('registerEmail').value || !document.getElementById('registerPassword').value) {
      alert('Failed Register. Make sure to fill out all fields')
      return
    }

    if (mockroblog.createUser(document.getElementById('registerUsername').value, document.getElementById('registerEmail').value, document.getElementById('registerPassword').value) != null) {
      window.location = window.location.toString().replace('register.html', 'hometimeline.html')
    } else {
      // display unsuccesful message
      alert('Failed Register')
    }
  })
}

// user timeline
if (document.querySelector('#yourTimeline-json') != null) {
  const timeline = mockroblog.getUserTimeline(getUser())

  const display = document.querySelector('#yourTimeline-json')

  display.textContent = JSON.stringify(timeline, null, 2)
}

// home timeline
if (document.querySelector('#homeTimeline-json') != null) {
  const timeline = mockroblog.getHomeTimeline(getUser())

  const display = document.querySelector('#homeTimeline-json')

  display.textContent = JSON.stringify(timeline, null, 2)
}
/*
timeline.forEach(timelinePost => {
  display.innerHTML += (
    <div class=''>
      <div class=''>
        ${timelinePost.id}
      </div>
      <div class=''>
        ${timelinePost.text}
      </div>
      <div class=''>
        ${timelinePost.timestamp}
      </div>
    </div>
  )
})
*/
// public timeline
if (document.querySelector('#publicTimeline-json') != null) {
  const timeline = mockroblog.getPublicTimeline()

  const display = document.querySelector('#publicTimeline-json')

  display.textContent = JSON.stringify(timeline, null, 2)
}
