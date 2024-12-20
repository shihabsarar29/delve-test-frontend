"use client";

import { useState, useEffect } from "react";
import Table from "@/components/table";
import { fetchProjects } from "./api";
import BackButton from "@/components/back-button";

const Projects = () => {
  const [projects, setProjects] = useState([] as any[]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getProjects = async () => {
      try {
        const projectsData = await fetchProjects();
        setProjects(projectsData);
      } catch (err: any) {
        if (err.message.includes("Redirecting")) {
          window.location.href = "/auth"; // Redirect to login
        } else {
          setError(err.message);
        }
      }
    };

    getProjects();
  }, []);

  const columns = [
    { header: "ID", accessor: "id" },
    { header: "Name", accessor: "name" },
    { header: "Created At", accessor: (row: any) => new Date(row.created_at).toLocaleString() },
    { header: "PITR", accessor: (row: any) => (row.pitr_enabled ? "Yes" : "No") },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 lg:mx-8 w-full">
        <div className="mb-4">
          <BackButton />
        </div>
        <h1 className="text-xl font-bold mb-4 text-center">Projects</h1>
        <Table columns={columns} data={projects} error={error} loadingText="Loading projects..." />
      </div>
    </div>
  );
};

export default Projects;
