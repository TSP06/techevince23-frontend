import { Link, useRouteError } from "react-router-dom";
import Team from "../components/team";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className='grid place-content-center gap-10 justify-items-center h-screen'>
      <Team/>
    </div>
  );
}