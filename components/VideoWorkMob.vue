<template>
    <div class="vidworkmob">
		<div class="video-container-mob">
			<video id="vidmob" :src="require(`~/assets/${preview}`)" preload="auto" autoplay loop :muted="sound"></video>
		</div>
		<div class="text">
        	<p class="page" >0{{number}}</p>
			<h2>{{title}}</h2>
			<div class="infos">
				<div class="role">
					<h3>Role</h3>
					<span>{{role}}</span>
				</div>
				<div class="context">
					<h3>Context</h3>
					<span>{{context}}</span> 
				</div>
				<div class="tools">
					<h3>Tools</h3>
					<span>{{tools}}</span>
				</div>
			</div>
		</div>
    </div>
</template>

<script>
export default {
	props:{
		preview: String,
		title: String,
		sound: Boolean,
		role: String,
		context: String,
		tools: String,
		number: Number,
	},
    data(){
		return{
			index:0,

		}
	},
	
	computed:{
		
	},

	mounted() {
		
		const loop = () => {


			requestAnimationFrame(loop)
		}
		requestAnimationFrame(loop)
	},

	
}
</script>


<style scoped>

@media screen and (max-width: 1024px) and (orientation: portrait){
	.vidworkmob{
		width: 100vw;
		height: 100vh;
		display: flex;
		justify-content: center;
		align-items: center;
	}
}

@media screen and (max-width: 1024px) and (orientation: landscape){
	.vidworkmob{
		width: 100vw;
		height: 150vh;
		display: flex;
		justify-content: center;
		align-items: center;
	}
}

@media screen and (min-width: 1024px){
	.vidworkmob{
		display: none;
	}
}


.video-container-mob{
	overflow: hidden;
	width: 70vw;
	border: 2px solid darkgray;
	display: flex;
	justify-content: center;
}

#vidmob{
	width: 70vw;
	height: 100%;
}

.text{
	color: white;
	position: absolute;
	text-shadow: 0px 5px 30px black;
	left: 10vw;
	margin-top: -1.3vw;

}

.text .page{
	width: 15vw;
	font-size: 15vw;
	font-family: 'Raleway-bold';
	position: relative;
	left: 70vw;
	top: -3vw;
}

.text h2{
	font-size: 7vw;
	font-family: 'Raleway-bold';
	margin-bottom: 10px;
}

.infos{
	width: 60vw;
	display: flex;
	justify-content: space-between;
	opacity: .8;
		
}

.role, .context, .tools{
	display: flex;
	flex-direction: column;
}

h3{
	font-size: 2.5vw;
	margin: 0px;
}

span{
	font-size: 2vw;
	margin: 0px;
}

</style>

