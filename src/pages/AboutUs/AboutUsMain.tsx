import style from "./AboutUsMain.module.scss";

export default function AboutUs() {
  return (
    <div className={style.AboutUs__Container}>
      <h1 className={style.AboutUs__Title}>FullStack Autos</h1>

      {/*  Welcome */}
      <div className={style.AboutUs__Infoblock}>
        <h2 className={style.AboutUs__Header2}>
          Добро пожаловать в наш автосалон
        </h2>
        <div className={style.AboutUs__Content}>
          <p className={style.AboutUs__AdditionalInfo}>
            Мы рады приветствовать вас на страницах нашего нового автосалона! Мы
            открыты для вас с целью предложить высококачественные автомобили от
            лучших производителей и обеспечить вам комфортную покупку.
          </p>
          <img
            className={style.AboutUs__Photo}
            src="../public/images/220D.png"
            alt="photo"
          />
        </div>
      </div>

      {/* our choice */}

      <div
        className={style.AboutUs__Infoblock}
        id={style.AboutUs_Second_Infoblock}
      >
        <h2 className={style.AboutUs__Header2}>Наш выбор автомобилей</h2>
        <div className={style.AboutUs__Content}>
          <p className={style.AboutUs__AdditionalInfo}>
            Наш автосалон предлагает вам широкий выбор автомобилей от известных
            производителей, включая Toyota, Honda, Hyundai и другие. Мы выбрали
            только лучшие модели, чтобы обеспечить вам комфорт и безопасность на
            дороге.
          </p>
          <img
            src="../public/images/220D.png"
            alt="photo"
            className={style.AboutUs__Photo}
          />
        </div>
      </div>
      {/* our services */}

      <div
        className={style.AboutUs__Infoblock}
        id={style.AboutUs_Third_Infoblock}
      >
        <h2 className={style.AboutUs__Header2}>Услуги и сервис</h2>
        <div className={style.AboutUs__Content}>
          <p className={style.AboutUs__AdditionalInfo}>
            Мы рады приветствовать вас на страницах нашего нового автосалона! Мы
            открыты для вас с целью предложить высококачественные автомобили от
            лучших производителей и обеспечить вам комфортную покупку.
          </p>
          <img
            src="../public/images/220D.png"
            alt="photo"
            className={style.AboutUs__Photo}
          />
        </div>
      </div>

      {/* finance */}

      <div
        className={style.AboutUs__Infoblock}
        id={style.AboutUs_Fourth_Infoblock}
      >
        <h2 className={style.AboutUs__Header2}>Финансовые возможности</h2>
        <div className={style.AboutUs__Content}>
          <p className={style.AboutUs__AdditionalInfo}>
            Мы понимаем, что покупка автомобиля - это значимый шаг, и мы готовы
            помочь вам в этом. Мы предлагаем вам различные финансовые
            возможности, включая кредиты и лизинг.
          </p>
          <img
            src="../public/images/220D.png"
            alt="photo"
            className={style.AboutUs__Photo}
          />
        </div>
      </div>

      {/* contact */}

      <div
        className={style.AboutUs__Infoblock}
        id={style.AboutUs_Fifth_Infoblock}
      >
        <h2 className={style.AboutUs__Header2}>Связь с нами</h2>
        <div className={style.AboutUs__Content}>
          <p className={style.AboutUs__AdditionalInfo}>
            Мы рады получать от вас сообщения и вопросы. Пожалуйста, не
            стесняйтесь связаться с нами, если у вас возникли какие-либо вопросы
            или вам нужно дополнительная информация.
          </p>
          <img
            src="../public/images/220D.png"
            alt="photo"
            className={style.AboutUs__Photo}
          />
        </div>
      </div>
    </div>
  );
}
