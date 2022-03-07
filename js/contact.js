function sendMessage() {
	let request = new XMLHttpRequest();
	request.open(
		"POST",
		"https://discord.com/api/webhooks/938799304401891349/bk1S6sybJx3BGQdRwQXNmV6Q7l4L2UeYBDLE3wTMZBgxSWOzgUOqFH2RydlDjLV0uXgC"
	);

	request.setRequestHeader("Content-type", "application/json");

	let myEmbed = {
		fields: [
			{
				name: "Nom, Prénom:",
				value: `- ${nameContact.value}`,
			},
			{
				name: "Mail:",
				value: `- ${mailContact.value}`,
			},
			{
				name: "Message:",
				value: `- ${textareaContact.value}`,
			},
		],
		image: {
			url: "https://i.imgur.com/Km8mtVG.png",
		},
		color: hexToDecimal("#EA5863"),
	};

	let params = {
		username: "Portfolio Contact",
		embeds: [myEmbed],
	};

	request.send(JSON.stringify(params));
}

function hexToDecimal(hex) {
	return parseInt(hex.replace("#", ""), 16);
}

form.addEventListener("submit", (e) => {
	e.preventDefault();
	sendMessage();
	nameContact.value = "";
	mailContact.value = "";
	textareaContact.value = "";
});
