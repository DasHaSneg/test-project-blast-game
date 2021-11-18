import View from './views/view';
import World from './worlds/world';

export enum Scenes {
	Start = 'Start',
	Game = 'Game',
	End = 'End',
}

export type TScene = {
	view: View;
	world: World;
};

export default class SceneManager {
	private _scenes = new Map<Scenes, TScene>();

	public add(sceneName: Scenes, sceneObj: TScene) {
		this._scenes.set(sceneName, sceneObj);
	}

	public has(sceneName: Scenes) {
		this._scenes.has(sceneName);
	}

	public get(sceneName: Scenes) {
		return this._scenes.get(sceneName);
	}

	public delete(sceneName: Scenes) {
		if (this._scenes.has(sceneName)) {
			this._scenes.delete(sceneName);
		}
	}

	public get scenes() {
		return this._scenes;
	}
}
