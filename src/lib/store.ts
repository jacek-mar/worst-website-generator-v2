declare global {
  var __wwg2_generations__: Map<string, import('./chaos').Generation> | undefined;
}

function getStore(): Map<string, import('./chaos').Generation> {
  if (!globalThis.__wwg2_generations__) {
    globalThis.__wwg2_generations__ = new Map();
  }
  return globalThis.__wwg2_generations__;
}

export function putGeneration(gen: import('./chaos').Generation): void {
  getStore().set(gen.id, gen);
}

export function getGeneration(id: string): import('./chaos').Generation | undefined {
  return getStore().get(id);
}

export function setGeneration(id: string, gen: import('./chaos').Generation): void {
  getStore().set(id, gen);
}

export function getAllGenerations(): import('./chaos').Generation[] {
  return Array.from(getStore().values());
}
