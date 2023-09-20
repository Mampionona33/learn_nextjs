interface Speaker {
  id: string;
  username: string;
  name: {
    firstname: string;
    lastname: string;
  };
}

async function fetchSpeakers(): Promise<Speaker[]> {
  const resp = await fetch("https://fakestoreapi.com/users", {
    next: { revalidate: 10 },
  });

  if (!resp.ok) {
    throw new Error("Failed to fetch data");
  }

  const data: Speaker[] = await resp.json();
  return data;
}

export default async function Speakers() {
  try {
    const data = await fetchSpeakers();
    return (
      <>
        <h1>Welcome to Speakers Page</h1>
        <h3>Speakers : </h3>
        <div>Last rendered : {new Date().toLocaleTimeString()}</div>
        {data.map(({ id, username, name }) => (
          <ul key={id}>
            <li>
              {name.firstname} {name.lastname}
            </li>
          </ul>
        ))}
      </>
    );
  } catch (error) {
    return (
      <>
        <h1>Error</h1>
        <p>{error.message}</p>
      </>
    );
  }
}
