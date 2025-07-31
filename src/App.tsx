import React, { useState } from 'react';
import { Code, Zap, Layers, ArrowRight, Github, ExternalLink } from 'lucide-react';

function App() {
  const [activeTab, setActiveTab] = useState('overview');

  const features = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Lightning Fast",
      description: "Vite's dev server starts instantly and provides near-instant HMR"
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "TypeScript Ready",
      description: "Full TypeScript support with excellent developer experience"
    },
    {
      icon: <Layers className="w-6 h-6" />,
      title: "Modern Stack",
      description: "React 18, Tailwind CSS, and ESLint configured out of the box"
    }
  ];

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'features', label: 'Features' },
    { id: 'next', label: 'Next Steps' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-slate-200/60 sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-slate-800">Vite + React + TypeScript</h1>
                <p className="text-sm text-slate-600">Modern development setup</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <button className="flex items-center space-x-2 px-4 py-2 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors text-sm font-medium text-slate-700">
                <Github className="w-4 h-4" />
                <span>View Docs</span>
              </button>
              <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors text-sm font-medium">
                <span>Get Started</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Zap className="w-4 h-4" />
            <span>Ready to build amazing things</span>
          </div>
          <h2 className="text-5xl font-bold text-slate-900 mb-6 leading-tight">
            Your Modern Web
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"> Development</span>
            <br />Environment
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            A carefully crafted development setup with Vite, React 18, TypeScript, and Tailwind CSS. 
            Everything you need to build fast, modern web applications.
          </p>
        </div>

        {/* Tabs */}
        <div className="mb-8">
          <div className="flex space-x-1 bg-slate-100 p-1 rounded-lg max-w-md mx-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 px-4 py-2 rounded-md text-sm font-medium transition-all ${
                  activeTab === tab.id
                    ? 'bg-white text-slate-900 shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="bg-white rounded-2xl shadow-xl border border-slate-200/60 p-8">
          {activeTab === 'overview' && (
            <div className="space-y-8">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">What's Included</h3>
                <p className="text-slate-600 mb-8">Everything you need to start building immediately</p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6">
                {features.map((feature, index) => (
                  <div key={index} className="text-center p-6 rounded-xl bg-slate-50 hover:bg-slate-100 transition-colors">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg text-white mb-4">
                      {feature.icon}
                    </div>
                    <h4 className="text-lg font-semibold text-slate-900 mb-2">{feature.title}</h4>
                    <p className="text-slate-600">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'features' && (
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Technical Stack</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 p-4 bg-slate-50 rounded-lg">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="font-medium">Vite 5.4.2</span>
                    <span className="text-slate-500">- Next generation frontend tooling</span>
                  </div>
                  <div className="flex items-center space-x-3 p-4 bg-slate-50 rounded-lg">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="font-medium">React 18.3.1</span>
                    <span className="text-slate-500">- Latest React with concurrent features</span>
                  </div>
                  <div className="flex items-center space-x-3 p-4 bg-slate-50 rounded-lg">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span className="font-medium">TypeScript 5.5.3</span>
                    <span className="text-slate-500">- Type safety and better DX</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 p-4 bg-slate-50 rounded-lg">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                    <span className="font-medium">Tailwind CSS 3.4.1</span>
                    <span className="text-slate-500">- Utility-first CSS framework</span>
                  </div>
                  <div className="flex items-center space-x-3 p-4 bg-slate-50 rounded-lg">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span className="font-medium">ESLint 9.9.1</span>
                    <span className="text-slate-500">- Code quality and consistency</span>
                  </div>
                  <div className="flex items-center space-x-3 p-4 bg-slate-50 rounded-lg">
                    <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                    <span className="font-medium">Lucide React</span>
                    <span className="text-slate-500">- Beautiful icon library</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'next' && (
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Next Steps</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border border-blue-100">
                  <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Start Building Components</h4>
                    <p className="text-slate-600">Create your first React components in the src/ directory</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border border-green-100">
                  <div className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Add Routing</h4>
                    <p className="text-slate-600">Install React Router for navigation between pages</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg border border-purple-100">
                  <div className="w-6 h-6 bg-purple-500 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Deploy Your App</h4>
                    <p className="text-slate-600">Use npm run build to create production build</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-12 mt-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className="text-lg font-semibold">Ready to build</span>
          </div>
          <p className="text-slate-400">
            Happy coding! Your development environment is ready.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;