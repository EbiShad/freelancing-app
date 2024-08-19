import useUser from "../Features/authentication/useUser"


function Home() {
  const {data} = useUser()

  console.log(data)
  return (
    <div>
      Home
    </div>
  )
}

export default Home
