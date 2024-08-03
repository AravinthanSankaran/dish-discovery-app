import React from "react";
import Link from "next/link";
function notfound() {
  return (
    <div>
      <h1>this page is not found</h1>
      <Link href={"/"}>Go to Home Page</Link>
    </div>
  );
}

export default notfound;
