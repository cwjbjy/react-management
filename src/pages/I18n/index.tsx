import React from "react";
import i18n from "i18next";
// import Backend from "i18next-xhr-backend";
// import LanguageDetector from "i18next-browser-languagedetector";
import { useTranslation, initReactI18next } from "react-i18next";
import { Card, Button } from "antd";
import "./index.scss";

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    // the translations
    // (tip move them in a JSON file and import them)
    resources: {
      en: {
        translation: {
          "Welcome to React": "458",
          btn: "Switch Chinese",
          title:
            "Technology Stack：React,React-Redux,React-Router-Dom,Echarts,AntD,SCSS,ES6,Nodejs,Nginx,MySQL",
          title1: "Product Presentation",
          p1: "Authority management: Administrators can see the backstage management page, modify their passwords and ordinary users to operate",
          p2: "Drag and drop functionality:Drag - and - drop list options, drag - and - drop simulation box",
          p3: "Toggle theme colors: Set the theme color to the left of the top image",
          p4: "Using antd-grid layout and Flex layout to achieve screen adaptation",
        },
      },
      zh: {
        translation: {
          "Welcome to React": "458",
          btn: "切换英文",
          title:
            "技术栈：React,React-Redux,React-Router-Dom,Echarts,AntD,SCSS,ES6,Nodejs,Nginx,MySQL",
          title1: "产品介绍",
          p1: "权限管理：管理员方可看到后台管理页面，修改自己密码以及对普通用户进行操作",
          p2: "拖拽功能：可拖拽列表中选项，可拖拽模拟框",
          p3: "切换主题色：在顶部头像左侧设置主题色",
          p4: "采用antd-grid布局、flex布局实现屏幕适配",
        },
      },
    },
    lng: "zh",
    fallbackLng: "zh",

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
        <p>{t("p2")}</p>
        <p>{t("p3")}</p>
        <p>{t("p4")}</p>
      </Card>
    </section>
  );
};

export default React.memo(I18n);
