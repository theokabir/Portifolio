export const lang = {

  ptBR: {
    lang: "Português",
    lc: "pt",
    opt: "English",
    ol: "en",
    navbar: {
      home: "início",
      resume: "currículo",
      language: "idioma",
    },
    home: {
      title1: "Principais tecnologias",
      parallax: {
        title: "Oi, sou Théo Kabir",
        text: "Esse site foi criado como apresentação de minhas habilidades, competencias e currículo",
      },
      noInfo: {
        title: "Programação",
        content: "Clique nos ícones das tecnologias para mais detalhes"
      },
      react: {
        title: "ReactJS",
        content: "O ReactJS é um framework javascript criado e mantido pelo Facebook. Tem como principal função facilitar e otimizar o processo de criação de sites SPA (Single Page Aplication). Esta página, por exemplo, é construida em React."
      },
      next: {
        title: "NextJS",
        content: "O NextJS é um framework javascript criado em cima do ReactJS. Sua principal função é fazer sites renderizados no lado lado do servidor, o Server side rendering ou SSR. Hoje em dia, a função que mais brilha dentro do Next é o Static Site generator, ou SSG, fazendo o site ser capaz de gerar a página com requisições apenas a cada periodo de tempo pré-definido, sendo extrtemamente rápido e leve para o back-end."
      },
      express: {
        title: "Express",
        content: "Express é um framework javascript minimalista para o back-end. Ele é utilizado para criar APIs, costumo utilizá-la junto ao banco de dados não relacional mongodb."
      },
      tailwind: {
        title: "Tailwind",
        content: "O Tailwind é um framework css feito para agilizar o processo de estilização do front-end, ele funciona com comandos simples fazendo desnecessário a utilização de arquivos CSS na maioria das vezes."
      }
    },
    notFound: (
      <p className="text-lg">
        Essa página não existe
        <br />
        você será redirecionado para a página inicial em estantes
      </p>
    ),
    footer: {
      by: "por",
      contact: "contato"
    }
  },

  enUS: {
    lang: "English",
    lc: "en",
    opt: "Potuguês",
    ol: "pt",
    navbar: {
      home: "home",
      resume: "resume",
      language: "language"
    },
    home: {
      title1: "Main Technologies",
      parallax: {
        title: "Hi, I'm Théo Kabir",
        text: "This site was created as a presentation of my skills, competences and resume",
      },
      noInfo: {
        title: "Programming",
        content: "Click on technology icons for more details."
      },
      react: {
        title: "ReactJS",
        content: "ReactJS is a javascript framework created and maintained by Facebook. Its main function is facilitate and optimize the process of creating SPA (Single Page Application) sites. This page, for example, is built in React."
      },
      next: {
        title: "NextJS",
        content: "NextJS is a javascript framework built on top of ReactJS. Its main function is to make SSR(Server Side Rendering) websites. Nowadays, the function that shines most within Next is the Static Site generator, or SSG, making the site be able to generate the page with requests only at each pre-defined period of time, being extremely fast and light for the back-end."
      },
      express: {
        title: "Express",
        content: "Express is a minimalist javascript framework for the backend. It is used to create APIs. I usually use it with the NoSQL database mongodb."
      },
      tailwind: {
        title: "Tailwind",
        content: "Tailwind is a css framework designed to streamline the front-end styling process, it works with simple commands making it unnecessary to use CSS files most of the time."
      }
    },
    notFound: (
      <p className="text-lg">
        That page doesn't exist
        <br />
        You will be redirected to the home page on shelves
      </p>
    ),
    footer: {
      by: "by",
      contact: "contact"
    }
  },

}