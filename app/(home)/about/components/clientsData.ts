// Import images
const AmazonImage = '/images/brands/amazon_gray.png';
const SonyImage = '/images/brands/sony_gray.png';
const AdidasImage = '/images/brands/adidas_gray.png';
const FilaImage = '/images/brands/fila_gray.png';
const NBImage = '/images/brands/nb_gray.png';
const SamsungImage = '/images/brands/samsung_gray.png';
const CanonImage = '/images/brands/canon_gray.png';
const PumaImage = '/images/brands/puma_gray.png';

export const clientsHeading = 'Some of the brands that trust me';

export interface IClient {
  id: number;
  title: string;
  img: string;
}
export const clientsData: IClient[] = [
  {
    id: 1,
    title: 'Amazon',
    img: AmazonImage,
  },
  {
    id: 2,
    title: 'Sony',
    img: SonyImage,
  },
  {
    id: 3,
    title: 'Adidas',
    img: AdidasImage,
  },
  {
    id: 4,
    title: 'FILA',
    img: FilaImage,
  },
  {
    id: 5,
    title: 'NB',
    img: NBImage,
  },
  {
    id: 6,
    title: 'SAMSUNG',
    img: SamsungImage,
  },
  {
    id: 7,
    title: 'CANON',
    img: CanonImage,
  },
  {
    id: 8,
    title: 'PUMA',
    img: PumaImage,
  },
];
