import React from "react";
import "./ResumePage.css"
import resume from "../../assets/NestorMartinezResume.pdf"

export default function ResumePage() {
  return (
    <iframe src={resume} title="description"/>
  );
}

