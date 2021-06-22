import React from "react";
import { DiFirebase, DiReact, DiZend } from "react-icons/di";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";
import {
  SiNextDotJs,
  SiApollographql,
  SiGraphql,
  SiHtml5,
  SiCss3,
  SiSass,
  SiAdobe,
  SiJava,
} from "react-icons/si";

const Technologies = () => (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle style={{ padding: "12px 0px" }}>Technologies</SectionTitle>
    <SectionText>
      I have worked with a range a technologies in the web development world.
    </SectionText>
    <List>
      <ListItem>
        <picture>
          <DiReact size="3rem" style={{ marginRight: "3px" }} />
          <SiNextDotJs size="3rem" style={{ marginRight: "5px" }} />
          <SiApollographql size="3rem" style={{ marginRight: "5px" }} />
          <SiGraphql size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Currently</ListTitle>
          <ListParagraph>
            React.js, Next.js, Apollo GraphQL, getstream
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <SiHtml5 size="3rem" style={{ marginRight: "5px" }} />
          <SiCss3 size="3rem" style={{ marginRight: "5px" }} />
          <SiSass size="3rem" style={{ marginRight: "5px" }} />
          <SiJava size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Familiar</ListTitle>
          <ListParagraph>HTML5, CSS3, SASS, C, Java </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <SiAdobe size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>UI/UX</ListTitle>
          <ListParagraph>
            Experience with <br />
            tools like Adobe,
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider colorAlt style={{ marginTop: "50px" }} />
  </Section>
);

export default Technologies;