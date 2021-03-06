import {SceneDataManifestImporter} from '@polygonjs/polygonjs/dist/src/engine/io/manifest/import/SceneData';
const manifest = {
	properties: '1651075368785',
	root: '1651075368785',
	nodes: {
		geo1: '1651075368785',
		'geo1/COP': '1651075368785',
		'geo1/MAT': '1651075368785',
		'geo1/MAT/meshPhysicalBuilder1': '1651075368785',
		'geo1/MAT/meshPhysicalBuilder2': '1651075368785',
		'geo1/MAT/meshPhysicalBuilder3': '1651075368785',
		perspectiveCamera1: '1651075368785',
		'perspectiveCamera1/events1': '1651075368785',
		background: '1651075368785',
		'background/MAT': '1651075368785',
		'background/MAT/meshStandardBuilder1': '1651075368785',
		COP: '1651075368785',
		'COP/builder1': '1651075368785',
	},
};

export const loadSceneData_scene_01 = async (options = {}) => {
	const sceneDataRoot = options.sceneDataRoot || './polygonjs/scenes';
	return await SceneDataManifestImporter.importSceneData({
		sceneName: 'scene_01',
		urlPrefix: sceneDataRoot + '/' + 'scene_01',
		manifest: manifest,
		onProgress: options.onProgress,
	});
};
