const webcamElement  = document.getElementById('webcam');

let net;


async function app() {
	console.log('loding Mobilenet....');
	document.getElementById("first").innerHTML= "loding Mobilenet....";

	net = await mobilenet.load();
	console.log('Mobilenet loaded succesfully....')	;
	document.getElementById("first").innerHTML= "Mobilenet loaded succesfully....";

	const webcam = await tf.data.webcam(webcamElement);

	while(true)
	{
		const img = await webcam.capture();
		const result = await net.classify(img);

		document.getElementById('console').innerHTML = `
		Prediction : ${result[0].className}\n
		probability : ${result[0].probability}

		`;

		img.dispose();

		await tf.nextFrame();
	}
}

app();