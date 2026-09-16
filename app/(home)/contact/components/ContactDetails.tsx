import { SOCIALS } from '@/constants/socialLinks';
import { Mail, MapPin, Phone } from 'lucide-react';

const contacts = [
  {
    id: 1,
    label: 'Address',
    value: 'Ason, Kathmandu, Nepal',
    icon: <MapPin />,
    link: null,
  },
  {
    id: 2,
    label: 'Email',
    value: SOCIALS.mail,
    icon: <Mail />,
    link: `mailto:${SOCIALS.mail}`,
  },
  {
    id: 3,
    label: 'Phone',
    value: '+977-9840054758',
    icon: <Phone />,
    link: `tel:+9779840054758`,
  },
];

const ContactDetails = () => {
  return (
    <div className="w-full lg:w-1/2">
      <div className="max-w-xl px-6 sm:px-0">
        <h2 className="text-2xl font-semibold text-primary-dark dark:text-primary-light mt-12 mb-8">
          Contact Details
        </h2>

        <ul className="space-y-6">
          {contacts.map((contact) => (
            <li
              key={contact.id}
              className="flex items-center gap-4 text-ternary-dark dark:text-ternary-light"
            >
              <span className="text-2xl text-gray-500 dark:text-gray-400">
                {contact.icon}
              </span>

              {contact.link ? (
                <a
                  href={contact.link}
                  className="text-lg hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors duration-300"
                >
                  {contact.value}
                </a>
              ) : (
                <span className="text-lg">{contact.value}</span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ContactDetails;
