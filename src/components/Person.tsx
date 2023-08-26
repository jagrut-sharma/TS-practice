import { PersonProps } from "./Person.types";

export const Person = ({ name }: PersonProps) => {
  return <p>{`${name.first} ${name.last}`}</p>;
};
