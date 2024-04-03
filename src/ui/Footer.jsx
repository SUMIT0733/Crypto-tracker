import Heading from "./Heading";

function Footer() {
  return (
    <footer className="flex items-center justify-center gap-10 border border-gray-500 bg-gray-600 px-20 py-6">
      <Heading as="h3" className="text-white">
        Crypto Tracker
      </Heading>
    </footer>
  );
}

export default Footer;
