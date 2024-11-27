import * as fs from 'fs';
import * as midiManager from 'midi-file';


export async function GET() {


	const input = fs.readFileSync('./static/midis/3_Rumba.mid');
	const parsed = midiManager.parseMidi(input);

	const tick_delta: number = 24;


	const events: { [key: number]: number[] } = {};

	const patterns: boolean[] = [];


	let time_delta: number = 0;

	for (const event of parsed.tracks[0]) {

		time_delta += event.deltaTime;

		if (event.type == 'noteOn') {

			if (!(event.noteNumber in events)) {

				events[event.noteNumber] = [];

			}

			events[event.noteNumber].push(time_delta);

		}

	}


	for (const [, value] of Object.entries(events)) {


		for (let t: number = 0; t < 16; t++) {

			patterns.push(value.includes(t * tick_delta));

		}
	}


	return new Response(JSON.stringify(patterns), {
		headers: {
			'Content-Type': 'application/json'
		}
	});


}
