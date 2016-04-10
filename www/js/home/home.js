var imagem = document.getElementById('imagem');
var servidorDasImagens = '../../images/';
var todasAsImagens = ['imagem1.jpg', 'imagem2.jpg', 'imagem6.jpg', 'imagem5.jpg', 'imagem7.jpg', 'imagem3.jpeg', 'imagem8.jpg', 'imagem4.png'];

var intervalo = setInterval(slideShow, 3000);

function slideShow() {
	for (var i = 0; i < todasAsImagens.length; i++)
	{
		console.log(imagem.src.indexOf(todasAsImagens[i]) != -1);

		if (imagem.src.indexOf(todasAsImagens[i]) != -1)
		{
			if (i != todasAsImagens.length-1)
				imagem.src = servidorDasImagens+todasAsImagens[i+1];
			else
				imagem.src = servidorDasImagens+todasAsImagens[0];
			break;
		}
	}
}