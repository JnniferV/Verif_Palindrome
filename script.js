const checkBtn = document.getElementById('check-btn')
const textInput = document.getElementById('text-input')
const result = document.getElementById('result')

const palindrome = (input) => {
  const smallLetters = input.replace(/[^A-Za-z0-9]/gi, '').toLowerCase()
  const reverseLetters = [...smallLetters].reverse().join('')

  return smallLetters === reverseLetters
}

checkBtn.addEventListener('click', () => {
  if (textInput.value === '') {
    alert('SVP entrez une valeur')
    return
  }

  if (palindrome(textInput.value) == true) {
    result.innerHTML = `${textInput.value} est un palindrome`
  } else {
    result.innerHTML = `${textInput.value} n'est pas un palindrome`
  }
})
