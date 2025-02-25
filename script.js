const keywords = ["break", "case", "catch", "class", "const", "continue", "debugger", "default",
  "delete", "do", "else", "enum", "export", "extends", "false", "finally", "for",
  "function", "if", "import", "in", "instanceof", "new", "null", "return", "super",
  "switch", "this", "throw", "true", "try", "typeof", "var", "void", "while", "with",
  "yield", "let", "static", "implements", "interface", "package", "private", "protected",
  "public", "await", "as", "from", "of"]
const constants = [
    "Object",
    "Array",
    "Function",
    "String",
    "Number",
    "Boolean",
    "Symbol",
    "BigInt",
    "Map",
    "Set",
    "WeakMap",
    "WeakSet",
    "Date",
    "RegExp",
    "Error",
    "EvalError",
    "RangeError",
    "ReferenceError",
    "SyntaxError",
    "TypeError",
    "URIError",
    "Promise",
    "Proxy",
    "Reflect",
    "JSON",
    "Math",
    "Intl",
    "console",
    "document",
    "window",
    "localStorage",
    "sessionStorage",
    "navigator",
    "history",
    "location",
    "fetch",
    "XMLHttpRequest",
    "WebSocket",
    "Event",
    "CustomEvent",
    "MouseEvent",
    "KeyboardEvent",
    "File",
    "Blob",
    "FormData",
    "Headers",
    "Request",
    "Response",
    "performance",
    "Worker",
    "URL",
    "URLSearchParams"]
const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
const special_characters = ["(", ")", "{", "}", "[", "]", "<", ">", "()", "{}", "[]", "<>", "=>"]
const div = document.getElementById('write')
let spaces = 0

div.appendChild(document.createElement('label'))

document.addEventListener('keydown', e => {
    if (e.key === ',') {
        const character = document.createElement('label')
        character.textContent = e.key
        div.appendChild(document.createElement('label'))
        div.appendChild(character)
        div.appendChild(document.createElement('label'))
        div.appendChild(document.createElement('label'))
    } else if (special_characters.includes(e.key)) {
        if (e.key === '(') {
            div.children[div.children.length -1].classList.add('function')
        }
        const character = document.createElement('label')
        character.textContent = e.key
        if (div.children[div.children.length -1].textContent !== '=' && div.children[div.children.length -1].textContent !== '-') {
            character.classList.add('special-character')
        }
        div.appendChild(document.createElement('label'))
        div.appendChild(character)
        div.appendChild(document.createElement('label'))
        div.appendChild(document.createElement('label'))
    } else if (numbers.includes(e.key)) {
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
    } else if (e.key === '.' && !div.children[div.children.length -1].textContent.split('').includes("'") && !div.children[div.children.length -1].textContent.split('').includes('"')) {
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
        } catch {}
        if (special_characters.includes(div.children[div.children.length -1].textContent)) {
            div.children[div.children.length -1].classList.add('special-character')
        }
    }
    else if (e.key === 'Backspace') {
        if (div.children[div.children.length -3] != null && special_characters.includes(div.children[div.children.length -3].textContent)) {
            console.log('He llegado!')
            if (div.children[div.children.length -3].textContent === '(') {
                div.children[div.children.length -5].classList.remove('function')
            }
            div.children[div.children.length -1].remove()
            div.children[div.children.length -2].remove()
        } else if (div.children[div.children.length -1].textContent.length >= 1 ) {
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
            try {
                if (div.children[div.children.length -3].textContent === 'const') {
                    div.children[div.children.length -1].classList.add('const')
                }
            } catch {}
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