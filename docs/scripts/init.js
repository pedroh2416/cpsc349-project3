import * as mockroblog from './mockroblog.js'
window.mockroblog = mockroblog

//login button
if(document.getElementById("login") != null) {
    let loginBtn = document.getElementById("login")
    loginBtn.addEventListener("click", function() {

        console.log(document.getElementById("loginUsername").value)
        if(!document.getElementById("loginUsername").value || !document.getElementById("loginPassword").value) {
            alert("Failed Login. Make sure to fill out all fields")
            return
        }

        if (mockroblog.authenticateUser(document.getElementById("loginUsername").value, document.getElementById("loginPassword").value) != null) {
            window.location.href = window.location.href + "yourtimeline.html"
        } else {
            //display unsuccesful message
            alert("Failed Login")
        }
    })
}

if(document.getElementById("register") != null) {
    let registerBtn = document.getElementById("register")
    registerBtn.addEventListener("click", function() {

        if(!document.getElementById("registerUsername").value || !document.getElementById("registerEmail").value || !document.getElementById("registerPassword").value) {
            alert("Failed Register. Make sure to fill out all fields")
            return
        }

        if (mockroblog.createUser(document.getElementById("registerUsername").value, document.getElementById("registerEmail").value, document.getElementById("registerPassword").value) != null) {
            window.location = window.location.toString().replace("register.html", "yourtimeline.html")
        } else {
            //display unsuccesful message
            alert("Failed Register")
        }
    })
}


// user timeline
if(document.querySelector('#yourTimeline-json') != null) {
    const timeline = mockroblog.getUserTimeline('ProfAvery')

    const display = document.querySelector('#yourTimeline-json')

    display.textContent = JSON.stringify(timeline, null, 2)
}

//home timeline
if(document.querySelector('#homeTimeline-json') != null) {
    const timeline = mockroblog.getHomeTimeline('ProfAvery')

    const display = document.querySelector('#homeTimeline-json')

    display.textContent = JSON.stringify(timeline, null, 2)
}

//public timeline
if(document.querySelector('#publicTimeline-json') != null) {
    const timeline = mockroblog.getPublicTimeline()

    const display = document.querySelector('#publicTimeline-json')

    display.textContent = JSON.stringify(timeline, null, 2)
}