export default async function Blog({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return <h2>id no{id}</h2>;
}
