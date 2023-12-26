<template>
    <div class="item">
        <div class="card">
            <img v-bind:src="image"/>
            <div class="details">
                <h2> {{ title }}</h2>
                <p> {{ summary }}</p>
            </div>
            <div class="quicklink-container">
                <VContainer v-for="(link, index) in links" v-bind:key="index">
                    <a v-if="link.linkType == YOUTUBE" class="youtube" v-bind:href="link.link">
                        <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="274.000000pt" height="178.000000pt" viewBox="0 0 274.000000 178.000000" preserveAspectRatio="xMidYMid meet"> <g transform="translate(0.000000,178.000000) scale(0.100000,-0.100000)" stroke="none"> <path d="M775 1769 c-242 -12 -390 -32 -451 -61 -62 -29 -123 -89 -152 -150 -51 -109 -78 -413 -69 -778 10 -373 35 -523 105 -615 105 -138 264 -160 1162 -159 533 0 760 8 930 35 153 24 252 109 290 249 39 144 59 581 41 864 -20 303 -48 413 -126 491 -107 107 -248 124 -1035 130 -283 2 -596 -1 -695 -6z m982 -885 c-13 -12 -599 -352 -623 -361 -12 -4 -14 52 -14 370 l0 375 324 -186 c243 -140 322 -190 313 -198z"/> </g> </svg>
                    </a>
                    <a v-if="link.linkType == GITHUB" class="github" v-bind:href="link.link">
                        <svg class="octicon octicon-mark-github v-align-middle" height="32" viewBox="0 0 16 16" version="1.1" width="32" aria-hidden="true"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg>
                    </a>
                </VContainer>
                
            </div>
        </div>
        <div class="timeline">
            <h3>13 Oct 2020</h3>
        </div>
    </div>
</template>

<script lang="ts">
import { LinkType, StoryLink } from '../types/storyLink'
export default {
  name: 'NavBar',
  props: {
    title: String,
    summary: String,
    image: String,
    links: () => [] as StoryLink[]
  },
  data () {
    return {
      YOUTUBE: LinkType.YOUTUBE,
      GITHUB: LinkType.GITHUB,
      MEDIUM: LinkType.MEDIUM,
    }
  }
}
</script>

<style scoped>
.item {
	display: flex;
	justify-content: space-between;
	height: var(--card-height);
	width: 100%;
	color: var(--color-white);
	margin: 0 0 3%;
}

.item .card {
	display: flex;
	justify-content: flex-start;
	height: 100%;
	width: 70%;
	max-width: 1000px;
	box-shadow: 0 0 10px #1a1a1a;
	border-radius: 4px;
	overflow: hidden;
}

.item .card img {
	width: var(--card-height);
	object-fit: cover;
}

.item .card .details {
	padding: 10px 20px;
	background-color: var(--color-dark-gray);
}


.item .card .details p {
	display: -webkit-box;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;  
	overflow: hidden;
}

.item .card .quicklink-container {
	display: flex;
	height: 100%;
}


.item .card .quicklink-container a {
	display: flex;
	justify-content: center;
	align-items: center;
	width: var(--card-height);
}


.item .card .quicklink-container a img, .item .card .quicklink-container a svg {
	width: 50%;
	height: 50%;
	object-fit: contain;
	fill: var(--color-white);
}

.item .card .quicklink-container a.youtube {
	background-color: #ff0000bd;
}

.item .card .quicklink-container a.github {
	background-color: #24292e;
}

.item .timeline {
	display: none;
}

@media screen and (max-width: 700px) {
	.item {
		justify-content: center;
		height: auto;
		margin: 0 0 30px;
	}
	.item .card {
		flex-direction: column;
		width: 100%;
		max-width: 300px;
	}
	.item .card img {
		width: 100%;
		height: 180px;
	}
	.item .card .quicklink-container a {
		flex-grow: 1;
		height: 80px;
	}
}
</style>