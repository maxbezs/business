import React from "react";
import {
  Html,
  Head,
  Body,
  Container,
  Section,
  Row,
  Column,
  Heading,
  Text,
  Link,
  Tailwind,
  Img,
} from "@react-email/components";

export function EmailSubscribed({ trelloUrl, name, business }) {
  return (
    <Tailwind>
      <Html lang="en" dir="ltr">
        <Head>
          <title>{`All set up, let's make dream come true!`}</title>
        </Head>
        <Body className="bg-black p-6">
          <Container alignment="center">
            <Section>
              <Row>
                <Column className=" items-center">
                  <Img
                    width="50"
                    height="50"
                    alt="max_bezs max-bezs success "
                    src="https://raw.githubusercontent.com/maxbezs/max_bezs-website-images/main/svgviewer-png-output.png"
                    className="mx-auto"
                  />
                  <Heading as="h1" className="text-white text-center font-sans">
                    Success!
                  </Heading>
                  <Text className="text-white font-sans">
                    {name} your subscription was successfully processed, and all
                    necessary tools have been set up. You can{" "}
                    <Link
                      href={trelloUrl && "google.com"}
                      className="underline font-bold text-white"
                    >
                      start making requests immediately.
                    </Link>
                  </Text>
                  <Text className="text-white font-sans">
                    The next step is to join the {business} Trello board, where
                    you will be guided through a brief tutorial and can manage
                    your subscription. Please click the button below:
                  </Text>
                  <Container className="w-fit mx-auto my-8">
                    <Link
                      href={trelloUrl}
                      className="bg-white py-2 px-4 rounded-lg text-black font-sans mx-auto"
                    >
                      Go to Trello Board
                    </Link>
                  </Container>

                  <Text className="text-white font-sans text-xs pt-6 text-center">
                    <Link
                      href={"https://business.max-bezs.com/contact-us"}
                      className="text-white underline"
                    >
                      Contact us
                    </Link>{" "}
                    or send an email to max.bezsmertnyi@gmail.com if you have
                    any issues.
                  </Text>
                </Column>
              </Row>
            </Section>
          </Container>
        </Body>
      </Html>
    </Tailwind>
  );
}
