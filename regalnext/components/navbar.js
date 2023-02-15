import Link from "next/link";
const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <h1>NinjaList</h1>
      </div>
      <Link href={"/"}>Home</Link>
      <Link href={"/about"}>About</Link>
      <Link href={"/ninjas"}>Ninja Listings</Link>
    </nav>
  );
};
export default Navbar;
