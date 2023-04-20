import React from "react";
import Socials from "../Socials";
import Link from "next/link";
import Button from "../Button";

const Footer = ({}) => {
  return (
    <>
      <div className="mt-5 laptop:mt-40 p-2 laptop:p-0">
        <div>
          <h1 className="text-2xl text-bold"></h1>
          <div className="mt-10">
            <h1 className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl text-bold">
              LET&apos;S
            </h1>
            <h1 className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl text-bold">
            CONNECT
            </h1>
            <Button type="primary" onClick={() => window.open("mailto:tylerkraus1@gmail.com")}>Schedule a call</Button>
            <div className="mt-10">
              <Socials />
            </div>
          </div>
        </div>
      </div>
      <h1 className="text-sm text-bold mt-2 laptop:mt-10 p-2 laptop:p-0">
        Website by{" "}
        <Link href="https://www.linkedin.com/in/tylerkraus-profile">
          <a className="underline underline-offset-1">Tyler Kraus</a>
        </Link>
      </h1>
    </>
  );
};

export default Footer;
