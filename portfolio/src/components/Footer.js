import React from "react";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faCircleExclamation,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Footer = () => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;

  const handleLanguageChange = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <footer className="bg-[#5ba0b1] p-4 w-full">
      <div className="container mx-auto flex items-center max-w-[2560px]">
        <Link
          to="/"
          className="text-white text-2xl font-bold flex-shrink-0 no-underline hover:no-underline"
        >
          ClickDrop
        </Link>

        <div className="flex-grow flex justify-center">
          <div className="flex space-x-4">
            <Link
              to="/Contact"
              className="text-white text-lg flex items-center space-x-2 no-underline hover:no-underline"
            >
              <FontAwesomeIcon icon={faEnvelope} />
              <span>{t("footer.contact")}</span>
            </Link>
            <Link
              to="/About"
              className="text-white text-lg flex items-center space-x-2 no-underline hover:no-underline"
            >
              <FontAwesomeIcon icon={faCircleExclamation} />
              <span>{t("footer.about")}</span>
            </Link>
          </div>
        </div>

        <div className="flex-shrink-0 flex items-center space-x-4">
          {currentLanguage === "pl" ? (
            <img
              src="https://upload.wikimedia.org/wikipedia/en/thumb/1/12/Flag_of_Poland.svg/1920px-Flag_of_Poland.svg.png"
              alt={t("flag.polish")}
              className="cursor-pointer h-6"
              onClick={() => handleLanguageChange("en")}
            />
          ) : (
            <img
              src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1920px-Flag_of_the_United_States.svg.png"
              alt={t("flag.english")}
              className="cursor-pointer h-6"
              onClick={() => handleLanguageChange("pl")}
            />
          )}
        </div>
      </div>
    </footer>
  );
};

export default Footer;