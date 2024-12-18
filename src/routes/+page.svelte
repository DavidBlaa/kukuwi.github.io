<script>
    import { goto } from "$app/navigation";
    import { base } from '$app/paths';
    import MenuCard from '$lib/components/MenuCard.svelte';
    import { goToUebung, goToStart } from "$lib/utils/helperfunctions";
</script>

<main class="h-screen">
    <div class="flex flex-col h-full">
        <!-- Obere Hälfte mit dem KukuWi Logo -->
        <div class="flex items-center justify-center h-1/2">
            <img src={base + "/images/logo.png"} alt="logo" class="max-w-md max-h-md object-contain">
        </div>
        <!-- Untere Hälfte mit den Buttons -->
        <div class="flex justify-center items-center h-1/2">
            <div class="flex w-1/2 justify-center">
                <MenuCard
                    text="ÜBEN"
                    image={{ src: '/images/Hut_2.png', alt: 'Hut' }}
                    bgFront="bg-kukuwi-red"
                    bgBack="bg-kukuwi-red-dark"
                    onclick={goToUebung}
                    class="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 xl:w-80 xl:h-80"
					textClass="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-8xl"
                />
            </div>
            <div class="flex w-1/2 justify-center">
                <MenuCard
                    text="START"
                    image={{ src: '/images/Pokal.png', alt: 'Pokal' }}
                    bgFront="bg-kukuwi-blue"
                    bgBack="bg-kukuwi-blue-dark"
                    onclick={goToStart}
                    class="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 xl:w-80 xl:h-80"
					textClass="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-8xl"
                />
            </div>
        </div>
    </div>
</main>