import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link } from "react-router-dom";

const Sitemap = () => {
  const pages = [
    {
      path: "/",
      name: "Site Map",
      description: "Site map of the website for development purposes",
    },
    {
      path: "/login",
      name: "Login",
      description: "Page for user authentication",
    },
    {
      path: "/signup",
      name: "Signup",
      description: "Page for user registration",
    },
    {
      path: "/dashboard",
      name: "Dashboard",
      description: "User dashboard",
    },
  ];

  return (
    <div className="w-full bg-background font-mono">
      <div className="w-full  text-3xl text-center py-4  text-white bg-blue-200">
        Site map of <span className="text-blue-500 font-bold">Sellie</span>
      </div>
      <div className="w-3/4 mx-auto grid grid-cols-4 py-10 gap-5">
        {pages.map((page) => (
          <Card className="flex flex-col mx-auto justify-center items-center text-center ">
            <CardHeader>
              <CardTitle>
                <span className="text-primary">{page.name}</span>
              </CardTitle>
              <CardDescription>{page.description}</CardDescription>
            </CardHeader>
            <CardContent>
              {page.name} is located{" "}
              <Link
                to={page.path}
                className="text-blue-400 underline underline-offset-2 hover:text-blue-600 hover:no-underline"
              >
                {" "}
                here
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Sitemap;