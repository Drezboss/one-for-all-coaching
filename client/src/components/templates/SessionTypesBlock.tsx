import { Users, User, Handshake } from "lucide-react";

interface SessionType {
  name: string;
  Icon: React.ComponentType<{ className?: string }>;
}

const SESSION_TYPES: SessionType[] = [
  { name: "1-2-1", Icon: User },
  { name: "Group", Icon: Users },
  { name: "Coach Mentorship", Icon: Handshake },
];

export function SessionTypesBlock() {
  return (
    <section
      id="sessions"
      className="bg-white dark:bg-neutral-950 text-gray-900 dark:text-gray-100 py-16 px-6 border-b border-border"
    >
      <div className="max-w-xl mx-auto space-y-10">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-center">
          Session Types
        </h2>

        <div className="grid grid-cols-3 gap-6">
          {SESSION_TYPES.map(({ name, Icon }) => (
            <div
              key={name}
              className="flex flex-col items-center text-center space-y-2"
            >
              <div className="w-14 h-14 rounded-md bg-gray-200 dark:bg-neutral-800 flex items-center justify-center">
                <Icon className="w-7 h-7 text-primary" />
              </div>
              <span className="text-sm font-medium">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}