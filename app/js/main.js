function handleButtonClick(event) {
	const desc_btn = event.target.closest('.page__your_questions-item-btn')
	desc_btn.classList.toggle('show')

	const questionItem = event.target.closest('.page__your_questions-item')
	const descriptionParagraph = questionItem.querySelector('.page__your_questions-item-description')

	descriptionParagraph.classList.toggle('show_desc')
	descriptionParagraph.querySelector('p').classList.toggle('show_desc_delay')
}

const questionList = document.querySelectorAll('.page__your_questions-item')

questionList.forEach(item => {
	item
		.querySelector('.page__your_questions-item-btn')
		.addEventListener('click', handleButtonClick)
})
