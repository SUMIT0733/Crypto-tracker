import Heading from "./Heading";

function Header() {
  return (
    <header className="flex items-center justify-center gap-10 border border-gray-500 bg-gray-600 px-20 py-6">
        <Heading as='h2' className="text-white">Crypto Tracker</Heading>
    </header>
  );
}

export default Header;
