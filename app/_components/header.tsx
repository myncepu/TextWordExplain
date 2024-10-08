import Link from "next/link";

export default function Header() {
  return (
    <header className="flex justify-between items-center py-4 px-6 bg-white shadow-sm">
      <div className="flex items-center">
        <Link href="/" className="flex items-center">
          <img
            src="/logo.svg"
            className="rounded"
            alt="Logo"
            width={40}
            height={40}
          />
          <span className="ml-2 text-xl font-semibold text-gray-800 ">
            CardGeneratorAI
          </span>
        </Link>
      </div>

      <div className="flex items-center gap-3">
        <Link
          href="/social-card"
          className="text-md font-semibold text-gray-600"
        >
          生成社交卡片
        </Link>
      </div>

      <div className="flex items-center gap-3">
        {/* <Link
          href="https://github.com/myncepu/TextWordExplain"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icons.gitHub className="w-6 h-6" />
        </Link> */}
      </div>
    </header>
  );
}
