import { Link } from "wouter";
import { Users, User, GraduationCap } from "lucide-react";

export function SessionTypes() {
  const sessionTypes = [
    {
      id: "1-2-1",
      title: "1-2-1",
      icon: User,
      link: "/individual-coaching",
      description: "Personalized one-on-one coaching sessions"
    },
    {
      id: "group",
      title: "Group",
      icon: Users,
      link: "/group-sessions",
      description: "Dynamic group training sessions"
    },
    {
      id: "coach-mentorship",
      title: "Coach Mentorship",
      icon: GraduationCap,
      link: "/contact",
      description: "Develop your coaching skills"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-black mb-4">
            Session Types
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {sessionTypes.map((session) => {
            const Icon = session.icon;
            return (
              <Link key={session.id} href={session.link}>
                <div className="group cursor-pointer">
                  <div className="bg-gray-200 rounded-lg p-12 flex flex-col items-center justify-center h-64 transition-all duration-200 hover:bg-gray-300">
                    <Icon className="w-20 h-20 text-gray-600 mb-4" />
                    <h3 className="text-2xl font-bold text-gray-800">{session.title}</h3>
                  </div>
                  <p className="text-center text-gray-600 mt-4">{session.description}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}