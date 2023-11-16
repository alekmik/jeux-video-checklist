const laserMax = 630;
let percent = 0;
const laser = document.querySelector('.laser');
const glow = document.querySelector('.laser-glow');
const percentDiv = document.querySelector('.percent');

const interval = setInterval(() => {
    if (percent >= 1) {
        clearInterval(interval);
    } else {
        percent += 0.001;
        const width = percent * laserMax;
        laser.style.width = width + 'px';
        percentDiv.textContent = (percent * 100).toFixed(0) + '%';
        if (percent >= 1) {
            document.querySelector('.laser-tip .laser-glow').classList.add('laser-glow-active');
        }
    }
}, 5);