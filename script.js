const herramientasData = [
    {
        nombre: "CMatrix",
        descripcion: "Una representación visual de la lluvia de código de Matrix en tu terminal.",
        githubLink: "https://github.com/abishekvashok/cmatrix",
        instalacion: "pkg install cmatrix"
    },
    {
        nombre: "Lolcat",
        descripcion: "Un programa que concatena archivos o entrada estándar a la terminal, coloreando el texto con un efecto de arcoíris.",
        githubLink: "https://github.com/busyloop/lolcat",
        instalacion: "pkg install lolcat"
    },
    {
        nombre: "Figlet",
        descripcion: "Genera texto grande, hecho de letras más pequeñas, en una variedad de estilos de fuente.",
        githubLink: "https://github.com/cmusphinx/figlet",
        instalacion: "pkg install figlet"
    },
    {
        nombre: "Neofetch",
        descripcion: "Muestra información del sistema en tu terminal.",
        githubLink: "https://github.com/dylanaraps/neofetch",
        instalacion: "pkg install neofetch"
    },
    {
        nombre: "Htop",
        descripcion: "Un monitor de procesos interactivo y en tiempo real para sistemas Unix.",
        githubLink: "https://github.com/hishamhm/htop",
        instalacion: "pkg install htop"
    },
    {
        nombre: "Wget",
        descripcion: "Una utilidad para descargar archivos de la web.",
        githubLink: "https://git.savannah.gnu.org/gitweb/?p=wget.git;a=summary",
        instalacion: "pkg install wget"
    },
    {
        nombre: "Curl",
        descripcion: "Una herramienta de línea de comandos para transferir datos con URLs.",
        githubLink: "https://github.com/curl/curl",
        instalacion: "pkg install curl"
    },
    {
        nombre: "Nmap",
        descripcion: "Un escáner de seguridad de red, útil para el descubrimiento de hosts y la auditoría de seguridad.",
        githubLink: "https://github.com/nmap/nmap",
        instalacion: "pkg install nmap"
    },
    {
        nombre: "Tmux",
        descripcion: "Un multiplexor de terminal que permite tener múltiples sesiones dentro de una sola ventana.",
        githubLink: "https://github.com/tmux/tmux",
        instalacion: "pkg install tmux"
    },
    {
        nombre: "Vim",
        descripcion: "Un editor de texto altamente configurable para crear y editar cualquier tipo de texto.",
        githubLink: "https://github.com/vim/vim",
        instalacion: "pkg install vim"
    },
    {
        nombre: "Nano",
        descripcion: "Un editor de texto fácil de usar para principiantes.",
        githubLink: "https://git.savannah.gnu.org/gitweb/?p=nano.git;a=summary",
        instalacion: "pkg install nano"
    },
    {
        nombre: "Git",
        descripcion: "Un sistema de control de versiones distribuido para rastrear cambios en el código fuente.",
        githubLink: "https://github.com/git/git",
        instalacion: "pkg install git"
    },
    {
        nombre: "Python",
        descripcion: "Un lenguaje de programación de alto nivel, de propósito general.",
        githubLink: "https://github.com/python/cpython",
        instalacion: "pkg install python"
    },
    {
        nombre: "Node.js",
        descripcion: "Un entorno de ejecución de JavaScript construido sobre el motor V8 de Chrome.",
        githubLink: "https://github.com/nodejs/node",
        instalacion: "pkg install nodejs"
    },
    {
        nombre: "PHP",
        descripcion: "Un lenguaje de scripting de propósito general que es especialmente adecuado para el desarrollo web.",
        githubLink: "https://github.com/php/php-src",
        instalacion: "pkg install php"
    },
    {
        nombre: "Bash-it",
        descripcion: "Un framework para el uso de Bash.",
        githubLink: "https://github.com/Bash-it/bash-it",
        instalacion: "git clone --depth=1 https://github.com/Bash-it/bash-it.git ~/.bash_it && ~/.bash_it/install.sh"
    },
    {
        nombre: "Zsh",
        descripcion: "Un shell diseñado para uso interactivo, aunque también es un potente lenguaje de scripting.",
        githubLink: "https://github.com/zsh-users/zsh",
        instalacion: "pkg install zsh"
    },
    {
        nombre: "Oh My Zsh",
        descripcion: "Un framework de código abierto y dirigido por la comunidad para gestionar tu configuración de Zsh.",
        githubLink: "https://github.com/ohmyzsh/ohmyzsh",
        instalacion: "sh -c '$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/install.sh)'"
    },
    {
        nombre: "Screenfetch",
        descripcion: "Una herramienta de línea de comandos para mostrar información del sistema y un logo ASCII de tu distribución.",
        githubLink: "https://github.com/KittyKatt/screenFetch",
        instalacion: "pkg install screenfetch"
    },
    {
        nombre: "Fastfetch",
        descripcion: "Una herramienta de obtención de sistema escrita en C, que muestra estadísticas del sistema de forma rápida.",
        githubLink: "https://github.com/fastfetch-cli/fastfetch",
        instalacion: "pkg install fastfetch"
    },
    {
        nombre: "W3m",
        descripcion: "Un navegador de texto con emulación de tabla.",
        githubLink: "https://github.com/tats/w3m",
        instalacion: "pkg install w3m"
    },
    {
        nombre: "Lynx",
        descripcion: "Un navegador web basado en texto.",
        githubLink: "https://invisible-island.net/lynx/",
        instalacion: "pkg install lynx"
    },
    {
        nombre: "Midnight Commander",
        descripcion: "Un gestor de archivos visual para la terminal.",
        githubLink: "https://github.com/MidnightCommander/mc",
        instalacion: "pkg install mc"
    }
];

const herramientasSection = document.getElementById('herramientas');
const detallesSection = document.getElementById('detalles-herramienta');
const detallesTitulo = detallesSection.querySelector('h2');
const detallesDescripcion = detallesSection.querySelector('#descripcion');
const detallesGithubLink = detallesSection.querySelector('#github-link');
const detallesInstalacion = detallesSection.querySelector('#instalacion');

function mostrarDetalles(index) {
    const herramienta = herramientasData[index];
    detallesTitulo.textContent = herramienta.nombre;
    detallesDescripcion.textContent = herramienta.descripcion;
    detallesGithubLink.href = herramienta.githubLink;
    detallesGithubLink.textContent = herramienta.githubLink.split('/').pop(); // Muestra solo el nombre del repo
    detallesInstalacion.textContent = herramienta.instalacion;
    herramientasSection.classList.add('oculto');
    detallesSection.classList.remove('oculto');
}

function mostrarLista() {
    herramientasSection.classList.remove('oculto');
    detallesSection.classList.add('oculto');
}

// Generar los botones de las herramientas dinámicamente
herramientasData.forEach((herramienta, index) => {
    const boton = document.createElement('button');
    boton.textContent = herramienta.nombre;
    boton.onclick = () => mostrarDetalles(index);
    herramientasSection.appendChild(boton);
});
