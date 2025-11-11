import { useEffect } from "react";
import Header from "@/components/Header";

const Vitrine = () => {
  useEffect(() => {
    // Trava a rolagem do body
    document.body.style.overflow = 'hidden';
    
    // Carrega o script do badge MonteSite
    const script = document.createElement('script');
    script.src = 'https://vaabpicspdbolvutnscp.supabase.co/functions/v1/get-footer-iframe';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Restaura a rolagem do body ao desmontar
      document.body.style.overflow = 'unset';
      // Limpa o script ao desmontar
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="h-screen overflow-hidden flex flex-col">
      <Header />
      <main className="flex-1 pt-20 overflow-hidden" style={{ height: 'calc(100vh - 63px)' }}>
        <iframe 
          src="https://metalurgicaferraco.egestor.com.br/vitrine/" 
          style={{ width: '100%', height: 'calc(100vh - 80px - 63px)', border: 'none' }}
          title="Demonstração de Vitrine"
        />
      </main>
      {/* Badge MonteSite */}
      <div id="montesite-footer-badge"></div>
    </div>
  );
};

export default Vitrine;
