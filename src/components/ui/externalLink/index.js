import React from "react"

import "./index.css"

const ExternalLink = ({ label, link }) => (
  <a
    className="external-link"
    href={link}
    rel="noopener noreferrer"
    target="_blank"
  >
    {label}
    <svg
      className="external-link__icon"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#000000"
      strokeWidth="2"
      strokeLinecap="square"
      strokeLinejoin="arcs"
    >
      <path d="M7 17l9.2-9.2M17 17V7H7" />
    </svg>
  </a>
)

export default ExternalLink
