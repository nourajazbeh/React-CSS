import React from 'react';

const sections = [
  { id: 1, title: 'Section 1', content: 'Content for section 1' },
  { id: 2, title: 'Section 2', content: 'Content for section 2' },
  { id: 3, title: 'Section 3', content: 'Content for section 3' },
];

function Home() {
  return (
    <div>
      <h2>Home Page</h2>
      {sections.map((section) => (
        <section key={section.id} className="my-4 p-4 border rounded">
          <h3 className="text-xl font-bold">{section.title}</h3>
          <p>{section.content}</p>
        </section>
      ))}
    </div>
  );
}

export default Home;
