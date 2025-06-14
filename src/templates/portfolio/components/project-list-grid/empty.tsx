export function Empty() {
  return (
    <div className="text-center py-20">
      <div className="w-16 h-16 mx-auto mb-4 opacity-50">
        <svg
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          className="w-full h-full"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
          />
        </svg>
      </div>
      <h3 className="text-xl font-medium text-white mb-2">
        Nenhum projeto encontrado
      </h3>
      <p className="text-white/70 max-w-md mx-auto">
        Não encontramos projetos nesta categoria. Tente filtrar por uma
        categoria diferente.
      </p>
    </div>
  );
}
