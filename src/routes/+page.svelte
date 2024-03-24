<script>
	import Counter from './Counter.svelte';
	import welcome from '$lib/images/svelte-welcome.webp';
	import welcome_fallback from '$lib/images/svelte-welcome.png';	
	

	async function query(){
		///const value = await why();
		let access_token = "HZnY8qsd1Q0DE98lMrxesKPcEG84jn";
        const response = await fetch("http://localhost:8000/v1/users/get-profile/", {
            method: 'GET',
            headers: {
            "Content-Type": "application/json", 
            "Authorization": `Bearer ${access_token}`,
            "Access-Control-Allow-Origin": "*"
            },
            body: null
        });
        console.log(await response.json());        
            
        //console.log(quer);
        //queryResponse = await QueryService.query(user.access_token, path);
        //query_data = queryResponse.data as ProductQuery;
    }

	
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<h1>
		<span class="welcome">
			<picture>
				<source srcset={welcome} type="image/webp" />
				<img src={welcome_fallback} alt="Welcome" />
			</picture>
		</span>

		to your new<br />SvelteKit app
	</h1>

	<h2>
		try editing <strong>src/routes/+page.svelte</strong>
	</h2>

	<button on:click={query} class="ready bg-red-500 text-white p-2">Test Now</button>

	<Counter />
</section>

<style>
	.ready {
		background-color: red;
		padding: 10px;
		color: black;
	}
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

	h1 {
		width: 100%;
	}

	.welcome {
		display: block;
		position: relative;
		width: 100%;
		height: 0;
		padding: 0 0 calc(100% * 495 / 2048) 0;
	}

	.welcome img {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		display: block;
	}
</style>
