const first_question = document.getElementsByName('first_question')
const second_question = document.getElementsByName('second_question')
const third_question = document.getElementsByName('third_question')
const fourth_question = document.getElementsByName('fourth_question')
const fifth_question = document.getElementsByName('fifth_question')
const sixth_question = document.getElementsByName('sixth_question')
const seventh_question = document.getElementsByName('seventh_question')
const eighth_question = document.getElementsByName('eighth_question')
const ninth_question = document.getElementsByName('ninth_question')
const tenth_question = document.getElementsByName('tenth_question')

const btn_show_results = document.querySelector('input[type = submit]')

const area_result = document.querySelector('div.result')

function show_score(score) {
    area_result.classList.add('show_div')

    const paragraph = document.createElement('p')

    if (score === 1 || score === 0) {
        const text = document.createTextNode(`Você acertou ${score} pergunta`)

        paragraph.appendChild(text)

        area_result.appendChild(paragraph)
    } else {
        const text = document.createTextNode(`Você acertou ${score} perguntas`)

        paragraph.appendChild(text)

        area_result.appendChild(paragraph)
    }
}

btn_show_results.addEventListener('click', function show_results(event) {
    event.preventDefault()

    let score = 0

    if (first_question[0].checked) {
        score++
    } if (second_question[0].checked) {
        score++
    } if (third_question[2].checked) {
        score++
    } if (fourth_question[2].checked) {
        score++
    } if (fifth_question[0].checked) {
        score++
    } if (sixth_question[0].checked) {
        score++
    } if (seventh_question[2].checked) {
        score++
    } if (eighth_question[3].checked) {
        score++
    } if (ninth_question[3].checked) {
        score++
    } if (tenth_question[0].checked) {
        score++
    }

    show_score(score)
})