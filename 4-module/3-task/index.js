function highlight(table) {
  for (let i = 1; i < table.rows.length; i++) {
    let row = table.rows[i];
    let statusCell = row.cells[3];
    if (statusCell.hasAttribute('data-available')) {
      if (statusCell.getAttribute('data-available') === 'true') {
        row.classList.add('available');
      } else {
        row.classList.add('unavailable');
      }
    } else {
      row.hidden = true;
    }
    let genderCell = row.cells[2];
    if (genderCell.textContent === 'm') {
      row.classList.add('male');
    } else if (genderCell.textContent === 'f') {
      row.classList.add('female');
    }
    let ageCell = row.cells[1];
    if (parseInt(ageCell.textContent) < 18) {
      row.style.textDecoration = 'line-through';
    }
  }
}
