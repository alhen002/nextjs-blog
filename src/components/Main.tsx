function Main({ children }: { children: React.ReactNode }) {
  return (
    <main className="mx-auto w-full md:max-w-screen-2xl flex min-h-screen align-center gap-12 flex-col py-12 px-4 md:px-24 bg-neutral-100 dark:bg-neutral-900 transition-colors duration-500">
      {children}
    </main>
  );
}

export default Main;
