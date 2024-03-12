import { Twitter, Facebook, Instagram, Linkedin, Youtube, LucideProps } from 'lucide-react';
import { HtmlProps } from 'next/dist/shared/lib/html-context.shared-runtime';
import { FC, HTMLProps, PropsWithChildren, ReactHTMLElement } from 'react';

type CommonSocialIcon =
  | 'Twitter'
  | 'Facebook'
  | 'Instagram'
  | 'Linkedin'
  | 'Youtube';

interface SocialIconProps extends LucideProps {
  iconName: CommonSocialIcon | string;
}
const SocialIcon = ({ iconName, ...rest }: SocialIconProps): JSX.Element => {
  switch (iconName) {
    case 'Twitter':
      return <Twitter {...rest} />;
    case 'Facebook':
      return <Facebook {...rest} />;
    case 'Instagram':
      return <Instagram {...rest} />;
    case 'Linkedin':
      return <Linkedin {...rest} />;
    case 'Youtube':
      return <Youtube {...rest} />;

    default:
      break;
  }
  return <></>;
};

export default SocialIcon;
