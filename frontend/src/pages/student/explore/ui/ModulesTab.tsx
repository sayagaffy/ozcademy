import { Link } from "react-router-dom";
import { modules } from "../../../../entities/module/model/mockData";
import { ModuleCard } from "../../../../entities/module/ui/ModuleCard";

export const ModulesTab = () => {
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
