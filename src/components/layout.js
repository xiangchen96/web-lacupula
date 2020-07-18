/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Layout = ({ children }) => {
  return (
    <>
      <div className="mx-10 sm:mx-20 md:mx-30 lg:mx-40 py-5 max-w-full">
        <div className="sm:flex items-center flex-wrap">
          <Link className="font-bold text-3xl flex-grow" to="/">
            Restaurante Hong Kong
          </Link>
          <div className="flex-col flex sm:flex-row sm:w-64 justify-between flex-wrap">
            <a
              className="font-light text-xl hover:text-yellow-600"
              href="tel:618085634"
            >
              Tel: 618 08 56 34
            </a>
          </div>
        </div>
        <main className="py-2">{children}</main>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
