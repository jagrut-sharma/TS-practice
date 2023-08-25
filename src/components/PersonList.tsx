type PersonsListProps = {
  personList: {
    first: string;
    last: string;
  }[];
};

export const PersonList = ({ personList }: PersonsListProps) => {
  return (
    <div>
      {personList.map((person) => (
        <h2 key={person.first}>
          {person.first} {person.last}
        </h2>
      ))}
    </div>
  );
};
