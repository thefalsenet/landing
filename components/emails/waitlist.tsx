import {
  Body,
  Button,
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

interface WaitlistWelcomeEmailProps {
  email: string;
}

export default function WaitlistWelcomeEmail({
  email,
}: WaitlistWelcomeEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>We’ll email you when a spot opens.</Preview>
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
          <Heading style={heading}>you’re on the list</Heading>

          <Text style={greeting}>Hi reader,</Text>

          <Text style={paragraph}>
            Thanks for joining the waitlist.

            TheFalse is a quiet place for readers. We’re letting people in gradually so the product stays calm and usable.

            You don’t need to do anything right now. We’ll email you when a spot opens.
          </Text>

          <Text style={paragraph}>
            If something’s unclear, you can reply to this email.
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

          <Text style={companyInfo}>
            You’re receiving this because you joined the waitlist at thefalse.net.{" "}
            <Link
              href={`https://thefalse.net/unsubscribe?email=${encodeURIComponent(email)}`}
              style={footerLink}
            >
              Unsubscribe
            </Link>
          </Text>
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

export function generateWaitlistEmailText({
  email,
}: {
  email: string;
}) {
  return `Hi reader,

Thanks for joining the waitlist.

TheFalse is a quiet place for readers. We’re letting people in gradually so things stay calm and usable.

You don’t need to do anything right now.
We’ll email you when a spot opens.

If something’s unclear, you can reply to this email.

Unsubscribe:
https://thefalse.net/unsubscribe?email=${encodeURIComponent(email)}

— TheFalse team

`;
}

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

const greeting = {
  fontSize: "18px",
  lineHeight: "1.3",
  fontWeight: "700",
  color: "#484848",
  marginBottom: "32px",
};

const paragraph = {
  fontSize: "16px",
  lineHeight: "26px",
  color: "#484848",
  margin: "12px 0",
};

const buttonContainer = {
  margin: "48px auto",
  textAlign: "center" as const,
};

const button = {
  backgroundColor: "#000000",
  color: "#fff",
  fontSize: "16px",
  fontWeight: "600",
  textDecoration: "none",
  display: "inline-block",
  padding: "12px 30px",
  cursor: "pointer",
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
