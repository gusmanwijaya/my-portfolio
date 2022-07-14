export default function Footer() {
  return (
    <>
      <footer className="p-10">
        <p className="text-center">
          Copyright © {new Date().getFullYear().toString()} - All right reserved
          by <span className="text-[#5651e5]">Gusman Wijaya</span>
        </p>
      </footer>
    </>
  );
}
