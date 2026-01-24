import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components";

export default function UnsubscribeConfirmationEmail() {
  return (
    <Html>
      <Head />
      <Preview>You&apos;ve been unsubscribed from thefalse.net emails</Preview>
      <Body style={main}>
        <Section style={logoSection}>
          <Img
            src="https://app.thefalse.net/email/footer-logo.png"
            width={141}
            height={32}
            alt="thefalse.net"
            style={logo}
          />
        </Section>
        <Container style={container}>
          <Heading style={heading}>You’ve been unsubscribed</Heading>

          <Text style={paragraph}>
            Users are allowed to leave entirely.
          </Text>

          <Text style={paragraph}>
            You won’t receive further emails from us.
            <br />
            If you unsubscribed by mistake, you can rejoin anytime at thefalse.net.
          </Text>

          <Text style={paragraph}>
            Thanks for letting us know.
          </Text>
        </Container>
        <Section style={footerSection}>
          <Link href="https://thefalse.net/help" style={footerLink}>
            Help Center
          </Link>{" "}
          •{" "}
          <Link href="https://thefalse.net/privacy" style={footerLink}>
            Privacy Policy
          </Link>{" "}
          •{" "}
          <Link href="https://thefalse.net/terms" style={footerLink}>
            Terms of Service
          </Link>
          <Text style={companyInfo}>
            Questions? Reach us at{" "}
            <Link href="mailto:bkht@thefalse.net" style={footerLink}>
              bkht@thefalse.net
            </Link>
          </Text>
        </Section>
      </Body>
    </Html>
  );
}

UnsubscribeConfirmationEmail.text = () =>
  `You’ve been unsubscribed from TheFalse emails.

You won’t receive further updates from us.

If this was a mistake, you can rejoin anytime at thefalse.net.

— TheFalse team

`;

const main = {
  backgroundColor: "#f6f8fa",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
  padding: "32px",
};

const container = {
  margin: "0 auto",
  padding: 32,
  width: "400px",
  backgroundColor: "#ffffff",
  marginBottom: "32px",
  marginTop: "32px",
  fontSize: "16px",
};

const logoSection = {
  margin: "0 auto",
  width: "400px",
  marginBottom: "32px",
};

const logo = {
  objectFit: "contain" as const,
};

const heading = {
  fontSize: "18px",
  lineHeight: "1.3",
  fontWeight: "700",
  color: "#000",
  marginBottom: "32px",
};

const paragraph = {
  fontSize: "16px",
  lineHeight: "26px",
  color: "#484848",
  margin: "12px 0",
};

const footerSection = {
  textAlign: "center" as const,
  fontSize: "14px",
  margin: "0 auto",
  width: "400px",
};

const footerLink = {
  color: "#1d9bf0",
  textDecoration: "underline",
};

const companyInfo = {
  fontSize: "12px",
  color: "#536471",
  margin: "20px 0",
};
