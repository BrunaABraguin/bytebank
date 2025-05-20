interface UserGreetingsProps {
  name: string;
}

export const UserGreetings: React.FC<UserGreetingsProps> = ({ name }) => {
  const today = new Date();
  const formattedDate = today.toLocaleDateString("pt-BR", {
    weekday: "long",
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

  const capitalizedDate =
    formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);

  return (
    <div className="flex flex-col justify-center">
      {(() => {
        const currentHour = new Date().getHours();
        let greeting = "Boa noite";
        if (currentHour >= 5 && currentHour < 12) {
          greeting = "Bom dia";
        } else if (currentHour >= 12 && currentHour < 18) {
          greeting = "Boa tarde";
        }
        return (
          <div className="z-10 space-y-2">
            <h2 className="text-2xl font-bold">
              {greeting}, {name}!
            </h2>
            <p className="text-sm">{capitalizedDate}</p>
          </div>
        );
      })()}
    </div>
  );
};
