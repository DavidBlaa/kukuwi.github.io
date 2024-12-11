<script>
	import { goto } from "$app/navigation";
	import { base } from '$app/paths';
	import MenuCard from '$lib/components/MenuCard.svelte';
//Für Weiterleitung auf Start- bzw. Übungsseite
	const goToUebung = async() => {
		await goto(base+'/uebung');
	};

	function goToStart(){
		goto(base+'/raten')
	}
</script>

<main>
	<!-- Aufteilung des Bildschirms in zwei gleichgroße Hälften vertikal-->
	<div class="flex flex-col h-screen">
		<!--Obere Hälfte mit dem KukuWi Logo-->
		<div class="h-3/5 flex items-center justify-center">
			<img src={base+"/images/logo.png"} alt="logo" class="max-w-full max-h-full object-contain">
		</div> 
	    <!-- Unter Hälfte mit den Buttons -->
	    <div class="h-2/5 flex">
	        <!--Unter Hälfte wird nochmal geteilt für Trainings- und Übungsbutton-->
				<div class="w-1/2 flex items-center justify-center">
					<div class="flex flex-col items-center">
					  <MenuCard
					  text="ÜBEN"
					  image={{ src: '/images/Hut_2.png', alt: 'Hut' }}
					  bgFront="bg-kukuwi-red"
					  bgBack="bg-kukuwi-red-dark"
					  onclick="{goToUebung}"/>
					</div>
				</div>
				<div class="w-1/2 flex items-center justify-center">
					<div class="flex flex-col items-center rounded-m">
						<MenuCard
					     text="START"
					     image={{ src: '/images/Pokal.png', alt: 'Pokal' }}
					     bgFront="bg-kukuwi-blue"
					     bgBack="bg-kukuwi-blue-dark"
		                 onclick={goToStart} />
                           
					</div>
	    </div>
</main>
