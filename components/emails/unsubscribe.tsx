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

export default function UnsubscribeConfirmationEmail() {
  const text = `
You've been unsubscribed from thefalse.net emails

We're sorry to see you go, but we've confirmed that you've been unsubscribed from thefalse.net emails.

You won't receive any more emails from us, except for account-related notifications that are essential to your thefalse.net experience.

Thank you for being part of our community, and we hope to see you again soon!

---

thefalse.net
`.trim();
  return (
    <Html>
      <Head />
      <Preview>You&apos;ve been unsubscribed from thefalse.net emails</Preview>
      <Body style={main}>
        <Container style={container}>
          <Img
            src="https://ltord0pu249uzgxe.public.blob.vercel-storage.com/thefalse/Frame%204-Lvv1UdBirhfbifS9QE8CNvP7W8wXR8.png"
            width="192"
            height="192"
            alt="thefalse.net"
            style={logo}
          />

          <Heading style={heading}>You&apos;ve been unsubscribed</Heading>

          <Text style={paragraph}>
            We&apos;re sorry to see you go, but we&apos;ve confirmed that
            you&apos;ve been unsubscribed from thefalse.net emails.
          </Text>

          <Text style={paragraph}>
            You won&apos;t receive any more emails from us, except for
            account-related notifications that are essential to your
            thefalse.net experience.
          </Text>

          <Text style={paragraph}>
            Thank you for being part of our community, and we hope to see you
            again soon!
          </Text>

          <Section style={divider} />

          <Section style={signatureContainer}>
            <Img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-A2qq2YFis4gXi7CiHCidWCn9R3n3Dp.png"
              width="120"
              height="auto"
              alt="thefalse.net"
              style={signatureImage}
            />
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

const main = {
  backgroundColor: "#ffffff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "40px 20px",
  maxWidth: "560px",
};

const logo = {
  margin: "0 auto",
  marginBottom: "24px",
};

const heading = {
  fontSize: "32px",
  lineHeight: "1.3",
  fontWeight: "700",
  color: "#000",
  textAlign: "center" as const,
  margin: "30px 0",
};

const greeting = {
  fontSize: "24px",
  lineHeight: "1.3",
  fontWeight: "700",
  color: "#484848",
  marginBottom: "20px",
};

const paragraph = {
  fontSize: "16px",
  lineHeight: "26px",
  color: "#484848",
  marginBottom: "20px",
};

const buttonContainer = {
  marginTop: "32px",
  marginBottom: "32px",
  textAlign: "center" as const,
};

const button = {
  backgroundColor: "#000000",
  borderRadius: "6px",
  color: "#fff",
  fontSize: "16px",
  fontWeight: "600",
  textDecoration: "none",
  textAlign: "center" as const,
  display: "inline-block",
  padding: "12px 30px",
  cursor: "pointer",
};

const divider = {
  borderBottom: "1px solid #E5E7EB",
  margin: "32px 0",
};

const signatureContainer = {
  marginTop: "32px",
  marginBottom: "32px",
  textAlign: "center" as const,
};

const signatureImage = {
  margin: "0 auto",
  width: "120px",
  height: "auto",
  opacity: 0.5,
  filter: "grayscale(100%)",
};

const footer = {
  fontSize: "13px",
  lineHeight: "22px",
  color: "#9ca3af",
  marginTop: "32px",
  textAlign: "center" as const,
};

const footerLinks = {
  fontSize: "13px",
  lineHeight: "22px",
  color: "#9ca3af",
  textAlign: "center" as const,
  marginTop: "12px",
};

const link = {
  color: "#9ca3af",
  textDecoration: "underline",
};

UnsubscribeConfirmationEmail.text = () =>
  `
You've been unsubscribed from thefalse.net emails

We're sorry to see you go, but we've confirmed that you've been unsubscribed from thefalse.net emails.

You won't receive any more emails from us, except for account-related notifications that are essential to your thefalse.net experience.

Thank you for being part of our community, and we hope to see you again soon!

---

thefalse.net
`.trim();
