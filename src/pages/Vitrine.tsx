import Header from "@/components/Header";

const Vitrine = () => {
  return (
    <div className="min-h-screen overflow-hidden flex flex-col">
      <Header />
      <main className="flex-1 pt-20" style={{ height: 'calc(100vh - 63px)' }}>
        <iframe 
          src="https://metalurgicaferraco.egestor.com.br/vitrine/" 
          style={{ width: '100%', height: 'calc(100vh - 80px - 63px)', border: 'none' }}
          title="Demonstração de Vitrine"
        />
      </main>
    </div>
  );
};

export default Vitrine;
