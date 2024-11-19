export type Instrument = {
	name: string;
	category: string;
	image: string;
	audios: string[];
};

export type KlangQuizInstrument = Omit<Instrument, 'audios'> & {
	index: number;
	audio: string;
};

export type Game = {
	name: string;
	link: string;
	description: string;
	image: {
		src: string;
		alt: string;
	};
};

export type KlangQuizLevel = {
	difficulty: string;
	instruments: number;
	sameCategory: boolean;
};
