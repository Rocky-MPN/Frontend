const buttons = document.querySelectorAll('button');
for (let button of buttons) {
    button.addEventListener('click', () => {
        console.log('clicked')
    })
}




const makeRandomColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r}, ${g}, ${b})`
}
