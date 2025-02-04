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
  username?: string;
}

export default function WaitlistWelcomeEmail({
  username = "book lover",
}: WaitlistWelcomeEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>
        Welcome to thefalse.net waitlist - Your book journey is about to begin!
      </Preview>
      <Body style={main}>
        <Container style={container}>
          <Img
            src="https://ltord0pu249uzgxe.public.blob.vercel-storage.com/thefalse/Frame%204-Lvv1UdBirhfbifS9QE8CNvP7W8wXR8.png"
            width="192"
            height="192"
            alt="thefalse.net"
            style={logo}
          />

          <Heading style={heading}>You're on the list!</Heading>

          <Text style={greeting}>Hi {username} 👋</Text>

          <Text style={paragraph}>
            Thank you for joining the waitlist for thefalse.net. We're excited
            to have you as part of our growing community of book enthusiasts!
          </Text>

          <Text style={paragraph}>Here's what you can look forward to:</Text>

          <ul style={list}>
            <li style={listItem}>Early access to our platform</li>
            <li style={listItem}>
              Exclusive updates on our development progress
            </li>
            <li style={listItem}>Special offers for waitlist members</li>
            <li style={listItem}>
              The opportunity to shape the future of book sharing
            </li>
          </ul>

          <Text style={paragraph}>
            We're working hard to create the best possible experience for book
            lovers like you. We'll keep you updated on our progress and let you
            know as soon as we're ready to welcome you to thefalse.net.
          </Text>

          <Text style={paragraph}>
            In the meantime, why not follow us on social media for the latest
            news and bookish discussions?
          </Text>

          <Section style={buttonContainer}>
            <Button style={button} href="https://twitter.com/thefalsedotnet">
              Follow us on Twitter
            </Button>
          </Section>

          <Text style={paragraph}>
            If you have any questions or suggestions, feel free to reply to this
            email. We'd love to hear from you!
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
  textTransform: "lowercase" as "lowercase",
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

const list = {
  margin: "24px 0",
  padding: "0",
  listStyle: "none",
};

const listItem = {
  fontSize: "16px",
  lineHeight: "24px",
  color: "#484848",
  marginBottom: "12px",
  paddingLeft: "24px",
  position: "relative" as const,
  "::before": {
    content: "•",
    position: "absolute",
    left: "0",
    color: "#dc2626",
  },
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
