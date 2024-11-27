import type { Instrument } from '$lib/types/types';


export const instruments: Instrument[] = [
	{
		name: 'Schlagzeug',
		category: 'Schlaginstrumente',
		image: '001-schlagzeug.png',
		audios: [
			'Drums - Funk 111 bpm.mp3',
			'Drums - Funk 112 bpm.mp3',
			'Drums - Funk 122 bpm.mp3',
			'Drums - Jazz Break 125 bpm.mp3',
			'Drums - Jazz Brushes 70 bpm.mp3',
			'Drums - Rock 72 bpm.mp3'
		]
	},
	{
		name: 'Banjo',
		category: 'Zupfinstrumente',
		image: '002-banjo.png',
		audios: ['Banjo-exotic-loop_100bpm_B_minor.mp3']
	},
	{
		name: 'Gitarre',
		category: 'Zupfinstrumente',
		image: '003-gitarre.png',
		audios: [
			'Gt1 AfricanFunk Gm 120bpm.mp3',
			'Gt1 Alternative Em 120bpm.mp3',
			'Gt1 Blues Amaj 88bpm.mp3',
			'Gt1 Chill Bm 108bpm.mp3',
			'Gt1 Funk Cmaj 124bpm.mp3',
			'Gt1 Punk Emaj 170bpm.mp3'
		]
	},
	{
		name: 'Bass',
		category: 'Zupfinstrumente',
		image: '004-elektrischer-bass.png',
		audios: [
			'Bs1 AfricanFunk Gm 120bpm.mp3',
			'Bs1 Alternative Em 120bpm.mp3',
			'Bs1 Blues Amaj 88bpm.mp3',
			'Bs1 Chill Bm 108bpm.mp3',
			'Bs1 Funk Cmaj 124bpm.mp3',
			'Bs1 Punk Emaj 170bpm.mp3'
		]
	},
	{
		name: 'Harmonium',
		category: 'Tasteninstrumente',
		image: '005-harmonium.png',
		audios: ['Harmonium_124bpm_E.mp3']
	},
	{
		name: 'Piano',
		category: 'Tasteninstrumente',
		image: '006-piano.png',
		audios: [
			'Piano Grand Piano Dirty Stabs E Minor 90 bpm.mp3',
			'Piano Ostinato Focus F Dorian 85 bpm.mp3',
			'Piano Ostinato Retrospection D Major 100 bpm.mp3',
			'Piano Phrase Blues Sky Eb Minor 92bpm.mp3',
			'Piano Phrase Lazy Day IV-I Ab Major 105 bpm.mp3',
			'Piano Progression City Drive A Minor 125 bpm.mp3'
		]
	},
	{
		name: 'Trompete',
		category: 'Blasinstrumente',
		image: '007-trompete.png',
		audios: [
			'Trumpet 87bpm G minor.mp3',
			'Trumpet 105bpm D minor.mp3',
			'Trumpet Sax Sound Instrument.mp3',
			'Trumpet Solo F Instrument.mp3'
		]
	},
	{
		name: 'Violine',
		category: 'Streichinstrumente',
		image: '008-violine.png',
		audios: ['Violine 1.mp3']
	},
	{
		name: 'Saxophone',
		category: 'Blasinstrumente',
		image: '009-saxophon.png',
		audios: ['Sax 60bpm E minor.mp3']
	},
	{
		name: 'Flöte',
		category: 'Blasinstrumente',
		image: '010-floete.png',
		audios: ['Flute-vibey_150bpm.mp3']
	}
];
