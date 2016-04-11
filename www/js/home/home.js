var imagem = document.getElementById('imagem');
var intervaloSlide = setInterval(slideShow, 3000);
var servidorDasImagens = '../../images/';
var todasAsImagens = ['imagem2.jpg', 'imagem5.jpg', 'imagem7.jpg', 'imagem3.jpeg', 'imagem8.jpg', 'imagem4.png'];

function slideShow() {
	for (var i = 0; i < todasAsImagens.length; i++)
	{
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

