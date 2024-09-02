"use client";

import PageContainer from '@/components/layout/page-container';
import { useUserData } from '@/context/UserDataContext';
import dashboardBackground from "../../public/dashboardBackground.png";

// Importing specific Lucide icons
import {Code, FileText, Folder, User } from 'lucide-react';

export default function Page() {
  const { user } = useUserData();

  return (
    <PageContainer scrollable={true}>
      {/* Welcome Banner Section */}
      <div
        className="mb-8 bg-cover bg-center rounded-lg overflow-hidden relative"
        style={{ backgroundImage: `url(${dashboardBackground.src})` }}
      >
        <div className="flex flex-col items-center justify-center h-[400px] bg-black/40 backdrop-blur-sm rounded-lg p-6">
          <div className="text-center text-white max-w-4xl">
            <h1 className="text-4xl font-semibold mb-4">
              Welcome to Acme AI
            </h1>
            <p className="text-lg mb-4">
              We're excited to have you join our community. Whether you're new to programming or a veteran developer, we're here to help you get started and build great things with AI.
            </p>
            <button className="px-4 py-2 bg-white text-black rounded-lg hover:bg-black hover:text-white transition duration-300">
              Start onboarding
            </button>
          </div>
        </div>
      </div>

      {/* Featured Tutorials Section */}
      <div>
        <h2 className="text-2xl font-semibold mb-4">Explore</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1 */}
          <a href="/projects" className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <div className="flex justify-center mb-4">
              <Code className="w-10 h-10 text-gray-500 dark:text-gray-400" />
            </div>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Projects</h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">Explore your projects to kickstart your journey</p>
          </a>

          {/* Card 2 */}
          <a href="/documents" className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <div className="flex justify-center mb-4">
              <FileText className="w-10 h-10 text-gray-500 dark:text-gray-400" />
            </div>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Documents</h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">Manage your documents efficiently</p>
          </a>

          {/* Card 3 */}
          <a href="/profile" className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <div className="flex justify-center mb-4">
              <User className="w-10 h-10 text-gray-500 dark:text-gray-400" />
            </div>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Profile</h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">Change your profile settings</p>
          </a>
        </div>
      </div>
    </PageContainer>
  );
}
