import { useEffect, useRef } from "react";
import Layout from "@/components/Layout";

const TodoPage = () => {
  const ref = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (ref.current) ref.current.focus();
  }, []);

  return (
    <Layout>
      <div className="h-full flex flex-col items-center pt-6 w-[64rem]">
        <p className="self-start mb-8 pl-2">How do you feel today ?</p>
        <textarea
          ref={ref}
          className={`w-full h-3/5 rounded-lg p-2 bg-light outline-none`}
        />
      </div>
    </Layout>
  );
};

export default TodoPage;
