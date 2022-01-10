import Image from 'next/image';
import ArticleStyled from './styled';

const OurArticles = () => {
  return (
    <ArticleStyled>
      <section className="articless">
        <div className="laboratory">
          <Image
            id="img-lab"
            src={'/Images/laboratory.png'}
            width={200}
            height={200}
            alt="No photo"
          />
          <article>
            <div className="articles">
              <h3>Disease detection, check up in the laboratory</h3>
              <p className="blog">
                Infectious diseases are caused by pathogenic microorganisms and can spread from
                person to person. They include zoonotic diseases, which are infectious diseases in
                animals that can cause illness when transmitted to humans. Over the course of
                TEPHINET history we have supported disease-specific projects that reflect global
                health priorities in a given year. Recently, our work has included support for
                eliminating hepatitis, ending polio transmission, strengthening surveillance for
                Zika and influenza, and controlling healthcare-associated infections (HAI) and
                antimicrobial resistance (AMR). Our work in these areas includes providing technical
                and logistical support for trainings, hiring and supervising research field teams,
                and administering disease-specific mini-grants to FETP trainees and graduates (for
                example, to conduct Zika detection and control activities).
              </p>
              <button>
                <a className="read-more-btn">Read More</a>
              </button>
            </div>
          </article>
        </div>
        <div className="herbal">
          <Image id="img-herb" src={'/Images/herbal.png'} width={200} height={200} alt="No photo" />
          <article>
            <div className="articles">
              <h3>Herbal medicines that are safe for consumption</h3>
              <p className="blog">
                Infectious diseases are caused by pathogenic microorganisms and can spread from
                person to person. They include zoonotic diseases, which are infectious diseases in
                animals that can cause illness when transmitted to humans. Over the course of
                TEPHINET history we have supported disease-specific projects that reflect global
                health priorities in a given year. Recently, our work has included support for
                eliminating hepatitis, ending polio transmission, strengthening surveillance for
                Zika and influenza, and controlling healthcare-associated infections (HAI) and
                antimicrobial resistance (AMR). Our work in these areas includes providing technical
                and logistical support for trainings, hiring and supervising research field teams,
                and administering disease-specific mini-grants to FETP trainees and graduates (for
                example, to conduct Zika detection and control activities).
              </p>
              <a className="read-more-btn">Read More</a>
            </div>
          </article>
        </div>
        <div className="skin">
          <Image id="img-face" src={'/Images/skin.png'} width={200} height={200} alt="No photo" />
          <article>
            <div className="articles">
              <h3>Natural care for healthy facial skin</h3>
              <p className="blog">
                Infectious diseases are caused by pathogenic microorganisms and can spread from
                person to person. They include zoonotic diseases, which are infectious diseases in
                animals that can cause illness when transmitted to humans. Over the course of
                TEPHINET history we have supported disease-specific projects that reflect global
                health priorities in a given year. Recently, our work has included support for
                eliminating hepatitis, ending polio transmission, strengthening surveillance for
                Zika and influenza, and controlling healthcare-associated infections (HAI) and
                antimicrobial resistance (AMR). Our work in these areas includes providing technical
                and logistical support for trainings, hiring and supervising research field teams,
                and administering disease-specific mini-grants to FETP trainees and graduates (for
                example, to conduct Zika detection and control activities).
              </p>
              <a className="read-more-btn">Read More</a>
            </div>
          </article>
        </div>
      </section>
    </ArticleStyled>
  );
};

export default OurArticles;
