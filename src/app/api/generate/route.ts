import { NextRequest, NextResponse } from 'next/server';
import { normalizeSettings, generatePage } from '@/lib/chaos';
import { setGeneration } from '@/lib/store';
import type { GeneratorSettings } from '@/lib/chaos';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json() as GeneratorSettings;
    const settings = normalizeSettings(body);
    const generation = generatePage(settings.seed, settings);
    setGeneration(generation.id, generation);
    return NextResponse.json({ id: generation.id, seed: generation.seed });
  } catch (err) {
    console.error('Generate error:', err);
    return NextResponse.json({ error: 'Generation failed' }, { status: 500 });
  }
}
