import Paragraph from "@/components/Paragraph";
import Heading from "@/components/Heading";

interface EmailTemplateProps {
  name: string;
  message: string;
  email: string;
}

export function EmailTemplate({ name, message, email }: EmailTemplateProps) {
  return (
    <div className="flex flex-col gap-2">
      <Paragraph>
        {name} contacted you concerning the following topic:
      </Paragraph>
      <Paragraph>Name: {name}</Paragraph>
      <Paragraph>E-Mail: {email}</Paragraph>
      <Paragraph>Message: {message}</Paragraph>
    </div>
  );
}
