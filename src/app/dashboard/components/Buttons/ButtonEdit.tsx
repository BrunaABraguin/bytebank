"use client";

export const ButtonEdit: React.FC<{
  onClick: () => void;
}> = ({ onClick }) => {
  return (
    <button
      className="cursor-pointer ml-auto flex items-center justify-center w-8 h-8 rounded hover:bg-gray-100"
      onClick={onClick}
      aria-label="Mais opções"
    >
      <svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20">
        <circle cx="4" cy="10" r="2" />
        <circle cx="10" cy="10" r="2" />
        <circle cx="16" cy="10" r="2" />
      </svg>
    </button>
  );
};
