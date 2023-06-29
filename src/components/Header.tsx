import { useCurrentLesson, useStore } from "../zustand-store";

export function Header() {
  const { currentModule, currentLesson } = useCurrentLesson();
  const isLoading = useStore((store) => store.isLoading);

  return (
    <div className="flex flex-col gap-1">
      <h1 className="text-2xl font-bold">
        {isLoading ? "Carregando..." : currentLesson?.title}
      </h1>
      <span className="text-sm text-zinc-400">
        Módulo "{isLoading ? "Carregando..." : currentModule?.title}"
      </span>
    </div>
  );
}
