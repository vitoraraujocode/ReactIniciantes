import { ChevronLeftIcon } from "lucide-react";
import { useSearchParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Title from "../components/Title";

function TaskPage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const title = searchParams.get("title");
  const description = searchParams.get("description");
  return (
    <div className="h-screen w-screen bg-slate-500 p-6">
      <div className="w-[500px] space-y-4 mx-auto">
        <div className="flex items-center justify-between mb-6">
          <button onClick={() => navigate(-1)} className="text-white">
            <ChevronLeftIcon />
          </button>
          <Title>Detalhes da Tarefa</Title>
        </div>

        <div className="bg-slate-200 p-4 rounded-md">
          <h2 className="text-xl font-bold text-slate-600">{title}</h2>
          <p className="text-slate-600">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default TaskPage;
