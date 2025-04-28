import React from "react";
import Link from "next/link";

export default function Header() {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <Link
          href={{
            pathname: `cards/`,
          }}
        >
          <a className="navbar-brand" href="cards">
            名刺管理アプリ
          </a>
        </Link>
      </div>
    </nav>
  );
}
