import { useState } from 'react'
import '/src/Components/Styles/Common.css'
import '/src/Components/Styles/Homepage.css'

import React from "react";
import { CardGridIcon } from "./CardGridIcon";
import { HeaderAuth } from "./HeaderAuth";
import { HeroImage } from "./HeroImage";
import { NavigationPill } from "./NavigationPill";
import { TextLinkList } from "./TextLinkList";
import { TextLinkListItem } from "./TextLinkListItem";
import { TextStrong } from "./TextStrong";
import "./style.css";


function Homepage() {
  const [count, setCount] = useState(0)

  return (
    
      <div className="examples-landing">
        <header className="header">
          <img className="block" alt="Block" src="block.svg" />
          <div className="navigation-pill-list">
            <NavigationPill className="navigation-pill-instance" label="Community" state="default" />
            <NavigationPill className="navigation-pill-instance" label="Contact" state="default" />
          </div>
          <HeaderAuth state="logged-out" />
        </header>
        <HeroImage
          buttonGroupAlignStartClassName="hero-image-3"
          className="hero-image-instance"
          platform="desktop"
          textContentTitleAlignCenterClassName="hero-image-2"
          textContentTitleSubtitle="Built by Alec Burns"
          textContentTitleTitle="Welcome to Yapper"
        />
        <div className="textarea-field">
          <div className="label">What is Yapper?</div>
          <div className="textarea">
            <p className="value">
              Yapper is an open-source, free to use writing assistant designed to help writers streamline their writing
              process. Yapper provides simple yet _ questions for users to answer as detailed as they like, and then build
              up ideas as they go. No matter your level of experience
            </p>
            <img className="drag" alt="Drag" src="drag.svg" />
          </div>
        </div>
        <CardGridIcon className="card-grid-icon-instance" platform="desktop" />
        <footer className="footer">
          <img className="img" alt="Title" src="title.svg" />
          <div className="text-link-list-2">
            <div className="text-strong-instance-wrapper">
              <TextStrong className="text-strong-3" text="Use cases" />
            </div>
            <TextLinkListItem text="UI design" />
            <TextLinkListItem text="UX design" />
            <TextLinkListItem text="Wireframing" />
            <TextLinkListItem text="Diagramming" />
            <TextLinkListItem text="Brainstorming" />
          </div>
          <TextLinkList
            className="text-link-list-instance"
            density="default"
            textLinkListItemText="Design"
            textLinkListItemText1="Prototyping"
            textLinkListItemText2="Development features"
            textLinkListItemText3="Design systems"
            textLinkListItemText4="Collaboration features"
            textLinkListItemText5="Design process"
            textLinkListItemText6="FigJam"
            textStrongText="Explore"
          />
          <TextLinkList
            className="text-link-list-instance"
            density="default"
            textLinkListItemText="Blog"
            textLinkListItemText1="Best practices"
            textLinkListItemText2="Colors"
            textLinkListItemText3="Color wheel"
            textLinkListItemText4="Support"
            textLinkListItemText5="Developers"
            textLinkListItemText6="Resource library"
            textStrongText="Resources"
          />
        </footer>
      </div>
  )
}

export default Homepage
