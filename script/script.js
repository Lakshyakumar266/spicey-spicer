console.log('Welcome');

const hedeviewer = document.getElementById('calog-view')
const clog = document.getElementById('clog')

function Heder_shower() {
    clog.addEventListener('mouseover', () => {
        hedeviewer.classList.remove('hide');
    })
    clog.addEventListener('mouseout', () => {
        hedeviewer.classList.add('hide');
    })

    hedeviewer.addEventListener('mouseover', function () {
        hedeviewer.classList.remove('hide');
    })

    hedeviewer.addEventListener('mouseout', function () {
        hedeviewer.classList.add('hide');
    })
}
let navbar = new Heder_shower();