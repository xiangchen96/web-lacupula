import React from "react"

import Layout from "../components/layout"

const IndexPage = () => {
  const commonStyle = "bg-white inline-block py-2 px-4 font-semibold"
  const active = "border-l border-t border-r rounded-t text-gray-700"
  const inactive = "text-gray-500 hover:text-gray-800"
  let lang
  if (typeof window !== `undefined`) {
    lang = window.location.hash || "#es"
  }
  if (lang) lang = lang.substring(1)
  return (
    <Layout>
      <ul className="flex border-b flex-wrap">
        <li className={`${lang === "es" ? "-mb-px" : ""} mr-1`}>
          <a
            class={`${commonStyle} ${lang === "es" ? active : inactive}`}
            href="#es"
          >
            Español
          </a>
        </li>
        <li className={`${lang === "en" ? "-mb-px" : ""} mr-1`}>
          <a
            className={`${commonStyle} ${lang === "en" ? active : inactive}`}
            href="#en"
          >
            English
          </a>
        </li>
        <li className={`${lang === "de" ? "-mb-px" : ""} mr-1`}>
          <a
            className={`${commonStyle} ${lang === "de" ? active : inactive}`}
            href="#de"
          >
            Deutsch
          </a>
        </li>
        <li className={`${lang === "take" ? "-mb-px" : ""} mr-1`}>
          <a
            className={`${commonStyle} ${lang === "take" ? active : inactive}`}
            href="#take"
          >
            Take away
          </a>
        </li>
      </ul>
      <div className="flex flex-wrap w-full justify-center">
        {[1, 2, 3, 4].map(k => (
          <img
            alt=""
            key={k}
            className="xl:w-2/3"
            src={`menu-${lang}-${k}.jpg`}
          />
        ))}

        {lang !== "take" && <img alt="" src="allergens.jpg" />}
        {lang === "take" &&
          [1, 2].map(k => <img alt="" key={k} src={`menu-${k}.jpg`} />)}
      </div>
    </Layout>
  )
}
export default IndexPage
