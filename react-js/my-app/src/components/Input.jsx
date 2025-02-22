import { useUserFromContext } from "../context/users.context";

function Input({ inputValue, name, label }) {
  let { handelInput } = useUserFromContext();
  return (
    <>
      <section>
        <label htmlFor="">{label}</label>
        <input
          type="text"
          onChange={handelInput}
          value={inputValue}
          placeholder={`Enter ${label}`}
          name={name}
        />
      </section>
    </>
  );
}

export default Input;
