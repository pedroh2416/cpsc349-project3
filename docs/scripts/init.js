import * as mockroblog from './mockroblog.js'
window.mockroblog = mockroblog

//user timeline
{
    if(document.querySelector('#yourTimeline-json') != null) {
        const timeline = mockroblog.getUserTimeline('ProfAvery')

        const display = document.querySelector('#yourTimeline-json')

        display.textContent = JSON.stringify(timeline, null, 2)
    }
}

//home timeline
{
    if(document.querySelector('#homeTimeline-json') != null) {
        const timeline = mockroblog.getHomeTimeline('ProfAvery')

        const display = document.querySelector('#homeTimeline-json')

        display.textContent = JSON.stringify(timeline, null, 2)
    }

}

//public timeline
{
    if(document.querySelector('#publicTimeline-json') != null) {
        const timeline = mockroblog.getPublicTimeline()

        const display = document.querySelector('#publicTimeline-json')

        display.textContent = JSON.stringify(timeline, null, 2)
    }

}

