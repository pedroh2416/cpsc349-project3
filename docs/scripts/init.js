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

  timeline.forEach(timelinePost => {
    display.innerHTML += (
      `<link rel="stylesheet" href="styles/tailwind.css">
      <div class="flex flex-wrap text-center">
            <div class="p-4 w-full">
              <div class="bg-blue-200 border-2 border-gray-200 px-2 py-2 rounded-lg">
                <p class="title-font font-medium text-2xl text-gray-900">${timelinePost.user_id}</p>
                <p class="text-justify m-2 w-64 title-font font-small text-gray-900">${timelinePost.text}</p>
                <p class="title-font font-medium text-gray-900">${timelinePost.timestamp}</p>
              </div>
            </div>
          </div>
        `
    )
  })
}

if (document.querySelector('#user1-json') != null) {
  const timeline = mockroblog.getUserTimeline(getUser())

  const display = document.querySelector('#user1-json')

  timeline.forEach(timelinePost => {
    display.innerHTML += (
      `<link rel="stylesheet" href="styles/tailwind.css">
      <div class="flex flex-wrap text-center">
            <div class="p-4 w-full">
              <div class="bg-blue-200 border-2 border-gray-200 px-2 py-2 rounded-lg">
                <p class="title-font font-medium text-2xl text-gray-900">${timelinePost.user_id}</p>
                <p class="text-justify m-2 w-64 title-font font-small text-gray-900">${timelinePost.text}</p>
                <p class="title-font font-medium text-gray-900">${timelinePost.timestamp}</p>
              </div>
            </div>
          </div>
        `
    )
  })
}

if (document.querySelector('#user2-json') != null) {
  const timeline = mockroblog.getUserTimeline(getUser())

  const display = document.querySelector('#user2-json')

  timeline.forEach(timelinePost => {
    display.innerHTML += (
      `<link rel="stylesheet" href="styles/tailwind.css">
      <div class="flex flex-wrap text-center">
            <div class="p-4 w-full">
              <div class="bg-blue-200 border-2 border-gray-200 px-2 py-2 rounded-lg">
                <p class="title-font font-medium text-2xl text-gray-900">${timelinePost.user_id}</p>
                <p class="text-justify m-2 w-64 title-font font-small text-gray-900">${timelinePost.text}</p>
                <p class="title-font font-medium text-gray-900">${timelinePost.timestamp}</p>
              </div>
            </div>
          </div>
        `
    )
  })
}

if (document.querySelector('#user3-json') != null) {
  const timeline = mockroblog.getUserTimeline(getUser())

  const display = document.querySelector('#user3-json')

  timeline.forEach(timelinePost => {
    display.innerHTML += (
      `<link rel="stylesheet" href="styles/tailwind.css">
      <div class="flex flex-wrap text-center">
            <div class="p-4 w-full">
              <div class="bg-blue-200 border-2 border-gray-200 px-2 py-2 rounded-lg">
                <p class="title-font font-medium text-2xl text-gray-900">${timelinePost.user_id}</p>
                <p class="text-justify m-2 w-64 title-font font-small text-gray-900">${timelinePost.text}</p>
                <p class="title-font font-medium text-gray-900">${timelinePost.timestamp}</p>
              </div>
            </div>
          </div>
        `
    )
  })
}
// home timeline
if (document.querySelector('#homeTimeline-json') != null) {
  const timeline = mockroblog.getHomeTimeline(getUser())

  const display = document.querySelector('#homeTimeline-json')

  timeline.forEach(timelinePost => {
    display.innerHTML += (
      `<link rel="stylesheet" href="styles/tailwind.css">
        <div class="flex flex-wrap text-center">
              <div class="p-4 w-full">
                <div class="bg-blue-200 border-2 border-gray-200 px-2 py-2 rounded-lg">
                <a href="${timelinePost.user_id}.html"><p class="title-font font-medium text-2xl text-gray-900">${timelinePost.user_id}</p></a>
                  <p class="text-justify m-2 w-64 title-font font-small text-gray-900">${timelinePost.text}</p>
                  <p class="title-font font-medium text-gray-900">${timelinePost.timestamp}</p>
                </div>
              </div>
            </div>
        `
    )
  })
}

// public timeline
if (document.querySelector('#publicTimeline-json') != null) {
  const timeline = mockroblog.getPublicTimeline()

  const display = document.querySelector('#publicTimeline-json')

  timeline.forEach(timelinePost => {
    display.innerHTML += (
      `<link rel="stylesheet" href="styles/tailwind.css">
        <div class="flex flex-wrap text-center">
              <div class="p-4 w-full">
                <div class="bg-blue-200 border-2 border-gray-200 px-2 py-2 rounded-lg">
                  <a href="${timelinePost.user_id}.html"><p class="title-font font-medium text-2xl text-gray-900">${timelinePost.user_id}</p></a>
                  <p class="text-justify m-2 w-64 title-font font-small text-gray-900">${timelinePost.text}</p>
                  <p class="title-font font-medium text-gray-900">${timelinePost.timestamp}</p>
                </div>
              </div>
            </div>
        `
    )
  })
}
