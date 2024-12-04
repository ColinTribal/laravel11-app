interface ImportMeta {
    glob: (pattern: string) => Record<string, () => Promise<{ default: React.ComponentType<any> }>>;
  }