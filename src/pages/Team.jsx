import React from 'react';

const team = [
  {
    name: 'Alice Green',
    role: 'Head Gardener',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    name: 'Bob Clean',
    role: 'Cleaning Specialist',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    name: 'Carol Bloom',
    role: 'Garden Designer',
    image: 'https://randomuser.me/api/portraits/women/68.jpg',
  },
];

export default function Team() {
  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-12">Meet the Team</h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
        {team.map((member) => (
          <div
            key={member.name}
            className="bg-white rounded-lg shadow-lg p-6 text-center"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-32 h-32 mx-auto rounded-full object-cover mb-4"
            />
            <h3 className="font-semibold text-lg">{member.name}</h3>
            <p className="text-green-700">{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}