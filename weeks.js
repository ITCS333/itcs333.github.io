function populateWeeksData(weeks_data) {
	let weeks = document.getElementById('weeks');

	weeks_data.forEach(week => {
		let week_details = document.createElement('details');
		let week_summary = document.createElement('summary');

		week_summary.textContent = week.title;
		week_summary.role = 'button';
		week_summary.classList.add('secondary');
		week_details.appendChild(week_summary);
		week.contents.forEach(content => {
			let content_paragraph = document.createElement('p');
			let content_title = document.createElement('strong');
			let content_link = document.createElement('a');

			content_title.textContent = content.title + ": ";
			content_link.textContent = content.content;
			content_link.href = content.url;

			content_paragraph.appendChild(content_title);
			content_paragraph.appendChild(content_link);
			week_details.appendChild(content_paragraph);
		});

		weeks.appendChild(week_details);
	});
}

async function loadWeeksData() {
	try {
		const response = await fetch('weeks.json');
		const weeks_data = await response.json();
		populateWeeksData(weeks_data);
	} catch (error) {
		console.error('Error loading JSON:', error);
	}
}

loadWeeksData();

