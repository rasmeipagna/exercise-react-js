import React from "react";
import PropTypes from "prop-types";
import NavSupbiotech from "../components/NavSupbiotech";
import FooterSupbiotech from "../components/FooterSupbiotech";

const Layout = ({ children }) => (
  <>
    <NavSupbiotech></NavSupbiotech>
    <main>{children}</main>
    <FooterSupbiotech></FooterSupbiotech>
    </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;