const keywords = ["break", "case", "catch", "class", "const", "continue", "debugger", "default",
  "delete", "do", "else", "enum", "export", "extends", "false", "finally", "for",
  "function", "if", "import", "in", "instanceof", "new", "null", "return", "super",
  "switch", "this", "throw", "true", "try", "typeof", "var", "void", "while", "with",
  "yield", "let", "static", "implements", "interface", "package", "private", "protected",
  "public", "await", "as", "from", "of"]
const constants = []
const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
const div = document.getElementById('write')
let spaces = 0

div.appendChild(document.createElement('label'))

document.addEventListener('keydown', e => {
    if (numbers.includes(e.key)) {
        div.children[div.children.length -1].textContent = div.children[div.children.length -1].textContent + e.key
        const number_array = div.children[div.children.length -1].textContent.split('')
        let number = true
        number_array.forEach(a => {
            if (numbers.includes(a)) {
                if (number) {
                    div.children[div.children.length -1].classList.add('number')
                }
            } else {
                div.children[div.children.length -1].classList.remove('number')
                number = false
            }
        })
    } else if (e.key === "'") {
        if (!div.children[div.children.length -1].textContent.includes("'")) {
            div.appendChild(document.createElement('label'))
            const string_element = document.createElement('label')
            string_element.textContent = "'"
            string_element.classList.add('string')
            div.appendChild(string_element)
        } else {
            div.children[div.children.length -1].textContent = div.children[div.children.length -1].textContent + e.key
            div.appendChild(document.createElement('label'))
            div.appendChild(document.createElement('label'))
        }
    }else if (e.key === '"') {
        if (!div.children[div.children.length -1].textContent.includes('"')) {
            div.appendChild(document.createElement('label'))
            const string_element = document.createElement('label')
            string_element.textContent = '"'
            string_element.classList.add('string')
            div.appendChild(string_element)
        } else {
            div.children[div.children.length -1].textContent = div.children[div.children.length -1].textContent + e.key
            div.appendChild(document.createElement('label'))
            div.appendChild(document.createElement('label'))
        }
    } else if (e.key === '.') {
        const dot = document.createElement('label')
        dot.textContent = '.'
        div.appendChild(dot)
        div.appendChild(document.createElement('label'))
    } else if (e.key.length <= 1 && e.key !== ' ') {
        if (spaces > 0) {
            let text_array = ''
            for (let i = 0; i < spaces; i++) {
                text_array = text_array.concat(' ')
            }
            div.children[div.children.length -1].textContent = div.children[div.children.length -1].textContent + text_array + e.key
            spaces = 0
        } else {
            div.children[div.children.length -1].textContent = div.children[div.children.length -1].textContent + e.key
        }
        if (keywords.includes(div.children[div.children.length -1].textContent)) {
            div.children[div.children.length -1].classList.add('keyword')
        } else if (constants.includes(div.children[div.children.length -1].textContent)) {
            div.children[div.children.length -1].classList.add('const')
        } else if (div.children[div.children.length -1].textContent.includes("'") || div.children[div.children.length -1].textContent.includes('"')) {
            div.children[div.children.length -1].classList.add('string')
        }
        else {
            div.children[div.children.length -1].classList = []
        }
        try {
            if (div.children[div.children.length -3].textContent === 'const') {
                div.children[div.children.length -1].classList.add('const')
            }
        } catch(err) {
            console.error(err)
        }
    }
    else if (e.key === 'Backspace') {
        if (div.children[div.children.length -1].textContent.length >= 1) {
            const text_array = div.children[div.children.length -1].textContent.split('')
            text_array.splice(text_array.length -1, 1)
            let text_array_string = ''
            text_array.forEach(element => {
                text_array_string = text_array_string.concat(element)
            })
            div.children[div.children.length -1].textContent = text_array_string
            if (!keywords.includes(div.children[div.children.length -1].textContent)) {
                div.children[div.children.length -1].classList.remove('keyword')
            }
            if (!constants.includes(div.children[div.children.length -1].textContent)) {
                div.children[div.children.length -1].classList.remove('const')
            }
            if (keywords.includes(div.children[div.children.length -1].textContent)) {
                div.children[div.children.length -1].classList.add('keyword')
            }
            if (constants.includes(div.children[div.children.length -1].textContent)) {
                div.children[div.children.length -1].classList.add('const')
            }
            const number_array = div.children[div.children.length -1].textContent.split('')
            number_array.forEach(a => {
                if (numbers.includes(a)) {
                    div.children[div.children.length -1].classList.add('number')
                } else {
                    div.children[div.children.length -1].classList.remove('number')
                }
            })
        } else {
           if (div.children.length > 1) {
                div.children[div.children.length -1].remove()
                div.children[div.children.length -1].remove()
           }
        }
    }
    else if (e.key === ' ') {
        if (!div.children[div.children.length -1].textContent.includes('"') && !div.children[div.children.length -1].textContent.includes("'")) {
            if (div.children[div.children.length -1].textContent.trim().length > 0) {
                const space_label = document.createElement('label')
                space_label.textContent = ' '
                div.appendChild(space_label)
                div.appendChild(document.createElement('label'))
            } else {
                spaces++
            }
            if (div.children[div.children.length -5].textContent === 'const') {
                constants.push(div.children[div.children.length -3].textContent)
            }
        } else {
            div.children[div.children.length -1].textContent = div.children[div.children.length -1].textContent + ' '
        }
    } else if (e.key === 'Enter') {
        div.appendChild(document.createElement('br'))
        div.appendChild(document.createElement('label'))
        if (div.children[div.children.length -5].textContent === 'const') {
            constants.push(div.children[div.children.length -3].textContent)
        }
    }
})