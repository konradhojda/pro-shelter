import Image from "next/image";

export default function Logo() {
  return (
    <Image
      src="/dog-silhouette-logo.png"
      alt="kitten"
      className="max-h-[60px]"
      width={60}
      height={60}
    />
  );
}
