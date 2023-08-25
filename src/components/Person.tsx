type PersonProps = {
  name: { firstName: string; lastName: string };
};

export const Person = ({ name }: PersonProps) => {
  return <p>{`${name.firstName} ${name.lastName}`}</p>;
};
