class Tooltip {
	constructor(element) {
		this.element = element,
		this.message = element.dataset.message
	}
	init() {
		const tooltip = document.createElement('div');
		tooltip.setAttribute('class', 'tip')
		tooltip.textContent = this.message;

		this.element.append(tooltip);

		this.element.addEventListener('mouseenter', () => {
			tooltip.classList.add('active');
		})

		this.element.addEventListener('mouseleave', () => {
			tooltip.classList.remove('active');
		})
	}
}

export { Tooltip as default }