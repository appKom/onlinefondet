'use client';
import Custom404 from '@/app/not-found';
import { useSession } from 'next-auth/react';

const ApplicationsPage = () => {
  const { data: session } = useSession();

  if (!session || session.user?.role != 'admin') return <Custom404 />;

  return (
    <div className="flex flex-col min-h-screen items-center pt-8">
      <h1 className="text-4xl">Søknader</h1>
    </div>
  );
};

export default ApplicationsPage;
