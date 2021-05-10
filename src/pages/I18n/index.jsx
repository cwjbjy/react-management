import React from "react";
import i18n from "i18next";
import Backend from "i18next-xhr-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { useTranslation, initReactI18next } from "react-i18next";
import { Card, Button } from "antd";
import './index.scss'
i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    lng: "zh",
    interpolation: {
      escapeValue: false,
    },
  });

const I18n = () => {

  const { t } = useTranslation();
  
  return (
    <section>
      <Card hoverable>
        <Button
          type="primary"
          size="large"
          onClick={() =>
            i18n.changeLanguage(i18n.language === "en" ? "zh" : "en")
          }
        >
          {t("btn")}
        </Button>
        <div className="frontArea">
          <strong>{t("title")}</strong>
        </div>
        <div className="frontArea">
          <em>{t("title1")}</em>
        </div>
        <p>{t("p1")}</p>
        <p>{t("p2") }</p>
        <p>{t("p3")}</p>
        <p>{t("p4")}</p>
      </Card>
    </section>
  );
};

export default I18n;
