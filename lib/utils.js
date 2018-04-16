'use strict';

const findUp = require('find-up');

const fs = require('fs');
const path = require('path');

const XmlDocument = require('xmldoc').XmlDocument;

const events = new Set();
const RESERVED_EVENT_REGEX =  /^on([A-Z].+)/;
let appDir;

function gatherEvents(filename) {
	const file = getViewFile(filename);
	if (fs.existsSync(file)) {
		const viewFile = new XmlDocument(fs.readFileSync(file, 'utf8'));
		loopChildren(viewFile.children);
	}
	return events;
}

function getViewFile(filename) {
	if (!appDir) {
		const configFile = findUp.sync('config.json', { cwd: path.dirname(filename) });
		appDir = path.dirname(configFile);
	}
	return path.join(appDir, path.relative(appDir, filename)
		.replace('controllers', 'views')
		.replace('.js', '.xml'));
}

function loopChildren(children) {
	for (const child of children) {
		if (child.attr) {
			findEventHandlers(child);
		}
		if (child.children) {
			loopChildren(child.children);
		}
	}
}

function findEventHandlers(child) {

	for (const attr in child.attr) {
		if (RESERVED_EVENT_REGEX.test(attr)) {
			events.add(child.attr[attr]);
		}
	}
}

module.exports = {
	gatherEvents
};
