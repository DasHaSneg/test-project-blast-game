import Input from '../input';

interface IWorld {
	update: (userInput: Input) => void;
}

export default abstract class World implements IWorld {
	abstract update(userInput: Input): void;
}
