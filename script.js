var buttons = document.querySelectorAll('.button button')
var logo = document.querySelector('.logo')
var text = document.querySelector('.text')
var spans = document.querySelectorAll('.number span')
var screen = document.querySelector('.screen')
var numpad = document.querySelector('.numpad')
var del = document.querySelector('#del')
var reset = document.querySelector('#reset')
var result = document.querySelector('#result')
var numbers = document.querySelectorAll('.row #number')
buttons.forEach(button => {
    button.onclick = () => {
        buttons.forEach(button => {
            if (!button.classList.contains('hidden')){
                button.classList.add('hidden')
            }
        })
        button.classList.remove('hidden')  
        console.log(button.id) 
        switch(button.id){
            case '2':
                document.body.style.backgroundColor = 'hsl(0, 0%, 90%)'
                logo.style.color = 'black';
                text.style.color = 'black';
                spans.forEach(span => {
                    span.style.color = 'black'
                })
                screen.style.backgroundColor = 'hsl(0, 0%, 93%)'
                screen.style.color = 'black'
                numpad.style.backgroundColor = 'hsl(0, 5%, 81%)'
                del.style.backgroundColor = 'hsl(185, 42%, 37%)'
                del.style.color = 'white'
                del.style.boxShadow = '0 5px hsl(185, 42%, 37%)'
                reset.style.backgroundColor = 'hsl(185, 42%, 37%)'
                reset.style.color = 'white'
                reset.style.boxShadow = '0 5px hsl(185, 58%, 25%)'
                result.style.backgroundColor = 'hsl(25, 98%, 40%)'
                result.style.color = 'white'
                result.style.boxShadow = '0 5px hsl(6, 63%, 50%)'
                numbers.forEach(number => {
                    number.style.color = 'black'
                    number.style.backgroundColor = 'hsl(30, 25%, 89%)'
                    number.style.boxShadow = '0 5px hsl(28deg 16% 65%)'
                })
                break;
            case '3':
                document.body.style.backgroundColor = 'hsl(268, 75%, 9%)'
                logo.style.color = 'hsl(52, 100%, 62%)';
                text.style.color = 'hsl(52, 100%, 62%)';
                spans.forEach(span => {
                    span.style.color = 'hsl(52, 100%, 62%)'
                })
                screen.style.backgroundColor = 'hsl(268, 71%, 12%)'
                screen.style.color = 'hsl(52, 100%, 62%)'
                numpad.style.backgroundColor = 'hsl(268, 71%, 12%)'
                del.style.backgroundColor = 'hsl(281, 89%, 26%)'
                del.style.color = 'white'
                del.style.boxShadow = '0 5px hsl(285, 91%, 52%)'
                reset.style.backgroundColor = 'hsl(281, 89%, 26%)'
                reset.style.color = 'white'
                reset.style.boxShadow = '0 5px hsl(285, 91%, 52%)'
                result.style.backgroundColor = 'hsl(176, 100%, 44%)'
                result.style.color = 'black'
                result.style.boxShadow = '0 5px hsl(177, 92%, 70%)'
                numbers.forEach(number => {
                    number.style.color = 'hsl(52, 100%, 62%)'
                    number.style.backgroundColor = 'hsl(268, 47%, 21%)'
                    number.style.boxShadow = '0 5px hsl(290, 70%, 36%)'
                })
                break;
            default:
                document.body.style.backgroundColor = 'hsl(222, 26%, 31%)'
                logo.style.color = 'white';
                text.style.color = 'white';
                spans.forEach(span => {
                    span.style.color = 'white'
                })
                screen.style.backgroundColor = '#182034'
                screen.style.color = 'white'
                numpad.style.backgroundColor = 'hsl(223, 31%, 20%)'
                del.style.backgroundColor = 'hsl(225, 21%, 49%)'
                del.style.color = 'white'
                del.style.boxShadow = '0 5px hsl(225, 21%, 49%)'
                reset.style.backgroundColor = 'hsl(225, 21%, 49%)'
                reset.style.color = 'white'
                reset.style.boxShadow = '0 5px hsl(225, 21%, 49%)'
                result.style.backgroundColor = 'hsl(6, 63%, 50%)'
                result.style.color = 'white'
                result.style.boxShadow = '0 5px hsl(6, 63%, 50%)'
                numbers.forEach(number => {
                    number.style.color = 'hsl(221, 14%, 31%)'
                    number.style.backgroundColor = 'hsl(30, 25%, 89%)'
                    number.style.boxShadow = '0 5px hsl(28deg 16% 65%)'
                })
                break;
            }
    }
})

let onscreen = ''
numbers.forEach(number => {
    number.onclick = () => {
        onscreen += number.innerText
        screen.innerText = onscreen
    }
    
})
del.onclick = () => {
    onscreen = onscreen.slice(0,onscreen.length -1)
    screen.innerText = onscreen
}
reset.onclick = () => {
    onscreen = ''
    screen.innerText = `${onscreen}0`
}
result.onclick = () => {
    if (typeof eval(onscreen) === 'float') {
        screen.innerHTML = eval(onscreen).toFixed(1)
    } else if (eval(onscreen) === Infinity || isNaN(eval(onscreen))){
        screen.innerHTML = 'Math Error'
    }
    else {
        screen.innerHTML = eval(onscreen)
    }
    onscreen = ''
}