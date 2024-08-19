import useUser from "./useUser";





function UseAvatar() {

 const {user} = useUser()

 console.log(user)
  return (
    <div className="flex items-center text-secondary-500 gap-x-2">
      <span>{user?.name}</span>
      <img
        src="../../../public/1673264735224.jpg"
        className="w-10 h-10 object-cover object-center rounded-full"
        alt="user-account"
      />
    </div>
  );
}

export default UseAvatar;
