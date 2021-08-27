require('dotenv').config();
const fs = require('fs');
const { Client, Intents} = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MEMBERS] });

const read = fs.readFileSync('callaita.txt', 'utf8');
const arr = read.split("\n");


function binary(word){
	
	let wordA = [];

	for(let i = 0;i<Math.pow(2,word.length);i++){
		let l = "";
		const x = word.split("");

		for(let j=0;j<word.length;j++){

			if((i>>j) & 1){

			x[j] = x[j].toUpperCase();
			l = l + x[j];

			}else{
				x[j] = x[j].toLowerCase();
				l = l + x[j];
			}
			
			
		}
		wordA.push(l);
	}

	return wordA;
}

const verga = binary("verga");
const pito = binary("pito");
const pene = binary("pene");
const reata = binary("reata");
const riata = binary("riata");
const chupas = binary("chupas");
const callaita = binary("callaita");
const nigga = binary("nigga");
const nigger = binary("nigger");


client.once('ready', () => {
	console.log('Ready!');
});

client.on("guildMemberAdd", (member) => {
     member.guild.channels.cache.get("850545867466473485").send(`bienvenido al astronauta army brooo ${member}!!!\nsigueme en insta: https://www.instagram.com/yesyoudumb\ny en tw: <https://www.twitter.com/yesyoudumb>`);
	 member.roles.add("863655384391614484");
});



client.on('message', (message) => {

	const content = message.content;
	const contentA = content.split(" ");

	if(message.author.id != 876294218207879178){

		if(message.content === "$test"){
			

		}
		

	for(let i=0;i<contentA.length;i++){
				for(let j=0;j<nigger.length;j++){

			if(contentA[i] === nigger[j]){
				message.channel.send(`${message.author} ha sido baneado por decir la nword`);
				message.guild.members.ban(message.author.id);
				message.delete();
			}

		}
		
			for(let j=0;j<nigga.length;j++){

			if(contentA[i] === nigga[j]){
				message.channel.send(`${message.author} ha sido baneado por decir la nword`);
				message.guild.members.ban(message.author.id);
				message.delete();
			}

		}
		for(let j=0;j<verga.length;j++){

			if(contentA[i] === verga[j] || contentA[i] === "vrg"){

				message.channel.send('chupas');
			}

		}
		for(let j=0;j<pito.length;j++){

			if(contentA[i] === pito[j] || contentA[i] === "pto" || contentA[i] === "pt"){

				message.channel.send('chupas');
			}

		}
		for(let j=0;j<reata.length;j++){

			if(contentA[i] === reata[j]){

				message.channel.send('chupas');
			}

		}
		for(let j=0;j<riata.length;j++){

			if(contentA[i] === riata[j]){

				message.channel.send('chupas');
			}

		}
		for(let j=0;j<pene.length;j++){

			if(contentA[i] === pene[j]){

				message.channel.send('chupas');
			}

		}
		for(let j=0;j<chupas.length;j++){

			


			

			if(contentA[i] === chupas[j]){

				message.channel.send('verga');
			}
			

		}
		for(let j=0;j<callaita.length;j++){
			if(contentA[i] === callaita[j]){

				for (let i=0;i<arr.length;i++){
					message.channel.send(arr[i]);
				}

			}
		}

	}
	}
	});
client.login(process.env.DISCORDJS_BOT_TOKEN);



