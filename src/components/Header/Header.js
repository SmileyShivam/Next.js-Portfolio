import Link from "next/link";
import React from "react";
import {
  AiFillGithub,
  AiFillTwitterCircle,
  AiFillLinkedin,
} from "react-icons/ai";
import { SiNextDotJs, SiDevDotTo } from "react-icons/si";
import { AppBar } from "@material-ui/core";
import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
  Span,
} from "./HeaderStyles";

const Header = () => (
  <AppBar position="sticky" style={{ backgroundColor: "#0f1624" }}>
    <Container>
      <Div1>
        <Link href="/">
          <a
            style={{
              display: "flex",
              alignItems: "center",
              color: "white",
              marginBottom: "20px",
            }}
          >
            <SiNextDotJs size="3rem" /> <Span> Portfolio</Span>
          </a>
        </Link>
      </Div1>
      <Div2>
        <li>
          <Link href="#experience">
            <NavLink>Work</NavLink>
          </Link>
        </li>
        <li>
          <Link href="#projects">
            <NavLink>Projects</NavLink>
          </Link>
        </li>
        <li>
          <Link href="#blog">
            <NavLink>Blogs</NavLink>
          </Link>
        </li>
        <li>
          <Link href="#tech">
            <NavLink>Technologies</NavLink>
          </Link>
        </li>
      </Div2>
      <Div3>
        <SocialIcons href="https://github.com/SmileyShivam">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://www.linkedin.com/in/shivam-webdev/">
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://dev.to/smileyshivam">
          <SiDevDotTo size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://twitter.com/shivam_tsx">
          <AiFillTwitterCircle size="3rem" />
        </SocialIcons>
      </Div3>
    </Container>
  </AppBar>
);

export default Header;
