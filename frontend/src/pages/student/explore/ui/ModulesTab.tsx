import { Link } from "react-router-dom";
import { useModules } from "../../../../entities/module/api/useModules";
import { ModuleCard } from "../../../../entities/module/ui/ModuleCard";

export const ModulesTab = () => {
  const { data: modules, isLoading, error } = useModules();

  if (isLoading) return <div className="p-8 text-center text-gray-500">Memuat katalog modul...</div>;
  if (error) return <div className="p-8 text-center text-red-500">Gagal memuat modul: {error}</div>;

  return (
    <div className="p-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {modules.map((module) => (
          <Link to={`/student/module/${module.id}`} key={module.id} className="block h-full">
            <ModuleCard module={module} />
          </Link>
        ))}
      </div>
    </div>
  );
};
