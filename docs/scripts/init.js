import * as mockroblog from './mockroblog.js'
window.mockroblog = mockroblog

const timeline = mockroblog.getUserTimeline('ProfAvery')

const display = document.querySelector('#yourTimeline-json')
display.textContent = JSON.stringify(timeline, null, 2)
