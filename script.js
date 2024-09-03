function addClickListener(elementId, url = '') {
    const element = document.getElementById(elementId);
    if (element) {
        console.log(`Adicionando listener ao elemento ${elementId}`);
        element.addEventListener('click', function () {
            console.log(`${elementId} clicado`);
            if (url) {
                window.location.href = url;
            }
        });
    } else {
        console.log(`Elemento com ID ${elementId} não encontrado`);
    }
}

// SQL - Redireciona ao clicar no link do PostgreSQL
addClickListener('sql', 'https://www.postgresql.org/docs/');

// Python - Redireciona ao clicar no link da documentação do Python
addClickListener('python', 'https://docs.python.org/3/');

// HTML - Redireciona ao clicar no link da especificação HTML5
addClickListener('html', 'https://www.w3.org/TR/2011/WD-html5-20110405/');

// CSS - Redireciona ao clicar no link da especificação CSS
addClickListener('css', 'https://www.w3.org/Style/CSS/specs.en.html');

// JavaScript - Redireciona ao clicar no link de localização
addClickListener('java-script', 'https://www.google.com/maps/place/R.+do+Migrante+-+Cama%C3%A7ari,+BA,+42800-065/@-12.7033303,-38.3269018,17z/data=!3m1!4b1!4m6!3m5!1s0x71669dbaa826fe7:0xa3c60a614addf4c0!8m2!3d-12.7033303!4d-38.3243269!16s%2Fg%2F1ymw31c3r?entry=ttu&g_ep=EgoyMDI0MDgyMy4wIKXMDSoASAFQAw%3D%3D');

// Email - Abre o cliente de e-mail com o endereço predefinido
addClickListener('email', 'mailto:everton.cruz28@hotmail.com?subject=Assunto%20do%20E-mail');
