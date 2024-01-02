import {
  Body,
  Container,
  Column,
  Head,
  Heading,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Text,
  Button,
  Tailwind,
} from "@react-email/components";
import * as React from "react";
export const EmailTemplate = ({ firstName, time, details, options }) => {
  const filteredData = Object.entries(options)
    .filter(([, [value]]) => value) // Filter based on the true value
    .map(([key, [, label]]) => <Column key={key}>{label}</Column>);
  const date = new Date(time);

  const optionss = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    timeZoneName: "short",
    timeZone: "UTC",
  };

  const timeZone = new Intl.DateTimeFormat("en-US", {
    timeZoneName: "short",
  }).format(date);

  const readableDate = date.toLocaleString("en-US", optionss);

  return (
    <Tailwind>
      <Html lang="en" dir="ltr">
        <Head>
          <title>{`${firstName}, The meeting is scheduled!`}</title>
        </Head>
        <Body className="bg-black text-white mx-auto p-2 font-sans">
          <Container>
            <Section>
              <Row>
                <Column>
                  <Img
                    width="377"
                    height="212"
                    alt="max_bezs max-bezs logo "
                    src="https://raw.githubusercontent.com/maxbezs/max_bezs-website-images/main/listmax.jpg"
                  />
                  <Heading as="h1">
                    The meeting is scheduled, {firstName}!
                  </Heading>
                  <Text>
                    We received your inquiry for a consultation meeting at your
                    chosen time:
                  </Text>
                  <Heading as="h2">{readableDate}</Heading>
                  <Text>
                    Our experienced team is ready to work with you to find the
                    most effective strategies tailored to your needs for your
                    business.
                  </Text>
                  {details ? (
                    <div>
                      <Heading as="h2">Meeting details provided:</Heading>
                      <Text>&quot{details}&quot.</Text>
                    </div>
                  ) : null}

                  <Text>
                    During this meeting, we will address your specific
                    challenges and opportunities, offering insights and
                    solutions to improve your business performance.
                  </Text>
                  <Heading as="h2">Topics:</Heading>
                  <Row>{filteredData}</Row>
                  <Text>
                    Our team will contact you in order to confirm your
                    reservetion or give you further information.
                  </Text>
                  <Container className="w-fit mx-auto my-8">
                    <Link
                      className="align-baseline bg-neutral-700 rounded-lg text-white cursor-pointer select-none focus:outline-none py-3 px-4 no-underline w-fit"
                      href="mailto:contact@max-bezs.com"
                    >
                      contact@max-bezs.com
                    </Link>
                  </Container>

                  <Text className="text-center">
                    Please let us know if you have any questions. We look
                    forward to seeing you at the meeting!
                  </Text>
                </Column>
              </Row>
            </Section>
          </Container>
        </Body>
      </Html>
    </Tailwind>
  );
};

export default EmailTemplate;
