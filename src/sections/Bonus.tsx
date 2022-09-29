import CardCustom from "../components/CustomCard";
import Section from "../components/Section";

function Bonus() {
  return (
    <Section id="extras">
      <h1 className="col-12 text-center text-dark text-opacity-75">Extras</h1>
      <CardCustom
        title="Extra 1 - Git e Github para iniciantes"
        text="Tudo que você precisa para começar a versionar seus arquivos e contribuir com a comunidade opensource."
        imgSrc="/assets/extra1.jpg"
        href="https://www.udemy.com/course/git-e-github-para-iniciantes/"
      />
      <CardCustom
        title="Extra 2 - Utilizando Styled Components (CSS-in-JS) no ReactJS e React Native | Diego Fernandes"
        text="O Styled Components é uma biblioteca feita para React/React Native que permite a criação de componentes estilizados garantindo várias melhoras na produtividade com integrações aos funcionamentos do React em si."
        imgSrc="/assets/extra2.jpg"
        href="https://www.youtube.com/watch?v=R3S8DEzEn6s"
      />
    </Section>
  );
}

export default Bonus;
