interface PersonProps {
  name: string;
  age: number;
  address: AdressProps;
}

interface AdressProps {
  country: string;
  numberHouse: number;
}

export const LiteralObjects = () => {
  const person: PersonProps = {
    name: 'John',
    age: 36,
    address: {
      country: 'Peru',
      numberHouse: 365,
    },
  };
  return <div>LiteralObjects</div>;
};
