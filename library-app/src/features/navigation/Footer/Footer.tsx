import { Facebook, Instagram, Twitter, YouTube } from "@mui/icons-material";
import React from "react";

import "./Footer.css"

export const Footer: React.FC = () => {
  return (
    <div className="footer">
      <p className="footer-text">123 Library Street, TW 1500</p>
      <p className="footer-text">Return Policy</p>
      <p className="footer-text">Late Fees</p>
      <p className="footer-text">Library Card Conditions</p>
      <div className="footer-social-cluster">
        <p className="footer-social-text">Socials</p>
        <YouTube className="footer-social" />
        <Twitter className="footer-social" />
        <Facebook className="footer-social" />
        <Instagram className="footer-social" />
      </div>
    </div>
  );
};
