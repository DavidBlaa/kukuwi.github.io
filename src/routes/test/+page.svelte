<script lang="ts">


import MemoryCard from '$lib/components/MemoryCard.svelte';
import { onMount } from 'svelte';
import { MemoryCardsData } from '$lib/data/MemoryCards';
import { shuffleArray } from '$lib/utils/helperfunctions';
import { getRandomIndex, getRandomSubset } from '$lib/utils/helperfunctions.js';



let cards:{genre:string;paused:boolean;isRotated:boolean,index:number,audioPath:string,finished:boolean}[] = $state([])
let lastID:number = $state(-1)
let cardTurned:number = $state(0);
let genre:string = $state("");


onMount(()=>{

	for (const element of getRandomSubset(MemoryCardsData,4)) {

		cards.push({index:-1,genre:element.genre,paused:true,isRotated:false,audioPath:element.audioPaths[getRandomIndex(element.audioPaths)],finished:false});
		cards.push({index:-1,genre:element.genre,paused:true,isRotated:false,audioPath:element.audioPaths[getRandomIndex(element.audioPaths)],finished:false});

	}

	cards = shuffleArray(cards)

	for(const [index,card] of cards.entries()){

		card.index = index

	}


	console.log(cards)

})


function handleCLick(index:number):void{

	if(cards[index].finished){
		return;
	}

	if(lastID == index){

			return
	}

	if(cardTurned == 2){
		cardTurned = 0
		for (const card of cards){
			if(!card.finished) {
				card.isRotated = false
			}

	}
	}

	for (const card of cards){

		card.paused = true;

	}

	cards[index].isRotated = !cards[index].isRotated ;
	cards[index].paused = !cards[index].paused ;

	if(cardTurned == 0){
		cardTurned = 1;
		genre = cards[index].genre;
		lastID = index;
	}else if(cardTurned == 1){
		cardTurned = 2
		if(genre === cards[index].genre){
			cards[index].finished = true;
			cards[lastID].finished = true;


		}




	}
}

</script>

<div class="grid grid-cols-4 gap-3 w-fit h-fit">
{#each cards as c}
<MemoryCard

	isRotated={c.isRotated}
	paused={c.paused}
	onmouseup={() => handleCLick(c.index)}
	audioSource = {"/audios/"+c.audioPath}
	finished = {c.finished}

	/>

	{/each}
	</div>