export default function heroLink({ color, link, position, company }) {
  return (
    <p className="text-sm text-white/80">
      {position}{" "}
      <a
        href={link}
        className={`${color} font-bold no-underline hover:underline-offset-2 hover:underline-blue hover:underline hover:transition-all duration-200`}
      >
        {company}
      </a>
    </p>
  );
}
