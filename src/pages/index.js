import React, { useState, useEffect } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const commonStyle = "bg-white inline-block py-2 px-4 font-semibold"
const active = "border-l border-t border-r rounded-t text-gray-700"
const inactive = "text-gray-500 hover:text-gray-800"

const IndexPage = () => {
  const [lang, setLang] = useState("")

  useEffect(() => {
    let hash
    if (typeof window !== "undefined") {
      hash = window.location.hash
    }
    if (!["#es", "#en", "#de", "#dim", "#dessert", "#wines"].includes(hash))
      hash = "#es"
    setLang(hash.substring(1))
  }, [])

  return (
    <Layout>
      <SEO title="Home" />
      <ul className="flex border-b flex-wrap">
        <li className={`${lang === "es" ? "-mb-px" : ""} mr-1`}>
          <a
            className={`${commonStyle} ${lang === "es" ? active : inactive}`}
            href="#es"
            onClick={() => setLang("es")}
          >
            Español
          </a>
        </li>
        <li className={`${lang === "en" ? "-mb-px" : ""} mr-1`}>
          <a
            className={`${commonStyle} ${lang === "en" ? active : inactive}`}
            href="#en"
            onClick={() => setLang("en")}
          >
            English
          </a>
        </li>
        <li className={`${lang === "de" ? "-mb-px" : ""} mr-1`}>
          <a
            className={`${commonStyle} ${lang === "de" ? active : inactive}`}
            href="#de"
            onClick={() => setLang("de")}
          >
            Deutsch
          </a>
        </li>
        <li className={`${lang === "dim" ? "-mb-px" : ""} mr-1`}>
          <a
            className={`${commonStyle} ${lang === "dim" ? active : inactive}`}
            href="#dim"
            onClick={() => setLang("dim")}
          >
            Dim sum
          </a>
        </li>
        <li className={`${lang === "wines" ? "-mb-px" : ""} mr-1`}>
          <a
            className={`${commonStyle} ${lang === "wines" ? active : inactive}`}
            href="#wines"
            onClick={() => setLang("wines")}
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
            onClick={() => setLang("dessert")}
          >
            Desserts
          </a>
        </li>
        <li className={`${lang === "take" ? "-mb-px" : ""} mr-1`}>
          <a
            className={`${commonStyle} ${lang === "take" ? active : inactive}`}
            href="#take"
            onClick={() => setLang("take")}
          >
            Take Away
          </a>
        </li>
      </ul>
      <img
        className="xl:w-2/3 mx-auto"
        alt=""
        src="/drinks.jpg"
        style={{
          display: ["es", "en", "de"].includes(lang) ? "block" : "none",
        }}
      />
      {[1, 2, 3, 4].map(k => (
        <img
          alt=""
          key={k}
          className="xl:w-2/3 mx-auto"
          src={`/menu-es-${k}.jpg`}
          style={{
            display: lang === "es" ? "block" : "none",
          }}
        />
      ))}

      {[1, 2, 3, 4].map(k => (
        <img
          alt=""
          key={k}
          className="xl:w-2/3 mx-auto"
          src={`/menu-en-${k}.jpg`}
          style={{
            display: lang === "en" ? "block" : "none",
          }}
        />
      ))}

      {[1, 2, 3, 4].map(k => (
        <img
          alt=""
          key={k}
          className="xl:w-2/3 mx-auto"
          src={`/menu-de-${k}.jpg`}
          style={{
            display: lang === "de" ? "block" : "none",
          }}
        />
      ))}

      <img
        className="mx-auto"
        alt=""
        src="/allergens.jpg"
        style={{
          display: ["es", "en", "de"].includes(lang) ? "block" : "none",
        }}
      />
      {[1, 2, 3, 4].map(k => (
        <img
          alt=""
          className="xl:w-2/3 mx-auto"
          key={k}
          src={`/dim-${k}.jpeg`}
          style={{
            display: lang === "dim" ? "block" : "none",
          }}
        />
      ))}
      <img
        alt=""
        className="xl:w-2/3 mx-auto"
        src={`/wines.jpg`}
        style={{
          display: lang === "wines" ? "block" : "none",
        }}
      />
      {[1, 2, 3, 4, 5].map(k => (
        <img
          alt=""
          className="xl:w-2/3 mx-auto"
          key={k}
          src={`/dessert-${k}.jpg`}
          style={{
            display: lang === "dessert" ? "block" : "none",
          }}
        />
      ))}
      {[1, 2].map(k => (
        <img
          alt=""
          className="xl:w-2/3 mx-auto"
          key={k}
          src={`/menu-${k}.jpg`}
          style={{
            display: lang === "take" ? "block" : "none",
          }}
        />
      ))}
      <div
        class="mapouter"
        style={{
          position: "relative",
          textAlign: "right",
          margin: "auto",
          height: 500,
          width: "90%",
          maxWidth: 600,
        }}
      >
        <div
          class="gmap_canvas"
          style={{
            overflow: "hidden",
            background: "none",
            height: "100%",
            width: "100%",
          }}
        >
          <iframe
            width="100%"
            height="100%"
            id="gmap_canvas"
            src="https://maps.google.com/maps?q=hong%20kong%20caleta&t=&z=17&ie=UTF8&iwloc=&output=embed"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
          ></iframe>
        </div>
      </div>
    </Layout>
  )
}
export default IndexPage
