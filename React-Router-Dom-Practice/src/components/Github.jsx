import { useLoaderData } from "react-router-dom";

export default function Github() {
  // const [data, setData] = useState({});
  // let fetchApi = async () => {
  //   let response = await fetch("https://api.github.com/users/hiteshchoudhary");
  //   let res = await response.json();
  //   setData(res);
  // };
  // fetchApi();

  const data = useLoaderData();

  return (
    <>
      <div className="flex justify-center flex-wrap items-center">
        <div className="flex gap-3 justify-center flex-col items-center">
          <div className="font-semibold">Your ID: {data.id}</div>
          <div className="font-semibold">Your Name: {data.name}</div>
          <div className="font-semibold">Your Followers: {data.followers}</div>
          <div className="w-[350px] font-semibold">BIO: {data.bio}</div>
          <div>
            <img
              className=" my-8 rounded-full h-[250px] opacity-20 cursor-pointer duration-500 hover:opacity-100 hover:scale-110 "
              src={data.avatar_url}
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}

export const GithubUserInfo = async () => {
  const response = await fetch("https://api.github.com/users/hiteshchoudhary");
  return response.json();
};
