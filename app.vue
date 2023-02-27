<script setup>
	useHead({
		titleTemplate: (titleChunk) => {
			return titleChunk ? `${titleChunk} / Nuxt Content Boilerplate` : "Nuxt Content Boilerplate"
		},
		 
		// script: [{ src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }]
	});


// import "~/assets/styles/main.css";

const { data: navigation } = await useAsyncData('navigation', () => {
  return fetchContentNavigation()
})

</script>


<template>
	<Html lang="en" dir="ltr">
		<Head>
			<!-- <Link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" /> -->
		<Link
				rel="preload"
				href="https://cdn.simplecss.org/simple.min.css"
				as="style"
			/>
				<Link
				rel="stylesheet"
				href="https://cdn.simplecss.org/simple.min.css" media="screen"
			/> 

			<!-- <Link
				rel="stylesheet"
				href="/assets/styles/main.css" media="screen"
			/> -->


			<!-- <Link
				rel="stylesheet"
				href="assets/styles/main.css"
			/> -->

			<!-- <Link
				rel="icon"
				type="image/png"
				sizes="32x32"
				href="/favicon/favicon-32x32.png"
			/>
			<Link rel="icon" type="image/x-icon" href="/favicon/favicon.ico" /> -->
		</Head>
		<Body>
			<TheHeader />
			<nav>
        <TheNavigation :navigation-tree="navigation" />
      </nav>
				<NuxtPage />
				
			<TheFooter />
		</Body>
	</Html>
</template>