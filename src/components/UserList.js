"use client";
import React, { Suspense, useEffect, useState } from "react";
import { Skeleton, Card } from "../components/index";

const UserList = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="container mt-24 mx-auto px-4 py-8">
      <div className="grid gap-8 md:grid-cols-4 lg:gap-x-12">
        <Suspense fallback={<Skeleton />}>
          {isLoading ? <Skeleton /> : <Card />}
        </Suspense>
      </div>
    </div>
  );
};

export default UserList;
