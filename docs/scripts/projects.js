async function loadProjects() {
	const response = await fetch("./data/projects.json");

	if (!response.ok) {
		throw new Error("Failed to load projects.json");
	}

	return await response.json();
}

function createProjectCard(project) {
	const article = document.createElement("article");
	article.className = "card";

	const title = document.createElement("h4");
	title.textContent = project.title;

	const goal = document.createElement("p");
	goal.textContent = project.goal;

	const bulletsList = document.createElement("ul");
	bulletsList.className = "bulletList";
	project.bullets.forEach(bullet => {
		const li = document.createElement("li");
		li.textContent = bullet;
		bulletsList.appendChild(li);
	});

	article.appendChild(title);
	article.appendChild(goal);
	article.appendChild(bulletsList);

	if (project.links && project.links.length > 0) {
		const linksList = document.createElement('ul');
		linksList.className = "card-links-container";

		project.links.forEach(link => {
			const li = document.createElement('li');
			const a = document.createElement('a');
			a.className = "card-link";

			a.href = link.url;
			a.textContent = link.label;
			a.target = '_blank';
			a.rel = 'noopener noreferrer';

			li.appendChild(a);
			linksList.appendChild(li);
		});

		article.appendChild(linksList);
	}

	return article;
}

async function initProjects({ containerId, featuredOnly = false }) {
	try {
		const projects = await loadProjects();

		const container = document.getElementById(containerId);
		if (!container) {
			console.log("no container found")
			return;
		}

		const filteredProjects = featuredOnly
			? projects.filter(p => p.homePage)
			: projects;

		filteredProjects.forEach(project => {
			const card = createProjectCard(project);
			container.appendChild(card);
		})
	} catch(error) {
		console.error(error);
	}
}
