function Main({ children }: { children: React.ReactNode }) {
  return (
    <main className="mx-auto w-full md:max-w-screen-2xl flex min-h-screen align-center gap-12 flex-col pt-12 px-3 md:px-24">
      {children}
    </main>
  );
}

export default Main;
