<template>
  <head>
    <title>Developer Yoseph - {{ title }}</title>

    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta property="og:title" content="Yoseph Alabdulwahab's Portfolio" />
    <meta property="og:url" content="https://www.yosephsa.com/" />
    <meta property="og:type" content="website" />
    <meta name="twitter:card" content="summary_large_image">
  
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Fredericka+the+Great">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Parisienne">

  </head>
  <body>

    <!-- Navbar -->
    <NavBar></NavBar>

    <!-- ---------------- SCROLLABLE CONTENT ---------------- -->
    <div id="page-content">
      <!-- ---------------- MOBILE TOP NAV ---------------- -->
      <div class="page-title">
          <h1>My Page</h1>
      </div>


      <!-- ------------ PAGE CONTENT ---------------- -->
      <div id="page-content-body">
        My Body
      </div>
    </div>
  </body>
</template>

<script>
import NavBar from './components/NavBar.vue'
import './assets/normalize.css';
import './assets/global.css';

export default {
  name: 'App',
  components: {
    NavBar
  }
}
</script>

<style>
:root {
	/* Universal Variables*/
	--color-black: #111111;
	--color-dark-gray: #222222;
	--color-gray: #404040;
	--color-light-gray: #5d5d5d;
	--color-white: #C8C8C8;
	--color-creamy-ocean: #4987b3;

	/* Nav Menu Variables */
	--nav-desktop-size: 110px;
	--nav-mobile-size: 80px;
	--color-font: var(--color-white);
}
</style>

<style scoped>
body {
	height: 100vh;
	width: 100vw;
	overflow: hidden;
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	position: relative;
	background: url('./assets/mtb-skinny-log-tinted.jpg') no-repeat;
	background-size: cover;
	background-position: 50%;
}

body #page-content {
	width: 100%;
	overflow: auto;
	display: flex;
	flex-direction: column;
}

body #page-content #page-content-body {
	position: relative;
	flex-grow: 1;
}


@media screen and (max-width: 700px) {
	body {
		flex-direction: column;
	}
	body #page-content {
		padding-bottom: 56px;
		height: calc(100% - var(--nav-mobile-size));
	}
}

.page-title {
	display: none;
}

@media screen and (max-width: 700px) {
	.page-title {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100vw;
		height: var(--nav-mobile-size);
		background-color: rgba(0, 0, 0, 0.5);
		color: var(--color-white);
	}
}
</style>