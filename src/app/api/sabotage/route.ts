import { NextRequest, NextResponse } from 'next/server';
import { worsenSettings, generatePage } from '@/lib/chaos';
import { getGeneration, setGeneration } from '@/lib/store';

export async function POST(req: NextRequest) {
  try {
    const { id } = await req.json() as { id: string };
    const existing = getGeneration(id);
    if (!existing) return NextResponse.json({ error: 'Not found' }, { status: 404 });
    const newSettings = worsenSettings(existing.settings);
    const newGeneration = generatePage(existing.seed, newSettings);
    const updated = { ...newGeneration, id, version: existing.version + 1 };
    setGeneration(id, updated);
    return NextResponse.json({ ok: true, id, version: updated.version });
  } catch (err) {
    console.error('Sabotage error:', err);
    return NextResponse.json({ error: 'Sabotage failed' }, { status: 500 });
  }
}
