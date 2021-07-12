//Many thanks to andrews05 in the EV Nova Discord for helping me set this up!! And by help me set this up, I mean he wrote the skeleton of it because I have no idea what I'm doing with JavaScript yet, and I filled in my pages and stuff. I didn't think this was possible on a static website, thanks for opening my eyes to new possibilities!

let links = [
	{ path: 'index.html', title: 'Home' },
	{ title: 'Ghosts', sublinks: [
		{ title: '—Main—' },
		{ path: 's_the_skeleton.html', title: 'S the Skeleton' },
		{ path: 'dusty.html', title: 'Dusty and Obsidian' },
		{ title: '—Side—' },
		{ path: 'flux.html', title: 'FLUX' },
		{ path: 'warrior_generator.html', title: 'Warrior Generator' },
		{ path: 'guard.html', title: 'Skyrim Guard' },
		{ title: '—Collabs—' },
		{ path: 'hydrate.html', title: 'Hydrate' },
		{ path: 'ct_epoch_jam.html', title: 'CT Epoch Jam' },
		{ path: 'iea.html', title: 'Iea' },
	] },
	{ path: 'xtemplate.html', title: 'X. Template' },
	{ title: 'Code', sublinks: [
		{ path: 'saoris_plugins_tools.html', title: 'SAORIs/Plugins/Tools' },
		{ path: 'functions.html', title: 'Functions' },
		{ path: 'minigames.html', title: 'Minigames' },
	] },
	{ path: 'balloons.html', title: 'Balloons' },
	{ title: 'Guides', sublinks: [
		{ path: 'github.html', title: 'Network updates with Github' },
		{ path: 'saori_basic.html', title: 'Creating SAORI-Basic' },
		{ path: 'loops_and_arrays.html', title: 'Loops and Arrays (AYA/YAYA)' },
		{ path: 'olddef_vs_newdef.html', title: 'Old Definition Vs New Definition (SERIKO)' },
		{ path: 'ping_pong_loops.html', title: 'Ping Pong Loops (SERIKO)' },
	] },
	{ title: 'Other', sublinks: [
		{ path: 'calendarskins.html', title: 'Calendar Skins' },
		{ path: 'resources.html', title: 'Resources' },
	] },
];

let basepath = '';
let active = null;

function findActive(links) {
	for (let link of links) {
		if (link.path && location.pathname.endsWith(link.path)) {
			active = link;
			basepath = location.pathname.substring(0, location.pathname.length-link.path.length);
		}
		if (link.sublinks) {
			findActive(link.sublinks);
		}
	}
}
function linkHTML(link) {
	if (link.path) {
		//Edited this slightly so that the 'class=' bit is part of the variable. Otherwise there was just the word 'class' sitting on its own in the divs, and that seemed weird and like something I don't want. (Not sure why/how it didn't have an '=""' part... perhaps a side effect of inspect element or something?)
		let className = link == active ? 'class="active"' : '';
		return `<a href="${basepath}${link.path}" ${className}>${link.title}</a>`;
	} else if (link.sublinks) {
		return `
			<div class="dropdown">
				<button class="dropbtn">${link.title}
				  <i class="fa fa-caret-down"></i>
				</button>
				<div class="dropdown-content">
				${link.sublinks.map(linkHTML).join('')}
				</div>
			</div>`;
	} else {
		return `<p class="navdivider">${link.title}</p>`;
	}
}

findActive(links);
document.getElementById('navbar').innerHTML = links.map(linkHTML).join('');