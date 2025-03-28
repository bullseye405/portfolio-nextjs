import { Facebook, Instagram, Linkedin, LucideProps, Twitter, Youtube } from 'lucide-react';

type CommonSocialIcon =
  | 'Twitter'
  | 'Facebook'
  | 'Instagram'
  | 'Linkedin'
  | 'Youtube';

interface SocialIconProps extends LucideProps {
  iconName: CommonSocialIcon;
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
