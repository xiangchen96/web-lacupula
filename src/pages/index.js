import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => {
  const commonStyle = "bg-white inline-block py-2 px-4 font-semibold"
  const active = "border-l border-t border-r rounded-t text-gray-700"
  const inactive = "text-gray-500 hover:text-gray-800"
  let lang
  if (typeof window !== `undefined`) {
    lang = window.location.hash
  }
  if (!["#es", "#en", "#de", "#dim", "#dessert", "#wines"].includes(lang))
    lang = "#es"
  lang = lang.substring(1)
  return (
    <Layout>
      <SEO title="Home" />
      <ul className="flex border-b flex-wrap">
        <li className={`${lang === "es" ? "-mb-px" : ""} mr-1`}>
          <a
            className={`${commonStyle} ${lang === "es" ? active : inactive}`}
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
        <li className={`${lang === "dim" ? "-mb-px" : ""} mr-1`}>
          <a
            className={`${commonStyle} ${lang === "dim" ? active : inactive}`}
            href="#dim"
          >
            Dim sum
          </a>
        </li>
        <li className={`${lang === "wines" ? "-mb-px" : ""} mr-1`}>
          <a
            className={`${commonStyle} ${lang === "wines" ? active : inactive}`}
            href="#wines"
          >
            Wines/Vinos
          </a>
        </li>
        <li className={`${lang === "dessert" ? "-mb-px" : ""} mr-1`}>
          <a
            className={`${commonStyle} ${
              lang === "dessert" ? active : inactive
            }`}
            href="#dessert"
          >
            Desserts
          </a>
        </li>
      </ul>
      {["es", "en", "de"].includes(lang) && (
        <img
          className="mx-auto"
          className="xl:w-2/3 mx-auto"
          alt=""
          src="/drinks.jpg"
        />
      )}
      {[1, 2, 3, 4].map(k => (
        <img
          alt=""
          key={k}
          className="xl:w-2/3 mx-auto"
          src={`/menu-${lang}-${k}.jpg`}
        />
      ))}

      {["es", "en", "de"].includes(lang) && (
        <img className="mx-auto" alt="" src="/allergens.jpg" />
      )}
      {lang === "dim" &&
        [1, 2, 3, 4].map(k => (
          <img
            alt=""
            className="xl:w-2/3 mx-auto"
            key={k}
            src={`/dim-${k}.jpeg`}
          />
        ))}
      {lang === "wines" && (
        <img alt="" className="xl:w-2/3 mx-auto" src={`/wines.jpg`} />
      )}
      {lang === "dessert" &&
        [1, 2, 3, 4, 5].map(k => (
          <img
            alt=""
            className="xl:w-2/3 mx-auto"
            key={k}
            src={`/dessert-${k}.jpg`}
          />
        ))}
    </Layout>
  )
}
export default IndexPage
