export default function Footer() {
  return (
    <footer className="w-full bg-gray-100 text-center py-4 text-sm text-gray-600 mt-auto shadow-inner">
      © {new Date().getFullYear()} DocLocker. All rights reserved.
    </footer>
  );
}
