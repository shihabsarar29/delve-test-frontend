"use client";

import { useState, useEffect } from "react";
import Table from "@/components/table";
import { fetchTables } from "./api";
import BackButton from "@/components/back-button";

const Tables = () => {
  const [tables, setTables] = useState([] as any[]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getTables = async () => {
      try {
        const tablesData = await fetchTables();
        setTables(tablesData);
      } catch (err: any) {
        if (err.message.includes("Redirecting")) {
          window.location.href = "/auth"; // Redirect to login
        } else {
          setError(err.message);
        }
      }
    };

    getTables();
  }, []);

  const columns = [
    { header: "Table Name", accessor: "table_name" },
    { header: "Schema", accessor: "table_schema" },
    { header: "Type", accessor: "table_type" },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 lg:mx-8 w-full">
        <div className="mb-4">
          <BackButton />
        </div>
        <h1 className="text-xl font-bold mb-4 text-center">Tables</h1>
        <Table columns={columns} data={tables} error={error} loadingText="Loading tables..." />
      </div>
    </div>
  );
};

export default Tables;
