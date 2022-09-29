import CardCustom from "../components/CustomCard";
import Section from "../components/Section";

function Roadmap() {
  return (
    <Section>
      <h1 className="col-12 text-center text-dark text-opacity-75">
        Trilha React
      </h1>
      <CardCustom
        id="curso1"
        title="1 - Algoritmo e Lógica de Programação do Absoluto ZERO! Completo"
        text="Aprenda Algoritmo, Lógica de Programação e muito mais no curso que vai te ensinar de forma fácil a programar do Zero."
        imgSrc="/assets/curso1.jpg"
        href="https://www.udemy.com/course/aprenda-programacao-do-absoluto-zero-o-seu-primeiro-curso/"
      />
      <CardCustom
        id="curso2"
        title="2 - Curso Web Moderno Completo com JavaScript 2022 + Projetos"
        text="Domine Web com 15 Cursos + Projetos: Javascript Angular React Next Vue Node HTML CSS jQuery Bootstrap Webpack Gulp MySQL."
        imgSrc="/assets/curso2.jpg"
        href="https://www.udemy.com/course/curso-web/"
      />
      <CardCustom
        id="curso3"
        title="3 - Curso React + Redux: Fundamentos e 2 Apps do Absoluto ZERO!"
        text="Aprenda React Js, Redux, Webpack, Redux-Form, MongoDB, Express, Node e Vários exercícios práticos e Duas Apps do ZERO!"
        imgSrc="/assets/curso3.jpg"
        href="https://www.udemy.com/course/react-redux-pt/"
      />
      <CardCustom
        id="curso4"
        title="4 - React Native: Desenvolva APPs Nativas para Android e iOS"
        text="Aprenda os fundamentos de React Native, boas práticas e construa várias aplicações nativas para Android e iOS usando JS!"
        imgSrc="/assets/curso4.jpg"
        href="https://www.udemy.com/course/curso-react-native/"
      />
      <CardCustom
        id="curso5"
        title="5 - Curso Completo do Desenvolvedor NodeJS e MongoDB"
        text="Aprenda a criar sites e sistemas web utilizando a plataforma NodeJS e o banco de dados MongoDB"
        imgSrc="/assets/curso5.jpg"
        href="https://www.udemy.com/course/curso-completo-do-desenvolvedor-nodejs/"
      />
    </Section>
  );
}

export default Roadmap;
