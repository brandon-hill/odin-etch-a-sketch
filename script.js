const gridContainer = document.querySelector('.grid-container');
const changeGridBtn = document.querySelector('button');
const gridDimensions = document.querySelector('#grid-dimensions');

let size = 16;
let cellCount = 0;

function createGrid(size) {
	gridContainer.innerHTML = '';
	gridDimensions.textContent = `${size} x ${size} grid`;
	const grid = document.createElement('div');
	grid.style.cssText = `display: grid;grid-template-columns: repeat(${size}, 1fr);grid-template-rows: repeat(${size}, 1fr); height: 100%; width: 100%;`;
	gridContainer.appendChild(grid);
	for (let row = 0; row < size; row++) {
		for (let column = 0; column < size; column++) {
			let cell = document.createElement('div');
			cell.classList.add('cell');
			grid.appendChild(cell);
			cellCount++;
		}
	}
	let cells = document.querySelectorAll('.cell');
	cells.forEach((cell) => {
		cell.addEventListener('mouseover', (e) => {
			e.target.classList.add('drawn');
		});
	});
}

function getNewSize() {
	let newSize = +prompt(
		'Enter the number of pixels you want on each side of the grid\nMust be between 10 and 100',
		'16'
	);
	if (newSize && newSize >= 10 && newSize <= 100) {
		console.log(newSize);
		return newSize;
	} else {
		getNewSize();
	}
}

changeGridBtn.addEventListener('click', (e) => {
	let newSize = '';
	do {
		newSize = getNewSize();
	} while (!newSize);

	createGrid(newSize);
});

createGrid(size);
