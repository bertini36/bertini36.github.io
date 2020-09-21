import settings from '../settings.js';

export function get(req, res, next) {
	res.writeHead(200, {
		'Content-Type': 'application/json'
	});
	res.end(JSON.stringify(settings));
}
