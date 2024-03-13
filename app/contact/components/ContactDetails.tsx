import { Mail, MapPin, Phone } from 'lucide-react';

const contacts = [
  {
    id: 1,
    name: 'Ason, Kathmandu, Nepal (UTC+05:45)',
    icon: <MapPin />,
  },
  {
    id: 2,
    name: 'bullseye405@gmail.com',
    icon: <Mail />,
  },
  // {
  //   id: 3,
  //   name: '1234567890',
  //   icon: <Phone />,
  // },
  
];

const ContactDetails = () => {
  return (
    <div className="w-full lg:w-1/2">
      <div className="text-left max-w-xl px-6">
        <h2 className="font-medium text-2xl text-primary-dark dark:text-primary-light mt-12 mb-8">
          Contact details
        </h2>
        <ul>
          {contacts.map((contact) => (
            <li key={contact.id} className="flex">
              <i className="text-2xl text-gray-500 dark:text-gray-400 mr-4">
                {contact.icon}
              </i>
              <span className="text-lg mb-4 text-ternary-dark dark:text-ternary-light">
                {contact.name}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ContactDetails;
