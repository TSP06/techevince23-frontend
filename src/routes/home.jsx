import { Link, useRouteError } from "react-router-dom";
import Team from "../components/team";
import Gallery from "../components/gallery";
import Info from "../components/info";
import TopPart from "./top-part";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className='h-screen'>
      <TopPart/>
      <Info/>
      <Gallery/>
      <Team/>
    </div>
  );
}