import { InputVal } from './inputValue.styled';

export const InputValue = ({ value, onChange }) => {
  return (
    <>
      <InputVal
        type="text"
        autocomplete="off"
        autoFocus
        placeholder="Search images and photos"
        value={value}
        onChange={onChange}
      />
    </>
  );
};
