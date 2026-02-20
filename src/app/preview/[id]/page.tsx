import { notFound } from 'next/navigation';
import { getGeneration } from '@/lib/store';
import { PreviewClient } from '@/components/preview/PreviewClient';

interface Props {
  params: Promise<{ id: string }>;
}

export default async function PreviewPage({ params }: Props) {
  const { id } = await params;
  const generation = getGeneration(id);
  if (!generation) notFound();
  return <PreviewClient generation={generation} />;
}
