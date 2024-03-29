//Many thanks to andrews05 in the EV Nova Discord for helping me set this up!! And by help me set this up, I mean he wrote the skeleton of it because I have no idea what I'm doing with JavaScript yet, and I filled in my pages and stuff. I didn't think this was possible on a static website, thanks for opening my eyes to new possibilities!

let islocal = location.protocol == "https:" ? '' : '.html';

let links = [
	{ path: 'index', title: 'Home' },
	{ title: 'Ghosts', sublinks: [
		{ title: '— Solo —' },
		{ path: 'call_of_the_sea', title: 'Call of the Sea' },
		{ path: 'dusty', title: 'Dusty and Obsidian' },
		{ path: 'flux', title: 'FLUX' },
		{ path: 'guard', title: 'Skyrim Guard' },
		{ path: 's_the_skeleton', title: 'S the Skeleton' },
		{ path: 'ukatranslator', title: 'Ukatranslator' },
		{ path: 'warrior_generator', title: 'Warrior Generator' },
		{ path: 'xtemplate', title: 'X. Template' },
		
		{ title: '— Collabs —' },
		{ path: 'balloons_ghost', title: 'Balloons' },
		{ path: 'ct_epoch_jam', title: 'CT Epoch Jam' },
		{ path: 'gallery_512', title: 'Gallery 512' },
		{ path: 'hydrate', title: 'Hydrate' },
		{ path: 'iea', title: 'Iea' },
		{ path: 'keep_frozen', title: 'KEEP FROZEN' },
		{ path: 'needle', title: 'Needle' },
		{ path: 'noodle', title: 'Noodle' },
		{ path: 'paper', title: 'Paper' },
		{ path: 'please_arrive_15_minutes_before_your_scheduled_interview_time', title: 'Please arrive 15 minutes before your scheduled interview time' },
		{ path: 'ssp_angel', title: 'SSP Angel' },
	] },
	{ path: 'simplicity_template', title: 'Simplicity Template' },	
	{ title: 'Code', sublinks: [
		{ path: 'saoris_plugins_tools', title: 'SAORIs/Plugins/Tools' },
		{ path: 'functions', title: 'Functions' },
		{ path: 'minigames', title: 'Minigames' },
	] },
	{ path: 'balloons', title: 'Balloons' },
	{ title: 'Guides', sublinks: [
		{ path: 'https://zichqec.github.io/YAYA_Fundamentals/', title: 'YAYA Fundamentals' },
		{ path: 'github', title: 'Network updates with Github' },
		{ path: 'saori_basic', title: 'Creating SAORI-Basic' },
		{ path: 'loops_and_arrays', title: 'Loops and Arrays (AYA/YAYA)' },
		{ path: 'olddef_vs_newdef', title: 'Old Definition Vs New Definition (SERIKO)' },
		{ path: 'ping_pong_loops', title: 'Ping Pong Loops (SERIKO)' },
		{ path: 'negative_coordinates_in_balloons', title: 'Negative Coordinates in Balloons' },
		{ path: 'aya_conversion', title: 'Convert from AYA to YAYA' },
		{ path: 'yaya_upgrade', title: 'Upgrade Old Versions of YAYA' },
		{ path: 'envelopes_script_input', title: 'Run Envelopes Through Script Input' },
	] },
	{ title: 'Other', sublinks: [
		{ path: 'calendarskins', title: 'Calendar Skins' },
		{ path: 'freeshells', title: 'Freeshells' },
		{ path: 'resources', title: 'Resources' },
		{ path: 'advent_calendar_2021', title: 'Advent Calendar 2021' },
		{ path: 'advent_calendar_2022_00', title: 'Advent Calendar 2022 (#00)' },
		{ path: 'advent_calendar_2022_01', title: 'Advent Calendar 2022 (#01)' },
		{ path: 'advent_calendar_2022_02', title: 'Advent Calendar 2022 (#02)' },
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
	if (link.title == "Home" && !islocal)
	{
		let className = link == active ? 'class="active"' : '';
		return `<a href="/s-the-skeleton/" ${className}>${link.title}</a>`;
	}
	else if (link.path) {
		//Edited this slightly so that the 'class=' bit is part of the variable. Otherwise there was just the word 'class' sitting on its own in the divs, and that seemed weird and like something I don't want. (Not sure why/how it didn't have an '=""' part... perhaps a side effect of inspect element or something?)
		let className = link == active ? 'class="active"' : '';
		//Just need an if check here probably...
		if (link.path.startsWith("http"))
		{
			return `<a href="${link.path}" ${className}>${link.title}</a>`;
		}
		else
		{
			return `<a href="${basepath}${link.path}${islocal}" ${className}>${link.title}</a>`;
		}
		
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