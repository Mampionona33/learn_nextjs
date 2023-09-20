interface IProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
}

async function fetchSpeakers(): Promise<IProduct[]> {
  const resp = await fetch("https://fakestoreapi.com/products", {
    cache: "no-store",
  });

  if (!resp.ok) {
    throw new Error("Failed to fetch data");
  }

  const data: IProduct[] = await resp.json();
  return data;
}

export default async function Products() {
  try {
    const data = await fetchSpeakers();
    return (
      <>
        <h1>Welcome to Products Page</h1>
        <div>Last rendered : {new Date().toLocaleTimeString()}</div>
        {data.map(({ id, title, price, description, category }) => (
          <ul key={id}>
            <li>
              {title} : {price} $
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
