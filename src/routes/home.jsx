import { Link, useRouteError } from "react-router-dom";
import Team from "../components/team";
import Gallery from "../components/gallery";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className='h-screen'>
      <Gallery/>
      <Team/>
    </div>
  );
}