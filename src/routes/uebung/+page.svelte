<script lang="ts">
    import { goto } from "$app/navigation";
    import { base } from '$app/paths';
    import Button3d from '$lib/components/Button3d.svelte';
    import MenuCard from "$lib/components/MenuCard.svelte";
    import { goToStart } from "$lib/utils/helperfunctions";

    const levels = [
        { text: 'Level 1', bgFront: 'bg-green-500', bgBack: 'bg-green-600' },
        { text: 'Level 2', bgFront: 'bg-yellow-500', bgBack: 'bg-yellow-600' },
        { text: 'Level 3', bgFront: 'bg-red-500', bgBack: 'bg-red-600' }
    ];

    const ueberschriften = [
        { text: 'Ratespiel', textColor: 'text-kukuwi-red', path: 'ratespiel' }, 
        { text: 'Pattern', textColor: 'text-kukuwi-yellow', path: 'pattern' }, 
        { text: 'Genre', textColor: 'text-kukuwi-blue', path: 'genre' }
    ];

    function handleLevelClick(ueberschrift: string, level: string) {
        const uebungPath = ueberschriften.find(u => u.text === ueberschrift)?.path;
        if (uebungPath) {
            let instrument = 'drum'; // Standardwert, kann angepasst werden
            let rows = '2'; // Standardwert, kann angepasst werden

            if (ueberschrift === 'Ratespiel') {
                instrument = 'drum';
                rows = level === 'Level 1' ? '2' : level === 'Level 2' ? '3' : '4';
            } else if (ueberschrift === 'Pattern') {
                instrument = 'drum';
                rows = level === 'Level 1' ? '2' : level === 'Level 2' ? '3' : '4';
            }

            goto(`${base}/uebung/${uebungPath}/${level}?instrument=${instrument}&rows=${rows}`);
        }
    }
</script>

<main class="h-screen overflow-hidden">
    <!-- Grid mit 3 Spalten und 5 gleich großen Zeilen -->
    <div class="grid grid-cols-3 gap-2 h-full" style="grid-template-rows: repeat(5, 1fr);">
        {#each ueberschriften as ueberschrift, i}
            <div class="flex flex-col items-center h-full">
                <!-- Überschrift der Spalte -->
                <div class={`flex justify-center items-center text-7xl font-bold ${ueberschrift.textColor} h-1/6`}>
                    {ueberschrift.text}
                </div>

                <!-- Inhalte der Spalte (5 Zeilen) -->
                <div class="grid gap-2 h-5/6 w-full" style="grid-template-rows: repeat(5, 1fr);">
                    {#each levels as level}
                        <!-- Level-Buttons -->
                        <div class="flex justify-center items-center text-white font-bold text-5xl w-full h-full">
                            <Button3d
                                bgFront={level.bgFront}
                                bgBack={level.bgBack}
                                padding="px-1 py-1 md:px-2 md:py-2 lg:px-4 lg:py-4"
                                onclick={() => handleLevelClick(ueberschrift.text, level.text)}
                                onmouseup={() => {}}
                                class="w-full h-full"
                            >
                                {level.text}
                            </Button3d>
                        </div>
                    {/each}

                    <!-- Zusätzlicher Platz für die fünfte Zeile -->
                    {#if ueberschrift.text === 'Pattern'}
                        <!-- MenuCard in der 5. Zeile -->
                        <div class="flex justify-center items-center text-white font-bold text-2xl w-full h-full">
                            <MenuCard
                                text="START"
                                image={{ src: '/images/Pokal.png', alt: 'Pokal' }}
                                bgFront="bg-kukuwi-blue"
                                bgBack="bg-kukuwi-blue-dark"
                                onclick={goToStart}
                                class="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 xl:w-32 xl:h-32"
                            />
                        </div>
                    {:else}
                        <!-- Platzhalter für andere Spalten -->
                        <div class="w-full h-full"></div>
                    {/if}
                </div>
            </div>
        {/each}
    </div>
</main>