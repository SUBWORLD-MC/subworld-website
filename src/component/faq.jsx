import React, { useState } from "react";

function Faq() {
  const [openQuestions, setOpenQuestions] = useState([]);

  // Массив с вашими вопросами и ответами
  const questions = [
    {
      question: "Как попасть на сервер?",
      answer:
        "Чтобы попасть на сервер: зарегистрируйтесь на сайте, скачайте лаунчер, выберите сервер в списке и нажмите 'Играть'.",
    },
    {
      question: "Какие системные требования?",
      answer: "Для игры требуется минимальная версия Windows 8, 8 GB RAM и 2 GB видеопамяти.",
    },
    {
      question: "Как изменить ник на сервере?",
      answer:
        "Для изменения ника на сервере откройте настройки аккаунта в лаунчере и нажмите 'Изменить ник'.",
    },
    {
      question: "Как получить бонусы за регистрацию?",
      answer: "После регистрации на сайте, вы получаете бонусы для новичков в личном кабинете.",
    },
    {
      question: "Как связаться с техподдержкой?",
      answer:
        "Вы можете написать в нашем официальном Discord-канале или отправить запрос через форму на сайте.",
    },
  ];

  const handleToggle = (index) => {
    setOpenQuestions((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
  };

  return (
    <div className="container">
      <div className="container4">
        <div className="faq">
          {questions.map((item, index) => (
            <React.Fragment key={index}>
              <div className="line"></div>
              <div
                className="cont-faq"
                onClick={() => handleToggle(index)}
                style={{ cursor: "pointer" }}
              >
                <div className="cont-a">
                  <p>{item.question}</p> {/* Выводим вопрос */}
                  <img
                    src="./svg/right.svg"
                    className="strelca1"
                    style={{
                      transform: openQuestions.includes(index)
                        ? "rotate(0deg)"
                        : "rotate(90deg)",
                      transition: "transform 0.3s ease",
                    }}
                    alt="стрелка"
                  />
                </div>
                <div
                  className={`p-description ${
                    openQuestions.includes(index) ? "open" : "closed"
                  }`}
                >
                  {item.answer} {/* Выводим ответ */}
                </div>
              </div>
            </React.Fragment>
          ))}
          <div className="line"></div>
        </div>
        <div className="faq-link">
          <div className="row">
            <div className="image-link">
              <img src="./svg/link.svg" alt="иконка ссылки" />
            </div>
            <img
              style={{ display: "block" }}
              src="./svg/g.svg"
              alt="иконка"
            />
            <p className="title-text">Остались вопросы?</p>
            <p className="description-text">
              Узнай больше на нашем дискорд сервере
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Faq;
