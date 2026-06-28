import * as three from 'three';
import { Image, Screen, addThreeHelpers, gl, init } from '@node-3d/core';
import { init as initQml } from '@node-3d/plugin-qml';
import { absPath } from '@node-3d/qml-fontawesome';


const { doc } = init({
	isGles3: true,
	isWebGL2: true,
	autoEsc: true,
	autoFullscreen: true,
	title: 'Themed UI',
	width: 1600,
	height: 900,
});
addThreeHelpers(three);

const { QmlOverlay, loop, View } = initQml({ doc, gl, cwd: process.cwd(), three });
View.libs('..'); // i.e. "examples/.." - the root of this repo, where the lib is located
View.libs(absPath);

const icon = new Image('qml.png'); // use `npm start` from "examples", so CWD is there
icon.on('load', () => {
	if (icon.data) {
		doc.icon = { width: icon.width, height: icon.height, data: icon.data };
	}
});

const screen = new Screen({ three });

const overlay = new QmlOverlay({ file: 'qml/gui.qml' });
screen.scene.add(overlay.mesh);

loop(() => screen.draw());
