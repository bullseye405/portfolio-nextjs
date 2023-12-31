import ClientCard from './ClientCard';
import { IClient, clientsData, clientsHeading } from './clientsData';

const Clients = () => {
  return (
    <div className="container mx-auto">
      <div className="mt-10 sm:mt-20">
        <p
          className="font-medium text-2xl sm:text-3xl text-center
        text-primary-dark dark:text-primary-light
        "
        >
          {clientsHeading}
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 mt-10 sm:mt-14 gap-2">
          {clientsData.map((client: IClient) => (
            <ClientCard key={client.id} {...client} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Clients;
