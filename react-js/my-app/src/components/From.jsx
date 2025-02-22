import { useUserFromContext } from "../context/users.context";
import Input from "./Input";

function Form() {
  let { userForm } = useUserFromContext();
  return (
    <>
      <Input inputValue={userForm.username} name="username" label="UserName" />
      <Input inputValue={userForm.email} name="email" label="Email" />
      <Input inputValue={userForm.mobile} name="mobile" label="Mobile" />
    </>
  );
}

export default From;
