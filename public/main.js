/**
	Arquivos como esse em um projeto real seria mais descritivos e não genérico como 'main',
	um nome legal seria 'post-page.js'. Para cada page seria interessante um arquivo como esse
	para configurar módulos que a page irá usar.
*/

// Chamando lib requirejs para configurar módulos principais que irão ser carregados
requirejs.config({
	baseUrl: './', // caminho de pastas que irá ser carregado através do Js via Ajax
	paths: {
		// "moduleName": "fileName"
		"posts": "posts"
	}
});

// Iniciando a aplicação
requirejs(['posts'], function () {

});