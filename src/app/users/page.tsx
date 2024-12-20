"use client";

import { useState, useEffect } from "react";
import Table from "@/components/table";
import BackButton from "@/components/back-button"; 
import { fetchUsers } from "./api";

const Users = () => {
  const [users, setUsers] = useState([] as any[]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const usersData = await fetchUsers();
        setUsers(usersData);
      } catch (err: any) {
        if (err.message.includes("Redirecting")) {
          window.location.href = "/auth"; // Redirect to login
        } else {
          setError(err.message);
        }
      }
    };

    getUsers();
  }, []);

  const columns = [
    { header: "ID", accessor: "id" },
    { header: "Email", accessor: "email" },
    { header: "Created At", accessor: (row: any) => new Date(row.created_at).toLocaleString() },
    { header: "MFA", accessor: (row: any) => (row.mfa_enabled ? "Yes" : "No") },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 lg:mx-8 w-full">
        <div className="mb-4">
          <BackButton />
        </div>

        <h1 className="text-xl font-bold mb-4 text-center">Users</h1>
        <Table columns={columns} data={users} error={error} loadingText="Loading users..." />
      </div>
    </div>
  );
};

export default Users;
