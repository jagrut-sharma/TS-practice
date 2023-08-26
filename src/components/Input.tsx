type InputProps = {
  value: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Input = ({ value, handleChange }: InputProps) => {
  // We can even define the function here as well
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    console.log(e);
  };

  return <input type="text" onChange={handleInputChange} value={value} />;
};
