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

const paragraph = document.querySelector('p')

function show_score(score) {
    area_result.classList.add('show_div')
    paragraph.classList.add('center_paragraph')

    switch (score) {
        case 1:
            paragraph.innerHTML = `Você acertou ${score} pergunta.`
            break
        case 0:
            paragraph.innerHTML = `Você acertou nenhuma pergunta.`
            break
        case 10:
            paragraph.innerHTML =  `Você acertou todas as perguntas.` 
            break
        default:
            paragraph.innerHTML =  `Você acertou ${score} perguntas.`
    }
}

btn_show_results.addEventListener('click', function verify_questions(event) {
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