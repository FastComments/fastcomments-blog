// Fast dev watcher: when an English post changes, rebuild only that post's page (no
// translation, listings, sitemap or RSS). CSS changes are copied over, and template changes
// rebuild the last edited post. Needs one full build first; run `npm run serve` alongside.
const fs = require('fs');
const path = require('path');
const {spawn} = require('child_process');

const EN_DIR = path.join(__dirname, 'content/en');
const CSS_DIR = path.join(__dirname, 'static/css');
const TEMPLATE_DIR = path.join(__dirname, 'templates');
const GENERATED_DIR = path.join(__dirname, 'static/generated');

if (!fs.existsSync(GENERATED_DIR)) {
	console.error(`${GENERATED_DIR} does not exist. Run a full build first.`);
	process.exit(1);
}

let lastPost = null;
const timers = {};

// Editors often emit several events per save, so collapse them.
function debounce(key, fn) {
	clearTimeout(timers[key]);
	timers[key] = setTimeout(fn, 100);
}

function buildPost(file) {
	lastPost = file;
	const child = spawn(process.execPath, [path.join(__dirname, 'app.js')], {
		env: {...process.env, ONLY_POST: file},
		stdio: 'inherit'
	});
	child.on('exit', code => {
		if (code !== 0) console.error(`Build failed for ${file}`);
	});
}

fs.watch(EN_DIR, (event, file) => {
	if (!file || !file.endsWith('.md') || !fs.existsSync(path.join(EN_DIR, file))) return;
	debounce(file, () => buildPost(file));
});

fs.watch(CSS_DIR, () => {
	debounce('css', () => {
		fs.cpSync(CSS_DIR, path.join(GENERATED_DIR, 'css'), {recursive: true});
		console.log('Copied css');
	});
});

fs.watch(TEMPLATE_DIR, () => {
	debounce('templates', () => {
		if (lastPost) {
			buildPost(lastPost);
		} else {
			console.log('Template changed. Save a post to rebuild it with the new template.');
		}
	});
});

console.log(`Watching ${EN_DIR}, ${CSS_DIR} and ${TEMPLATE_DIR}`);
